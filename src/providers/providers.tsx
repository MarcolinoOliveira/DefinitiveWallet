'use client'

import { ApiContextProvider } from "@/context/ApiContext";
import { ActionsProvider } from "@/context/ActionsContext";
import { ThemeModeProvider } from "@/context/ThemeContext";
import NextAppDirEmotionCacheProvider from "@/theme/EmotionCache";
import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { AlertBarProvider } from "@/context/AlertBarContext";
import { CoinsWalletProvider } from "@/context/CoinsWalletContext";


const Providers = ({ children }: { children: React.ReactNode }) => {

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <SessionProvider>
        <ThemeModeProvider>
          <ActionsProvider>
            <AlertBarProvider>
              <ApiContextProvider>
                <CoinsWalletProvider>
                  <CssBaseline />
                  {children}
                </CoinsWalletProvider>
              </ApiContextProvider>
            </AlertBarProvider>
          </ActionsProvider>
        </ThemeModeProvider>
      </SessionProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

export default Providers;