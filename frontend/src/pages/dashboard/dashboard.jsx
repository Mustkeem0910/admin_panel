import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBar from "../../components/sidebar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import StoreIcon from "@mui/icons-material/Store";
import PlaceIcon from "@mui/icons-material/Place";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RecentVenue from "./Widget/recent_venue_table";
import { fetchCities, fetchVendorData, fetchVenueData } from "../../apis/api";
import RecentVendor from "./Widget/recent_vendor_table";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles'; 


const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem', 
  fontWeight: 'bold', 
  color: theme.palette.primary.main, 
 
  marginBottom: theme.spacing(2), 
}));
export default function Dashboard() {
  const [cityNumber, setCityNumber] = useState(null);
  const [venueNumber, setVenueNumber] = useState(null);
  const [vendorNumber, setVendorNumber] = useState(null);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    async function fetchVendorNumber() {
      try {
        const vendorData = await fetchVendorData();
        const numberOfRecords = vendorData.length;
        setVendorNumber(numberOfRecords);
        console.log("number of vendors:", numberOfRecords);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    }

    async function fetchVenueNumber() {
      try {
        const venueData = await fetchVenueData();
        const numberOfRecords = venueData.length;
        setVenueNumber(numberOfRecords);
        console.log(numberOfRecords);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    }

    async function fetchCityNumber() {
      try {
        const citiesData = await fetchCities();
        const numberOfRecords = citiesData.length;
        setCityNumber(numberOfRecords);
        console.log(numberOfRecords);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    }

    fetchVendorNumber();
    fetchVenueNumber();
    fetchCityNumber();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: isSmallScreen ? 0 : 3, marginTop:  "55px" ,width: isSmallScreen ? '50%' : '100%' }}>
        <StyledTitle>
        Welcome to Dashboard
        </StyledTitle>
            
          
          <Grid container spacing={2} sx={{ marginTop: isSmallScreen ? "5px":"25px" }}>
            <Grid item xs={12} sm={6} md={3}>
              <Link to="/vendors" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid #ccc",
                    "@media (max-width: 600px)": {
                      width: "100%",
                    },
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Typography
                            variant={isSmallScreen ? "h3" : "h2"}
                            color="textSecondary"
                            style={{ fontWeight: "bold" }}
                          >
                            {vendorNumber}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant={isSmallScreen ? "h6" : "h5"}
                            component="div"
                          >
                            Vendors
                          </Typography>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <StoreIcon
                          color="primary"
                          fontSize="large"
                          style={{ fontSize: "72px" }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link to="/venues" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid #ccc",
                    "@media (max-width: 600px)": {
                      width: "100%",
                    },
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Typography
                            variant={isSmallScreen ? "h3" : "h2"}
                            color="textSecondary"
                            style={{ fontWeight: "bold" }}
                          >
                            {venueNumber}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant={isSmallScreen ? "h6" : "h5"}
                            component="div"
                          >
                            Venues
                          </Typography>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <PlaceIcon
                          color="primary"
                          fontSize="large"
                          style={{ fontSize: "72px" }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid #ccc",
                  "@media (max-width: 600px)": {
                    width: "100%",
                  },
                }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                           variant={isSmallScreen ? "h3" : "h2"}
                          color="textSecondary"
                          style={{ fontWeight: "bold" }}
                        >
                          {cityNumber}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant={isSmallScreen ? "h6" : "h5"}
                          component="div"
                        >
                          City listed
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LocationCityIcon
                        color="primary"
                        fontSize="large"
                        style={{ fontSize: "72px" }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid #ccc",
                  "@media (max-width: 600px)": {
                    width: "100%",
                  },
                }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                           variant={isSmallScreen ? "h3" : "h2"}
                          color="textSecondary"
                          style={{ fontWeight: "bold" }}
                        >
                          0
                        </Typography>
                        <Typography
                          gutterBottom
                          variant={isSmallScreen ? "h6" : "h5"}
                          component="div"
                        >
                          User
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AccountCircleIcon
                        color="primary"
                        fontSize="large"
                        style={{ fontSize: "72px" }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box height={20} />
       
            {/* <Grid item xs={12} sm={12}>
              <Card sx={{ height: '100%', border: '1px solid #ccc' }}>
                <CardContent>
                  <Typography variant='h5' sx={{ marginTop: '10px', marginBottom: '10px' }}>
                    Recently Added Venues
                  </Typography>
                  <RecentVenue/>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Card sx={{ height: '100%', border: '1px solid #ccc' }}>
                <CardContent>
                  <Typography variant='h5' sx={{ marginTop: '10px', marginBottom: '10px' }}>
                    Recently Added Vendors
                  </Typography>
                  <RecentVendor/>
                </CardContent>
              </Card>
            </Grid> */}
            <Paper component="main" sx={{ padding: "8px" }}>
              <Typography variant="h6" gutterBottom>
                Recently Added Venues
              </Typography>
              <RecentVenue />
            </Paper>
            <Paper component="main" sx={{ padding: "8px", marginTop: "25px" }}>
              <Typography variant="h6" gutterBottom>
                Recently Added Vendors
              </Typography>
              <RecentVendor />
            </Paper>
         
        </Box>
      </Box>
    </>
  );
}
