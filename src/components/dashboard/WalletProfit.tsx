'use client'

import { snapshotDashboardData } from "@/firebase/snapshot"
import useThemeMode from "@/hooks/useThemeMode"
import { tokens } from "@/theme/theme"
import { Box, Typography, styled } from "@mui/material"
import { DocumentData } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { Suspense, useEffect, useState } from "react"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WalletIcon from '@mui/icons-material/Wallet';

const WalletProfit = () => {

  const [dashboardData, setDashboardData] = useState<DocumentData>({})

  const { data: session } = useSession()
  const { mode } = useThemeMode()

  const email = session?.user?.email
  const colors = tokens(mode)

  useEffect(() => {
    if (!email) return
    snapshotDashboardData({ email, setDashboardData })
  }, [email])

  const contribution = dashboardData.contributed?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  const profitUSD = (dashboardData.balance - dashboardData.contributed)
  const profitPorcent = ((dashboardData.balance * 100) / dashboardData.contributed) - 100
  const color = profitUSD === 0 ? colors.grey[100] : profitUSD > 0 ? '#00dc07' : 'red'

  const CustomBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    width: '100%',
    backgroundColor: colors.grey[900],
    padding: '30px 15px 30px 20px',
    borderRadius: '12px',
    height: 'auto',
  }))

  return (
    <CustomBox>
      <Box display='flex' gap={1} pb={4}>
        <WalletIcon />
        <Typography fontWeight={500}>Wallet</Typography>
      </Box>
      <Suspense fallback={<Box>Loading...</Box>}>
        <Box display='flex' alignItems='center'>
          <Typography variant='h5' fontWeight='bold'>{contribution}</Typography>
          <Typography variant="body2" mt='5px' ml='5px'>USD</Typography>
        </Box>
        <Box display='flex' alignItems='center' ml={-1}>
          {profitUSD > 0 && <ArrowDropUpIcon sx={{ color: color, mt: '2px', mr: '-2px' }} />}
          {profitUSD < 0 && <ArrowDropDownIcon sx={{ color: color, mt: '2px', mr: '-2px' }} />}
          <Typography color={color} fontWeight='bold' variant='body2'>
            ${profitUSD.toFixed(2)} ({profitPorcent.toFixed(2)}%)
          </Typography>
        </Box>
      </Suspense>
      <Typography pt={2.8} variant='body2' fontWeight={500}>Amount Invested</Typography>
    </CustomBox>
  );
}

export default WalletProfit;