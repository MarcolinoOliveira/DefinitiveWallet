'use client'

import { Grid } from "@mui/material";

type TraderImageProps = {
  image: string
}

const TraderImage = ({ image }: TraderImageProps) => {

  return (
    <Grid item xs={1} display='flex' justifyContent='center' alignItems='center' pl={0.5}>
      <img src={image} alt="symbol" width={30} height={30} />
    </Grid>
  );
}

export default TraderImage;