import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Box, Grid, Button, Typography } from "@mui/material";

export default function RightNavigation () {
    const swipe = useSwiper();
    return (
        <Box display='flex' justifyContent='center' alignItems='center'
                        onClick={()=> swipe.slideNext()}
                        sx={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'rgba(52, 201, 75, 1)',
                            position: 'absolute',
                            bottom: 50,
                            top: 50,
                            right: 10,
                            borderRadius: 50,
                            zIndex: 1, 
                            cursor: 'pointer'
                        }}
                    >
                        <ArrowForwardIosIcon sx={{color: '#ffff'}}/>
                    </Box> 
    );
}