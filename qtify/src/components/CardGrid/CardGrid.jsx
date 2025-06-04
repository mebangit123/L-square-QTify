import { Box, Grid, Button, Typography } from "@mui/material";
import AlbumCard from "../Card/AlbumCard";
export default function CardGrid({data, type}) {
    return (
        <Box sx={{position: 'relative'}}>
            <Grid container spacing={3}>
            {
                data.map((album, index) => (                        
                    <Grid item key={index}>
                        <AlbumCard data={album} type={type}/>
                    </Grid>
                )
                )}  
            </Grid>
        </Box>
    )
}