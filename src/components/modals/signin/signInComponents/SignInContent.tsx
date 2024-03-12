'use client'

import { ReactNode } from "react";

interface SignInContentProps {
  children: ReactNode
}

const SignInContent = ({ children }: SignInContentProps) => {

  return (
    <>
      {children}
    </>
  );
}

export default SignInContent;