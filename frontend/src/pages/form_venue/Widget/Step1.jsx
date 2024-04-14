import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {
  fetchVenueTypes,
  createVenue,
  uploadVenueMedia,
  updateVenueData,
} from "../../../apis/api";

function Step1({
  handleNext,
  venueId,
  onVenueIdUpdate,
  formData1,
  setFormData1,
  updateFormData1,
  handleTypeChange,
  handleChange,
  handleFileChange,
  handleSave,
  setVenueId,
  setFormData2,
  setFormData3,
  setFormData4,
  setFormData5,
  setFormData6,
  setFormData7,
  setFormData8,
  file,
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const years = [];
  const currentYear = new Date().getFullYear();
  const [venueType, setVenueType] = useState("");
  const [venueTypes, setVenueTypes] = useState([]);
  const navigate = useNavigate();
  // const [venueCreated, setVenueCreated] = useState(false);

  useEffect(() => {
    // Fetch Cities
    fetchVenueTypes()
      .then((data) => setVenueTypes(data))
      .catch((error) => {
        console.error(error);
        // Handle error if needed
        console.log("formData1 in Step 1:", formData1);
      });
  }, [formData1]);

  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }

  const onSubmit = async (data) => {
    console.log("data:", data);
    updateFormData1(data);

    try {
      console.log("formDataID:", formData1);

      if (formData1.venue_id) {
        const response = await updateVenueData(formData1.venue_id, data);
        if (response.ok) {
          const venueData = await response.json();
          // setVenueCreated(true);
          const venue_id = venueData.venue_id;
          setVenueId(venue_id);

          setFormData2((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData3((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData4((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData5((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData6((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData7((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData8((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));

          console.log("Venue created successfully");

          if (file) {
            await uploadVenueMedia(formData1.venue_id, file);
            console.log("Media");
          } else {
            console.log("error uploading media");
          }

          // After updating the vendor, you can choose to redirect or perform other actions
          // Here, I'm showing a success message
          console.log("Venue updated successfully");
        }
      } else {
        const response = await createVenue(data);
        if (response.ok) {
          const venueData = await response.json();
          // setVenueCreated(true);
          const venue_id = venueData.venue_id;
          setVenueId(venue_id);
          // Upload image for the vendor
          await uploadVenueMedia(venueData.venue_id, file);
          setFormData2((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData3((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData4((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData5((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData6((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData7((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));
          setFormData8((prevData) => ({
            ...prevData,
            venue: venueData.venue_id, // Merge the current step's data into formData
          }));

          console.log("Venue created successfully");
        } else {
          console.error("Full Venue creation failed");
        }
      }
    } catch (error) {
      console.error("Error creating venue:", error);
    }
    handleNext();
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" , marginTop: "5px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue={formData1.name}
          rules={{ required: "Venue name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Venue Name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          defaultValue={formData1.email}
          rules={{
            required: " Venue Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label=" Venue Email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="address"
          control={control}
          defaultValue={formData1.address}
          rules={{ required: "Venue Address is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Venue Address"
              fullWidth
              error={!!errors.address}
              helperText={errors.address?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="phone_number"
          control={control}
          defaultValue={formData1.phone_number}
          rules={{
            required: "Venue Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a Valid Number ",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Venue Phone Number"
              fullWidth
              error={!!errors.phone_number}
              helperText={errors.phone_number?.message}
              style={{ marginBottom: "16px" }}
              type="tel"
            />
          )}
        />

<Controller
  name="venue_type"
  control={control}
  defaultValue={formData1.venue_type}
  rules={{ required: 'Venue Type is required' }} // Add this line
  render={({ field }) => (
    <FormControl fullWidth style={{ marginBottom: '16px' }}>
      <InputLabel id="venue-type-label">Venue Type</InputLabel>
      <Select
        {...field}
        labelId="venue-type-label"
        id="venue-type"
        value={formData1.venue_type}
        onChange={(e) => {
          field.onChange(e);
          handleTypeChange(e);
        }}
        label="Venue Type"
        name="venue_type"
        required // Add this line
      >
        {venueTypes.map((venueType) => (
          <MenuItem key={venueType.venue_type_id} value={venueType.venue_type_id}>
            {venueType.venue_type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )}
/>


        <Button
          containerElement="label"
          style={{
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px 16px",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", 
            lineHeight: 2.5,
            textTransform: "none",
          }}
        >
          <span style={{ color: "grey" , flex: 1}}>Select vendor Media</span>
          <input
            type="file"
            style={{
              width: "100%",
          opacity: 0, 
          position: "absolute",
            }}
            accept="image/*,video/*"
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          <span style={{ flex: 1, textAlign: "center" }}>Selected File: {formData1.media}</span>
        </Button>

        <Controller
  name="year_of_establishment"
  control={control}
  defaultValue={formData1.year_of_establishment}
  rules={{
    required: "Year of Establishment is required",
    pattern: {
      value: /^\d{4}$/,
      message: "Please enter a valid 4-digit year",
    },
  }}
  render={({ field }) => (
    <FormControl fullWidth style={{ marginBottom: "16px" }}>
      <TextField
        {...field}
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        label={!field.value ? "Year Of Establishment" : ""}
        helperText={
          errors.year_of_establishment &&
          errors.year_of_establishment.message
        }
        error={!!errors.year_of_establishment}
        maxLength="4"
      />
    </FormControl>
  )}
/>


<Controller
  name="ownership_type"
  control={control}
  defaultValue={formData1.ownership_type}
  rules={{ required: 'Ownership Type is required' }} // Add this line
  render={({ field }) => (
    <FormControl fullWidth style={{ marginBottom: "16px" }}>
      <InputLabel id="ownership-type-label">Ownership Type</InputLabel>
      <Select
        {...field}
        labelId="ownership-type-label"
        id="ownership-type-select"
        value={formData1.ownership_type}
        onChange={(e) => {
          field.onChange(e);
          handleChange(e);
        }}
        label="Ownership Type"
        name="ownership_type"
        required // Add this line
      >
        <MenuItem value="Private">Private</MenuItem>
        <MenuItem value="Government-Owned">Government-Owned</MenuItem>
        <MenuItem value="Non-Profit">Non-profit</MenuItem>
        <MenuItem value="Public">Public</MenuItem>
        {/* Corrected value */}
      </Select>
    </FormControl>
  )}
/>


        <Controller
          name="description"
          control={control}
          defaultValue={formData1.description}
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Description of Venue"
              fullWidth
              multiline
              rows={2}
              error={!!errors.clientTestimonialsAndReviews}
              helperText={errors.clientTestimonialsAndReviews?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: "8px" }}
        >
          Save & Next
        </Button>
      </form>
    </Paper>
  );
}

export default Step1;
