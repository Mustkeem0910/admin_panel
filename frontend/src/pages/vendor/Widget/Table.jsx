import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton , Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { fetchVendorData, deleteVendorById,fetchVendorDataId } from "../../../apis/api";



const VendorTable = () => {
  const [editedRow, setEditedRow] = useState(null);
  const [data, setData] = useState([]);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false); // State for delete confirmation dialog
  const [rowToDelete, setRowToDelete] = useState(null); // State to store the row being deleted
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const vendorData = await fetchVendorData();
        setData(vendorData);
        console.log(vendorData);
      } catch (error) {
        // Handle error, e.g., show an error message
      }
    }

    fetchData();
  }, []);


  const handleDeleteConfirmation = async () => {
    if (rowToDelete) {
      const vendorIdToDelete = rowToDelete["original"]["vendor_id"];
      await deleteVendorById(vendorIdToDelete);
      const updatedData = [...data];
      updatedData.splice(rowToDelete.index, 1);
      setData(updatedData);
      setDeleteConfirmationOpen(false); // Close the delete confirmation dialog
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Vendor Name",
        size: 150,
      },
      {
        accessorKey: "contact_email",
        header: "Email ID",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "website",
        header: "Product",
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
                const vendorIdToUpdate = row["original"]["vendor_id"];
                const vendorData = await fetchVendorDataId(vendorIdToUpdate);
                localStorage.setItem('vendorData', JSON.stringify(vendorData));
                console.log(vendorData);
                navigate(`/edit-vendor/${vendorIdToUpdate}`);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                // Set the row to be deleted and open the delete confirmation dialog
                setRowToDelete(row);
                setDeleteConfirmationOpen(true);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
        positionActionsColumn="last"
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmationOpen} onClose={() => setDeleteConfirmationOpen(false)}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
        Are you sure you want to delete this vendor?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteConfirmationOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirmation} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VendorTable;