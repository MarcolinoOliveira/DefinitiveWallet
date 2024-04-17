'use client'

import { useTradingsWallet } from "@/hooks/useCoinsWallet"
import useThemeMode from "@/hooks/useThemeMode"
import { tokens } from "@/theme/theme"
import { Box, Button, Grid, Typography } from "@mui/material"
import { useRouter } from "next/navigation"


const LastTradings = () => {

  const { tradingsWallet } = useTradingsWallet()
  const { mode } = useThemeMode()
  const router = useRouter()

  const colors = tokens(mode)
  const orderByDataTrader = tradingsWallet.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const lastFiveTraders = orderByDataTrader.slice(0, 5)

  return (
    <Box p={2} width='100%' height='auto' borderRadius={3} bgcolor={colors.grey[900]}>
      <Grid container spacing={1.5} direction='column'>
        <Grid item>
          <Box display='flex' justifyContent='space-between' alignItems='center' mb={1}>
            <Typography fontWeight='bold'>Last Tradings</Typography>
            <Button onClick={() => router.push('/Trading')}>
              <Typography textTransform="capitalize" fontWeight={500}>View all</Typography>
            </Button>
          </Box>
        </Grid>
        {lastFiveTraders?.map((item, key) => (
          <Grid key={key} item container direction='row'>
            <Grid item xs={2} pt={0.2}>
              <img src={item.image} alt="symbol" width={30} height={30} />
            </Grid>
            <Grid item xs={5}>
              <Box display='flex' flexDirection='column'>
                <Typography variant="body2" fontWeight={500}>{item.name}</Typography>
                <Typography variant="body2" fontWeight={500} textTransform='uppercase' color={colors.grey[600]}>
                  {item.symbol}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box display='flex' flexDirection='column' width='100%' alignItems='end'>
                <Box display='flex' gap={1}>
                  <Typography variant="body2" fontWeight={500} textTransform='uppercase'
                    color={item.status === 'buy' ? '#00dc07' : 'red'}>
                    {item.status}
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {item.value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </Typography>
                </Box>
                <Typography color={colors.grey[600]}>{new Date(item.date).toLocaleDateString()}</Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LastTradings;