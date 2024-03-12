'use client'

import { AlertBarProps } from "@/@types/types"
import { Dispatch, SetStateAction, ReactNode, useState, useCallback } from "react"
import { createContext } from "use-context-selector"

type AlertBarContextProps = {
  alert: AlertBarProps
  setAlert: Dispatch<SetStateAction<AlertBarProps>>
  handleClose: () => void
}

const AlertBarContext = createContext({} as AlertBarContextProps)

export const AlertBarProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertBarProps>({
    open: false,
    textAlert: '',
    severity: 'error'
  })

  const handleClose = useCallback((event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({ ...alert, open: false })
  }, [alert]);

  return (
    <AlertBarContext.Provider value={{ alert, setAlert, handleClose }}>
      {children}
    </AlertBarContext.Provider>
  )
}

export default AlertBarContext;