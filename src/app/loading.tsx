import { Box, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='50vh'
    >
      <Typography>Loading...</Typography>
    </Box>
  )
}