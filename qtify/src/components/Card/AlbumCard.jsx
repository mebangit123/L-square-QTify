import styles from "./AlbumCard.module.css";
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { red } from "@mui/material/colors";

const AlbumCard = ({data, type}) => {
  return (
    <Box sx={{
            // height: '300px',
            // backgroundColor: 'blue'
        }}
    >
        <Link to="/album-details" style={{ textDecoration: 'none' }}>
      <Card variant="outlined" sx={{height:250, boxShadow: 1, borderRadius: 3,}}>
        <CardMedia
          component="img"
          height="80%"
          width="80%"
          src={data.image}
          alt="Album Cover"
        />        
        <CardContent sx={{px: 1, py:1, '&:last-child': { pb: 0 }}}>
            <Chip
                label={type === 'album' ? `${data.follows} Follows` : `${data.likes} Likes`}
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    '& .MuiChip-label': {
                    color: 'white',
                    },
                }}
            />          
        </CardContent>
      </Card>
    </Link>
    <Box sx={{my:2}}>
      <Typography 
        sx={{
          color: '#FFFFFF',
          font: 'Poppins',
          fontSize: 14,          
        }}
      >
        {data.title}
      </Typography>
    </Box>                
    </Box>    
  );
};

export default AlbumCard;