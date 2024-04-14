import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SideBar from './sidebar'; // Import your Sidebar component

const MyAppBar = ({ title }) => {
  return (
    <div>
      
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5">{title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MyAppBar;