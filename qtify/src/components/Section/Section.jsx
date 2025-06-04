import { Box, Typography } from "@mui/material";
import styles from "./Section.module.css";
import Corousel from '../Corousel/Corousel';
import { useState, useEffect } from "react";
import CardGrid from '../CardGrid/CardGrid'
import TabPanel from '../TabPanel/TabPanel'

export default function Section({title, data, type, filterSource}) {
    
    const [corouselToggle, setCorouselToggle] = useState(true);
    const [filters, setFilters] = useState([{key: 'all', label: 'All'}]);
    const [selectedFilter, setSelectedFilter] = useState('all');

    useEffect(() => {
        if(filterSource) {
            filterSource().then((response) =>{
                const {data} = response;
                setFilters([...filters, ...data]);                                
        })
        }        
    },[]);
            
    const filteredData = selectedFilter === 'all' 
        ? data 
        : data.filter((ele) => ele.genre.key === selectedFilter);
    
    function handleToggle() {
        setCorouselToggle(!corouselToggle);
    }
  
    return (
        <div className={styles.section_container}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" sx={{mb : 2}}>
                <Typography 
                    sx={{
                        color: '#FFFFFF',
                        font: 'Poppins',
                        fontWeight: 600
                    }}
                >
                    {title}
                </Typography>
                {
                    type === 'album' && (
                        <Typography 
                            onClick={handleToggle}
                            sx={{
                                color: '#34C94B',
                                font: 'Poppins',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            {!corouselToggle ?  "Collapse All" : "Show All"}
                        </Typography>
                    )
                }                
            </Box>
            {
                type === 'song' && (
                    <TabPanel
                        filters={filters}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                    />
                )
            }

            {/* ------------------------------ */}
            {
                corouselToggle ? (
                    <Corousel data={type === "song" ? filteredData : data } type={type}/>
                    // <Corousel data={data} type={type}/>
                )
                :
                (
                    // <Box>
                        <CardGrid data={data} type={type}/>
                    // </Box>
                )
            }                      
        </div>        
    )
}