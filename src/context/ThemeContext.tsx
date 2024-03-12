'use client'

import { themeSettings } from "@/theme/theme";
import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useState, useCallback, useMemo } from "react";

type ThemesContextProps = {
  mode: 'light' | 'dark',
  toggleTheme: () => void
}

const ThemesContext = createContext({} as ThemesContextProps)

export const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')

  const toggleTheme = useCallback(() => {
    setMode(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemesContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  )
}

export default ThemesContext;