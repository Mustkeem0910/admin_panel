import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton ,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button, } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { fetchVendorData, deleteVenueById,fetchVenueDataId,fetchVenueData, fetchVenueSocialByType, fetchVenueServiceByType, fetchVenueFacilityByType, fetchVenueBookingByType, fetchVenueEventByType, fetchVenueLegalByType, fetchVenueVendorByType } from "../../../apis/api";

const VenueTable = () => {
  const [editedRow, setEditedRow] = useState(null);
  const [data, setData] = useState([]);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [venueToDelete, setVenueToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const venueData = await fetchVenueData();
        setData(venueData);
        console.log(venueData);
      } catch (error) {
        // Handle error, e.g., show an error message
      }
    }

    fetchData();

    const sortedVenues = [...data].sort((a, b) => {
      // Sort by the most recent timestamp (either created_at or updated_at)
      const timestampA = a.updated_at || a.created_at;
      const timestampB = b.updated_at || b.created_at;
      return new Date(timestampB) - new Date(timestampA);
  });
    setData(sortedVenues);  
  }, []);

const handleDeleteConfirmationOpen = (venueId) => {
    setVenueToDelete(venueId);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmationClose = () => {
    setVenueToDelete(null);
    setDeleteConfirmationOpen(false);
  };

  const handleDelete = async () => {
    if (venueToDelete) {
      console.log(venueToDelete);
      await deleteVenueById(venueToDelete);
      const updatedData = data.filter(
        (item) => item.venue_id !== venueToDelete
      );
      setData(updatedData);
      handleDeleteConfirmationClose();
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Venue Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email ID",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "ownership_type",
        header: "Ownership Type",
        size: 150,
      },
      {
        accessorKey: "phone_number",
        header: "Phone No",
        size: 150,
      },
    ],
    []
  );

  return (
    <>
    <MaterialReactTable
      columns={columns}
      data={data}
      editable={true}
      editedRow={editedRow}
      enableRowActions
      renderRowActions={({ row, table }) => (
        <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
          <IconButton
            color="secondary"
            onClick={async () => {
              const venueIdToUpdate = row["original"]["venue_id"];
              const venueData=await fetchVenueDataId(venueIdToUpdate);
              const venueSocial= await fetchVenueSocialByType(venueIdToUpdate);
              if(venueSocial[0]){
                const social=venueSocial[0];
                localStorage.setItem('venueSocial',JSON.stringify(social));
                console.log("venueSocial:",social);
              };
              
              const venueFacility= await fetchVenueFacilityByType(venueIdToUpdate);
              if(venueFacility[0]){
                const facility=venueFacility[0];
                localStorage.setItem('venueFacility',JSON.stringify(facility));
                console.log("venueFacility:",facility);
              };
              
              const venueService= await fetchVenueServiceByType(venueIdToUpdate);
              if(venueService[0]){
                const service=venueService[0];
                localStorage.setItem('venueService',JSON.stringify(service));
                console.log("venueService:",service);
              };
              
              const venueBooking= await fetchVenueBookingByType(venueIdToUpdate);
              if(venueBooking[0]){
                const booking=venueBooking[0];
                localStorage.setItem('venueBooking',JSON.stringify(booking));
                console.log("venueBooking:",venueBooking);
              }
              
              const venueEvent= await fetchVenueEventByType(venueIdToUpdate);
              if(venueEvent[0]){
                const event=venueEvent[0];
                localStorage.setItem('venueEvent',JSON.stringify(event));
                console.log("venueEvent:",venueEvent);
              }
              
              const venueLegal= await fetchVenueLegalByType(venueIdToUpdate);
              if(venueLegal[0]){
                const legal=venueLegal[0];
                localStorage.setItem('venueLegal',JSON.stringify(legal));
                console.log("venueLegal:",venueLegal);
              }
              
              const venuesVendor= await fetchVenueVendorByType(venueIdToUpdate);
              if(venuesVendor[0]){
                const venueVendor=venuesVendor[0];
                localStorage.setItem('venueVendor',JSON.stringify(venueVendor));
                console.log("venuesVendor",venuesVendor);
              }
              
              
              
              localStorage.setItem('venueData', JSON.stringify(venueData));
              console.log("venueData",venueData);
              navigate(`/edit-venue/${venueIdToUpdate}`);
            }}
          >
           <EditIcon />
          </IconButton>
          <IconButton
              color="error"
              onClick={() =>
                handleDeleteConfirmationOpen(row["original"]["venue_id"])
              }
            >
              <DeleteIcon />
            </IconButton>
        </Box>
      )}
      positionActionsColumn="last"

    />
     {/* Delete Confirmation Dialog */}
     <Dialog open={deleteConfirmationOpen} onClose={handleDeleteConfirmationClose}>
     <DialogTitle>Delete Venue</DialogTitle>
     <DialogContent>
       Are you sure you want to delete this venue?
     </DialogContent>
     <DialogActions>
       <Button onClick={handleDeleteConfirmationClose} color="primary">
         Cancel
       </Button>
       <Button onClick={handleDelete} color="primary">
         Delete
       </Button>
       </DialogActions>
      </Dialog>
       </>
  );
};

export default VenueTable;
