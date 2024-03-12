'use client'

import { AlertBarProps } from "@/@types/types";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Alert, Snackbar } from "@mui/material";


const AlertBar = ({ open, handleClose, textAlert, severity }: AlertBarProps) => {

  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: '100%', color: colors.white[500], fontWeight: 'bold' }}
        variant="filled"
      >
        {textAlert}
      </Alert>
    </Snackbar>
  );
}

export default AlertBar;