import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles'; // Add this import
import SideBar from '../../components/sidebar';
import { Link } from 'react-router-dom';
import VendorTable from './Widget/Table';
import { useMediaQuery } from "@mui/material";


const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem', 
  fontWeight: 'bold', 
  color: theme.palette.primary.main, 
 
  marginBottom: theme.spacing(2), 
}));

export default function Vendor() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: isSmallScreen ? 0 : 3, marginTop: "55px"  ,width: isSmallScreen ? '50%' : '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <StyledTitle>
            Vendors
          </StyledTitle>
          <Link to="/vendor/add"> 
            <Button variant="contained" color="primary">
              <AddIcon /> Add Vendor
            </Button>
          </Link>
        </Box>
        <Box >
     <VendorTable/>
    </Box>
       
      </Box>
    </Box>
  );
}