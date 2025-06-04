import React from "react";
import LogoImage from "../../assets/qlogo.png";
import   {Box, Typography} from "@mui/material";
export default function Logo() {
  return (
    <Box sx={{ml: 10}}>
      <img src={LogoImage} alt="logo" width={67} />
      {/* <Typography color="primary" variant="h5">Q tify</Typography> */}
    </Box>    
  );
}