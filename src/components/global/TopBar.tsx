'use client'

import { useEffect, useState } from "react";
import { tokens } from "@/theme/theme";
import { Avatar, Box, Grid, IconButton, MenuItem, Typography, Divider } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import useThemeMode from "@/hooks/useThemeMode";
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQueryAdapter from "@/hooks/useMediaQueryAdapter";
import SignInModal from "../modals/signin/SignInModal";
import useBarActions from "@/hooks/useBarActions";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SubMenu from "./SubMenu";
import { useAlertBar } from "@/hooks/useAlertBar";
import AlertBar from "./AlertBar";
import { useSetCoinsWallet, useSetTradingsWallet } from "@/hooks/useCoinsWallet";
import { snapshotAllTraders, snapshotCoinsWallet } from "@/firebase/snapshot";

const TopBar = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [titlePage, setTitlePage] = useState('')

  const { setCoinsWallet } = useSetCoinsWallet()
  const { setTradingsWallet } = useSetTradingsWallet()
  const { lg } = useMediaQueryAdapter()
  const { toggleSideBar, isOpenSignIn, toggleModalSignIn } = useBarActions()
  const { data: session, status } = useSession()
  const { mode, toggleTheme } = useThemeMode()
  const { alert, handleCloseAlert } = useAlertBar()

  const pathname = usePathname()
  const email = session?.user?.email
  const open = Boolean(anchorEl)
  const colors = tokens(mode)
  const isAuthenticated = status === 'authenticated'
  const position = lg ? 'fixed' : 'relative'

  useEffect(() => {
    if (!email) return
    snapshotCoinsWallet({ email, setCoinsWallet })
    snapshotAllTraders({ email, setTradingsWallet })
  }, [email, setCoinsWallet, setTradingsWallet])

  useEffect(() => {
    if (pathname === '/') return setTitlePage('Home')
    if (pathname === 'Wallet') return setTitlePage('My Wallet')
    setTitlePage(pathname.replace("/", ""))
  }, [pathname])

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenSignIn = () => {
    toggleModalSignIn()
    handleClose()
  }

  function stringAvatar(name: string | null | undefined) {
    return {
      sx: {
        bgcolor: colors.indigo[500],
        width: 33,
        height: 33,
      },
      children: `${name?.split(' ')[0][0].toUpperCase()}`,
    };
  }

  return (
    <>
      <Grid container direction='row' width='100%' position={position} px='20px' bgcolor={colors.darkblue[500]} zIndex={900}>
        {lg &&
          <Grid item xs={4} lg={0} display='flex' justifyContent='start' alignItems='center'>
            <IconButton onClick={toggleSideBar}>
              <MenuIcon />
            </IconButton>
          </Grid>
        }
        <Grid item xs={4} lg={1} display='flex' justifyContent={lg ? 'center' : 'start'} alignItems='center'>
          <Typography variant='h6' fontWeight='bold'>{titlePage}</Typography>
        </Grid>

        <Grid item xs={4} lg={11}>
          <Box display='flex' width='100%' justifyContent='end' alignItems='center' height='60px'>
            {!lg && mode === 'dark' &&
              <IconButton onClick={toggleTheme}>
                <DarkModeOutlinedIcon />
              </IconButton>
            }
            {!lg && mode === 'light' &&
              <IconButton onClick={toggleTheme}>
                <LightModeOutlinedIcon />
              </IconButton>
            }
            {!lg &&
              <IconButton>
                <NotificationsNoneIcon />
              </IconButton>
            }
            {!email &&
              <IconButton onClick={handleClick}>
                <PermIdentityIcon />
              </IconButton>
            }
            {email &&
              <IconButton onClick={handleClick}>
                <Avatar {...stringAvatar(session?.user?.name)} />
              </IconButton>}
          </Box>
        </Grid>
      </Grid>
      <SubMenu anchorEl={anchorEl} handleClose={handleClose} open={open}>
        {isAuthenticated &&
          <Box display='flex' flexDirection='column' p={3} gap={2} justifyContent='center' alignItems='center'>
            <Typography variant='body2'>{email}</Typography>
            <Avatar {...stringAvatar(session?.user?.name)} />
            <Typography>{session?.user?.name}</Typography>
          </Box>}
        {isAuthenticated && <Divider />}
        {lg && mode === 'dark' &&
          <MenuItem onClick={toggleTheme}>
            <DarkModeOutlinedIcon sx={{ mr: 1 }} /> Dark Mode
          </MenuItem>
        }
        {lg && mode === 'light' &&
          <MenuItem onClick={toggleTheme}>
            <LightModeOutlinedIcon sx={{ mr: 1 }} /> Ligth Mode
          </MenuItem>
        }
        {lg &&
          <MenuItem>
            <NotificationsNoneIcon sx={{ mr: 1 }} /> Notifications
          </MenuItem>
        }
        {!isAuthenticated &&
          <MenuItem onClick={handleOpenSignIn}>
            <LoginIcon sx={{ mr: 1 }} /> Sign In
          </MenuItem>
        }
        {isAuthenticated && <Divider />}
        {isAuthenticated &&
          <MenuItem onClick={() => signOut()}>
            <LogoutIcon sx={{ mr: 1 }} /> Log Out
          </MenuItem>
        }
      </SubMenu>
      <SignInModal isOpen={isOpenSignIn} toggleModal={toggleModalSignIn} />
      <AlertBar open={alert.open} textAlert={alert.textAlert} handleClose={handleCloseAlert} severity={alert.severity} />
    </>
  );
}

export default TopBar;