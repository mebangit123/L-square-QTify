import { StyledEngineProvider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
} from './api/api'


function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums); 
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  },[]);
  //Function to make api call.......
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return {...prevState, [key]: data }
      })
    })
  }

  const { topAlbums = [], newAlbums = [], songs = []} = data;

  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
    </StyledEngineProvider>   
  );
}

export default App;
