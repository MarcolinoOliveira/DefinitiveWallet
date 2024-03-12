'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Box, IconButton, Typography } from "@mui/material";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WalletIcon from '@mui/icons-material/Wallet';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { usePathname, useRouter } from "next/navigation";
import useBarActions from "@/hooks/useBarActions";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import { useEffect } from "react";
import UpdateCurrencys from "./updates/UpdateCurrencys";
import UpdateDashboard from "./updates/UpdateDashboard";
import UpdateTradings from "./updates/UpdateTradings";
import { useSession } from "next-auth/react";

const SideBar = () => {

  const { isCollapsed, toggleSideBar } = useBarActions()
  const { lg } = useMediaQueryAdapted()
  const { mode } = useThemeMode()
  const { toggleModalSignIn } = useBarActions()
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (lg) toggleSideBar()
  }, [lg, toggleSideBar])

  const colors = tokens(mode)
  const width = lg ? isCollapsed ? '0px' : '200px' : isCollapsed ? '80px' : '220px'
  const position = lg ? 'fixed' : 'relative'

  const menus = [
    { icon: <HomeOutlinedIcon />, href: '/', title: 'Home' },
    { icon: <GridViewOutlinedIcon />, href: '/Dashboard', title: 'Dashboard' },
    { icon: <WalletIcon />, href: '/Wallet', title: 'My Wallet' },
    { icon: <AutorenewIcon />, href: '/Trading', title: 'Tradings' },
  ]

  const handleToggleSideBar = (href: string) => {
    if (!session?.user?.email) {
      toggleModalSignIn()
      return
    }
    lg && toggleSideBar()
    router.push(href)
  }

  return (
    <Box
      position={position}
      width={width}
      height='100vh'
      sx={{ transitionDuration: '300ms' }}
      bgcolor={colors.grey[900]}
      zIndex={1000}
    >
      {/* Update all data real time */}
      <UpdateCurrencys />
      <UpdateDashboard />
      <UpdateTradings />

      <IconButton
        sx={{ position: 'absolute', right: -20, top: 20 }}
        onClick={toggleSideBar}>
        {isCollapsed && !lg && <ArrowCircleRightRoundedIcon color="primary" />}
        {!isCollapsed && <ArrowCircleLeftRoundedIcon color="primary" />}
      </IconButton>
      <Box display='flex' gap={2} alignItems='center' height={50} mx={3} mt={2} mb={5} onClick={() => router.push('/')}>
        <Typography noWrap={lg ? true : false} sx={{ cursor: 'pointer' }}>
          <img src="/icon.png" alt="icon" width={35} height={35} />
        </Typography>
        <Typography color={colors.indigo[500]} fontWeight='bold' variant="h6" fontFamily='italic' noWrap sx={{ cursor: 'pointer' }}>
          CryptoNext
        </Typography>
      </Box>
      {menus.map((item, key) => (
        <Box
          key={key}
          display='flex'
          gap={2}
          mx='12px'
          mb='5px'
          height={40}
          alignItems='center'
          sx={{
            cursor: 'pointer',
            ":hover": { backgroundColor: colors.indigo[500] }
          }}
          onClick={() => handleToggleSideBar(item.href)}
          borderRadius={4}
          bgcolor={pathname === item.href ? colors.indigo[500] : 'transparent'}
          color={pathname === item.href ? 'white' : colors.grey[100]}
        >
          <Typography noWrap={lg ? true : false} ml='16px' mt='5px' fontWeight={500}>{item.icon}</Typography>
          <Typography noWrap fontWeight={500}>{item.title}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default SideBar;