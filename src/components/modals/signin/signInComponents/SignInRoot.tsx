'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Grid, Modal } from "@mui/material";
import { ReactNode } from "react";

interface SignInRootProps {
  isOpen: boolean,
  toggleModal: () => void,
  children: ReactNode
}

const SignInRoot = ({ isOpen, toggleModal, children }: SignInRootProps) => {
  const { sm } = useMediaQueryAdapted()
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: sm ? 300 : 400,
    bgcolor: 'background.default',
    borderRadius: '10px',
    boxShadow: 24,
    border: '2px solid',
    borderColor: colors.grey[500],
    p: 4,
  };

  return (
    <Modal
      open={isOpen}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container direction='column' gap={2}>
          {children}
        </Grid>
      </Box>
    </Modal>
  );
}

export default SignInRoot;