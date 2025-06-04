import RightNavigation from '../Navigation/RightNavigation';
import LeftNavigation from '../Navigation/LeftNavigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Navigation, Pagination } from "swiper/modules";
import AlbumCard from "../Card/AlbumCard";
import 'swiper/css';
import 'swiper/css/navigation';
import { Box, Grid, Button, Typography } from "@mui/material";

export default function Corousel({data, type}) {
    return (
        <Box sx={{position: 'relative'}}>
            <Swiper
                slidesPerView={6}
                spaceBetween={20}  
                modules={[Navigation, Pagination, A11y]}                                     
            // navigation={true} modules={[Navigation]} className="mySwiper"
            >
                <Grid container>
                {
                    data.map((album, index) => (
                        <SwiperSlide key={index}>
                            <Grid item md={2}>
                                <AlbumCard data={album} type={type}/>
                            </Grid>
                        </SwiperSlide>
                    )
                )}  
                </Grid>
                <RightNavigation />
                <LeftNavigation />                                                 
            </Swiper>                                                   
        </Box> 
    )    
}