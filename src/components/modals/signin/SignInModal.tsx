'use client'

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormDataProps, ModalSignInProps } from '@/@types/types';
import { SignIn } from './signInComponents';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSetAlertBar } from '@/hooks/useAlertBar';

const SignInModal = ({ isOpen, toggleModal }: ModalSignInProps) => {

  const [registerAccount, setRegisterAccount] = useState<boolean>(false)

  const { setAlert } = useSetAlertBar()
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataProps>()
  const router = useRouter()

  const onSubmitLogIn = async (data: FormDataProps) => {
    await signIn('credentials', { ...data, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          setAlert({ open: true, textAlert: callback.error, severity: "error" })
        }
        if (callback?.ok && !callback?.error) {
          toggleModal()
          router.push('/Dashboard')
          setAlert({ open: true, textAlert: 'successfully logged', severity: "success" })
        }
      })
  }

  const onSubmitSignUp = async (data: FormDataProps) => {
    try {
      await axios.post('api/auth/register', data)
        .then(() => setAlert({ open: true, textAlert: 'User has been registered', severity: 'success' }))
      setRegisterAccount(prev => !prev)
    } catch (error) {
      setAlert({ open: true, textAlert: 'Email Already Exist', severity: "error" })
    }
  }

  return (
    <SignIn.Root isOpen={isOpen} toggleModal={toggleModal}>
      {!registerAccount && <SignIn.Title text='Log In with your account' />}
      {registerAccount && <SignIn.Title text='Register your Account' />}

      <SignIn.Content>
        {registerAccount && <SignIn.InputUser register={register} errors={errors} />}
        <SignIn.InputEmail register={register} errors={errors} />
        <SignIn.InputPassword register={register} errors={errors} />
        <SignIn.Actions>
          {!registerAccount && <SignIn.Button onClick={handleSubmit(onSubmitLogIn)} text='Log In' />}
          {registerAccount && <SignIn.Button onClick={handleSubmit(onSubmitSignUp)} text='Sign Up' />}
        </SignIn.Actions>
      </SignIn.Content>

      {!registerAccount && <SignIn.Footer onClick={setRegisterAccount} text='Don`t have an account?' textButton='Sign Up' />}
      {registerAccount && <SignIn.Footer onClick={setRegisterAccount} text=' Already have an account?' textButton='Log In' />}
    </SignIn.Root>
  );
}

export default SignInModal;