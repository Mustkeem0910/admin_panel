import React from 'react';
import MyAppBar from '../../components/from_navbar';
import MyVendorForm from '../../pages/from_vendor/widgets/form_vendor_stepper'
import { useMediaQuery } from "@mui/material";

const FromVendor = () => {
  return (
    <div>
       <MyAppBar title="Add Vendor"/>
     < MyVendorForm/>
    </div>
  )
}

export default FromVendor;
