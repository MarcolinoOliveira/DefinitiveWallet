import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '../providers/providers'
import { Box } from '@mui/material'
import TopBar from '../components/global/TopBar'
import SideBar from '@/components/global/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: 'icon.png',
  },
  title: 'CryptoNext',
  description: 'Definitive Wallet',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex' }}>
        <Providers>
          <SideBar />
          <Box width='100%' height='100vh'>
            <TopBar />
            <Box px='20px'>
              {children}
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  )
}
