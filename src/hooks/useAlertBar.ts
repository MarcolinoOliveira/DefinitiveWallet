'use client'

import AlertBarContext from "@/context/AlertBarContext"
import { useContextSelector } from "use-context-selector"

export function useAlertBar() {
  const alert = useContextSelector(AlertBarContext, toggle => toggle.alert)
  const handleCloseAlert = useContextSelector(AlertBarContext, toggle => toggle.handleClose)

  return {
    alert,
    handleCloseAlert
  }
}

export function useSetAlertBar() {
  const setAlert = useContextSelector(AlertBarContext, toggle => toggle.setAlert)

  return {
    setAlert
  }
}