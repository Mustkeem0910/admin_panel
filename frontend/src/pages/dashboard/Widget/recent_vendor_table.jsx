import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { fetchVendorData } from '../../../apis/api';
import Grid from '@mui/material/Grid';



const  RecentVendor = () => {
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
              const vendorData = await fetchVendorData();
              setData(vendorData.slice(0,5));
              console.log(vendorData);
            } catch (error) {
              console.log("Error fetching vendor data: ",error);
            }
          }
      
          fetchData();
      }, []);
  
    const columns = useMemo(
      () => [
        {
          accessorKey: 'name',
          header: 'Vendor Name',
          size: 150,
        },
        {
          accessorKey: 'contact_email',
          header: 'Email ID',
          size: 150,
        },
        {
          accessorKey: 'address',
          header: 'Address',
          size: 200,
        },
        {
          accessorKey: 'website',
          header: 'Product',
          size: 150,
        },
        {
            accessorKey: 'phone_number',
            header: 'Phone No',
            size: 150,
          },
       
       
      ],
      []
    );
  
   
  
    const handleCloseDeleteDialog = () => {
      setSelectedRow(null);
      setOpenDeleteDialog(false);
    };
  
    const handleConfirmDelete = () => {
      // Handle delete action here (e.g., delete the selectedRow)
      setOpenDeleteDialog(false);
    };
  
    return (
      <>
        <MaterialReactTable columns={columns} data={data} />
        <Dialog
          open={openDeleteDialog}
          onClose={handleCloseDeleteDialog}
          maxWidth="xs" 
          fullWidth 
        >
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default RecentVendor;