import { useState } from "react";
import { Grow, Box, Tabs, Tab, Grid, Button, Typography } from "@mui/material";
 export default function TabPanel({filters, selectedFilter, setSelectedFilter}) {    
    const handleChange = ((event, newValue) => {
        console.log('New..........',newValue);
        setSelectedFilter(newValue);        
  });
  
      return (
        // <Box>
        // <Grow in={true}>
            <Tabs
            sx={{indicatorColor: 'red'}}
            value={selectedFilter}
            onChange={handleChange}
            // variant="fullWidth"
            textColor="white"
            indicatorColor="primary"            
            aria-label="basic tabs example"
          >
            {
                filters.map((genre, idx ) => (
                    <Tab sx={{color: 'white'}} 
                        label={genre.label} 
                        // {...a11yProps(idx)}
                        value={genre.key}
                        key={idx}/>
                ))
            }                    
          </Tabs>
        // </Grow>                    
        // </Box>
      );
    }