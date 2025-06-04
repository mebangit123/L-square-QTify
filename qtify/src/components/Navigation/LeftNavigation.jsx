import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Box, Grid, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function LeftNavigation () {
    const swipe = useSwiper();
    return (
        <Box display='flex' justifyContent='center' alignItems='center'
                        onClick={() => {
                            swipe.slidePrev();
                        }}
                        sx={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'rgba(52, 201, 75, 1)',
                            position: 'absolute',
                            bottom: 50,
                            top: 50,
                            borderRadius: 50,
                            zIndex: 1 
                        }}
                    >
                        <ArrowBackIosIcon sx={{color: '#ffff'}} />
                    </Box>
    )
}