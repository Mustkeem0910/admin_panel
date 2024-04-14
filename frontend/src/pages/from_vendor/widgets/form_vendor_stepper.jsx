import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Autocomplete,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {
  fetchCities,
  fetchVendorTypes,
  createVendor,
  uploadMedia,
  updateVendorData,
  fetchVenueData,
} from "../../../apis/api";

// Make sure to provide the correct path to the ImageUploader component

const steps = ["Vendor Details", "Addtional Details", "Confirm"];

// Custom component for image upload control
// Custom component for image upload control
function ImageUpload({ onChange, value }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        border: "1px solid #ccc", // Add an outline border
        borderRadius: "4px", // Add rounded corners
        padding: "8px", // Add padding
      }}
    >
      <InputLabel style={{ marginRight: "16px" }}>
        Select Vendor Images
      </InputLabel>
      <input
        type="file"
        accept="image/*" // Allow only image files
        onChange={onChange}
        style={{ display: "none", marginRight: "16px" }}
        id="image-upload-input"
      />
      <label htmlFor="image-upload-input">
        <Button variant="outlined" component="span">
          Upload
        </Button>
      </label>
      <div style={{ marginLeft: "16px" }}>{value}</div>
    </div>
  );
}

function LoginForm({
  handleNext,
  cities,
  vendorTypes,
  formData,
  handleCityChange,
  handleTypeChange,
  updateFormData,
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [vendorType, setVendorType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const {
    name,
    contact_email,
    vendor_type,
    products_or_services,
    city,
    address,
    phone_number,
  } = formData;

  const onSubmit = (data) => {
    updateFormData(data);
    console.log(data);
    handleNext();
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue={name}
          rules={{ required: "Vendor name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Vendor Name"
              fullWidth
              error={!!errors.name} // Use 'errors.name' instead of 'errors.username'
              helperText={errors.name?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />
        <Controller
          name="contact_email"
          control={control}
          defaultValue={contact_email}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              error={!!errors.contact_email}
              helperText={errors.contact_email?.message}
            />
          )}
        />

        <Controller
          name="vendor_type"
          control={control}
          defaultValue={formData.vendor_type}
          rules={{ required: "Vendor Type is required" }} // Add the required rule and error message
          render={({ field }) => (
            <FormControl
              fullWidth
              style={{ marginTop: "16px", marginBottom: "16px" }}
              error={Boolean(errors.vendor_type)} 
            >
              <InputLabel>Vendor Type</InputLabel>
              <Select
                {...field}
                id="vendor-type"
                value={formData.vendor_type}
                onChange={(e) => {
                  field.onChange(e);
                  handleTypeChange(e);
                }}
                label="Vendor Type"
                name="vendor_type"
                error={!!errors.vendor_type} // Add error prop to the Select component
              >
                {vendorTypes.map((vendorType) => (
                  <MenuItem
                    key={vendorType.vendor_type_id}
                    value={vendorType.vendor_type_id}
                  >
                    {vendorType.type_name}
                  </MenuItem>
                ))}
              </Select>
              {errors.vendor_type && (
                <FormHelperText error>
                  {errors.vendor_type.message}
                </FormHelperText>
              )}
            </FormControl>
          )}
        />

        <Controller
          name="products_or_services"
          control={control}
          defaultValue={products_or_services}
          rules={{ required: "Products or Services is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Product Services"
              fullWidth
              error={!!errors.products_or_services}
              helperText={errors.products_or_services?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

<FormControl
  fullWidth
  style={{ marginBottom: "16px" }}
  error={Boolean(errors.city)} // Add this line
>
  {selectedCity ? null : <InputLabel>City</InputLabel>}
  <Controller
    name="city"
    control={control}
    defaultValue={formData.city}
    rules={{ required: 'City is required' }}
    render={({ field }) => (
      <>
        <Select
          {...field}
          value={formData.city}
          onChange={(e) => {
            field.onChange(e);
            handleCityChange(e);
          }}
          label="City"
          error={Boolean(errors.city)} // Add this line
        >
          {cities.map((city) => (
            <MenuItem key={city.city_id} value={city.city_id}>
              {city.city_name}
            </MenuItem>
          ))}
        </Select>
        {errors.city && (
          <FormHelperText error>{errors.city.message}</FormHelperText>
        )}
      </>
    )}
  />
</FormControl>



        <Controller
          name="address"
          control={control}
          defaultValue={address}
          rules={{ required: "Address Services is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Address"
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
          defaultValue={phone_number}
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message:
                "Phone number should be of 10 digits",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              fullWidth
              error={!!errors.phone_number}
              helperText={errors.phone_number?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </form>
    </Paper>
  );
}

function AdditionalDetails({
  handleNext,
  handleBack,
  formData,
  setFormData,
  updateFormData,
  handleAvailChange,
  selectedFile,
  setSelectedFile,
  venues,
  setVenues,
  setSelectedFileName,
  selectedFileName
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const {
    website,
    insurance_coverage,
    licenses_and_permits,
    availability,
    description,
    facebook_url,
    twitter_url,
    instagram_url,
    linkedin_url,
    youtube_url,
    preferred_venues,
  } = formData;

  const onSubmit = (data) => {
    console.log(data);
    updateFormData(data);
    console.log("formData:", formData);
    handleNext();
  };
  const venue_option = ["Other"];
  const [activeStep, setActiveStep] = useState(0);
  const [formData1, setFormData1] = useState({ media: null });
  const [isAvailabilityValid, setIsAvailabilityValid] = useState(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="website"
          control={control}
          defaultValue={website}
          render={({ field }) => (
            <TextField
              {...field}
              label="Website"
              fullWidth
              error={!!errors.website}
              helperText={errors.website?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />
        <Controller
          name="insurance_coverage"
          control={control}
          defaultValue={insurance_coverage}
          rules={{ required: "Insurance  is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Insurance Coverage"
              fullWidth
              error={!!errors.insurance_coverage}
              helperText={errors.insurance_coverage?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />
        <Controller
          name="licenses_and_permits"
          control={control}
          defaultValue={licenses_and_permits}
          rules={{ required: "Licenses is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Licenses and Permits"
              fullWidth
              error={!!errors.licenses_and_permits}
              helperText={errors.licenses_and_permits?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

<Controller
  name="availability"
  control={control}
  defaultValue={availability}
 
  render={({ field }) => (
    <FormControl fullWidth style={{ marginBottom: "16px" }}>
      <InputLabel>Availability</InputLabel>
      <Select
        {...field}
        labelId="availability-label"
        id="availability-select"
        value={field.value}
        onChange={(e) => {
          field.onChange(e);
          handleAvailChange(e);
          setIsAvailabilityValid(true);
        }}
        onBlur={() => {
          setIsAvailabilityValid(!!field.value); // Set the error state based on validation
        }}
        label="Availability"
        name="availability"
        error={!isAvailabilityValid}
      >
        <MenuItem value={true}>Yes</MenuItem>
        <MenuItem value={false}>No</MenuItem>
      </Select>
      {!isAvailabilityValid && (
        <FormHelperText error>
          {errors.availability ? errors.availability.message : "Availability is required"}
        </FormHelperText>
      )}
    </FormControl>
  )}
/>



<Controller
  name="preferred_venues"
  control={control}
  defaultValue={preferred_venues}
  rules={{ required: "Preferred Venues is required" }} // Add required rule and error message
  render={({ field }) => {
    const allVenues = [...venues, ...venue_option];

    return (
      <Autocomplete
        {...field}
        multiple
        id="preferred-venues"
        options={allVenues}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Preferred Venues"
            fullWidth
            error={!!errors.preferred_venues}
            helperText={errors.preferred_venues?.message}
          />
        )}
        clearText="Clear"
        onChange={(_, newValue) => {
          field.onChange(newValue);
        }}
      />
    );
  }}
/>


<Button
      containerElement="label"
      style={{
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "8px 16px",
        margin: "16px 0", // Updated margin for top and bottom
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center text horizontally
        lineHeight: 2.5,
        textTransform: "none",
      }}
    >
      <span style={{ color: "grey", flex: 1, textAlign: "center" }}>
        Select vendor Media
      </span>

     
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

      <span style={{ flex: 1, textAlign: "center" }}>
        Selected File: {selectedFileName}
      </span>
    </Button>

        <Controller
          name="facebook_url"
          control={control}
          defaultValue={facebook_url}
          render={({ field }) => (
            <TextField
              {...field}
              label="Facebook_handle"
              fullWidth
              error={!!errors.facebook_url}
              helperText={errors.facebook_url?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="instagram_url"
          control={control}
          defaultValue={instagram_url}
          render={({ field }) => (
            <TextField
              {...field}
              label="Instagram_handle"
              fullWidth
              error={!!errors.instagram_url}
              helperText={errors.instagram_url_url?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="twitter_url"
          control={control}
          defaultValue={twitter_url}
          render={({ field }) => (
            <TextField
              {...field}
              label="Twitter_handle"
              fullWidth
              error={!!errors.twitter_url}
              helperText={errors.twitter_url?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="linkedin_url"
          control={control}
          defaultValue={linkedin_url}
          render={({ field }) => (
            <TextField
              {...field}
              label="Linkedin_handle"
              fullWidth
              error={!!errors.linkedin_url}
              helperText={errors.linkedin_url?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="youtube_url"
          control={control}
          defaultValue={youtube_url}
          render={({ field }) => (
            <TextField
              {...field}
              label="Youtube_handle"
              fullWidth
              error={!!errors.youtube_url}
              helperText={errors.youtube_url?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          defaultValue={description}
          rules={{
            validate: (value) => {
              const wordCount = value.split(/\s+/).length;
              return (
                wordCount <= 100 ||
                "Description must be less than or equal to 100 words."
              );
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              fullWidth
              multiline
              rows={4}
              error={!!errors.description}
              helperText={errors.description?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <div>
          <Button disabled={activeStep === 1} onClick={() => handleBack()}>
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </div>
      </form>
    </Paper>
  );
}

function MyVendorForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [cities, setCities] = useState([]);
  const [selectedCityName, setSelectedCityName] = useState('');
  const [vendorTypes, setVendorTypes] = useState([]);
  const [selectedvendorTypeName, setVendorTypeName] = useState('');
  const [venues, setVenues] = useState([]);
  const [vendorCreated, setVendorCreated] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const storedData = localStorage.getItem("vendorData");
  const vendorDataList = JSON.parse(storedData);
  const [isChecked, setIsChecked] = useState(false);
  const initialFormData = vendorDataList || {
    name: "",
    contact_email: "",
    vendor_type: null,
    products_or_services: "",
    address: "",
    city: null,
    website: "",
    phone_number: "",
    description: "",
    availability: null,
    insurance_coverage: "",
    licenses_and_permits: "",
    preferred_venues: [],
    facebook_url: "",
    instagram_url: "",
    twitter_url: "",
    linkedin_url: "",
    youtube_url: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  // Other form state and functions...

  useEffect(() => {
    // Fetch Cities
    fetchCities()
      .then((data) => setCities(data))
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });

    // Fetch Vendor Types
    fetchVendorTypes()
      .then((data) => setVendorTypes(data))
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });

    fetchVenueData()
      .then((data) => {
        const venuesName = data.map((venue) => venue.name);
        setVenues(venuesName);
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });

    if (vendorDataList) {
      console.log("vendorDataList", vendorDataList.preferred_venues);
      if (typeof vendorDataList.preferred_venues === "string") {
        vendorDataList.preferred_venues = vendorDataList.preferred_venues
          .split(",")
          .map((venue) => venue.trim());
      }
      setFormData(vendorDataList);
      console.log(formData);
      localStorage.removeItem("vendorData"); // Remove the data from local storage
    }
  }, [vendorDataList, formData, venues]);

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // If it's the last step, send the formData to your API
      try {
        const vendor_data = {
          name: formData.name,
          contact_email: formData.contact_email,
          vendor_type: formData.vendor_type,
          products_or_services: formData.products_or_services,
          address: formData.address,
          city: formData.city,
          website: formData.website,
          phone_number: formData.phone_number,
          description: formData.description,
          availability: formData.availability,
          insurance_coverage: formData.insurance_coverage,
          licenses_and_permits: formData.licenses_and_permits,
          preferred_venues: formData.preferred_venues.join(", "),
          facebook_url: formData.facebook_url,
          instagram_url: formData.instagram_url,
          twitter_url: formData.twitter_url,
          linkedin_url: formData.linkedin_url,
          youtube_url: formData.youtube_url,
        };

        console.log(vendor_data);
        if (formData.vendor_id) {
          const response = await updateVendorData(
            formData.vendor_id,
            vendor_data
          );
          if (response.ok) {
            // Vendor updated successfully
            setVendorCreated(true);
            if (selectedFile) {
              await uploadMedia(formData.vendor_id, selectedFile);
              console.log("image uploaded");
            } else {
              console.log("error uploading image");
            }

            // After updating the vendor, you can choose to redirect or perform other actions
            // Here, I'm showing a success message
            console.log("Vendor updated successfully");
             navigate("/vendors");
             alert("Vendor Updated successfully!");
          }
        } else {
          const response = await createVendor(vendor_data);

          if (response.ok) {
            const vendorData = await response.json();
            setVendorCreated(true);
            // Upload image for the vendor
            await uploadMedia(vendorData.vendor_id, selectedFile);

            console.log("Vendor created successfully");
            navigate("/vendors");
            alert("Vendor Added successfully!");
          } else {
            console.error("Vendor creation failed");
          }
        }
      } catch (error) {
        console.error("Error creating vendor:", error);
      }
    } else {
      // If it's not the last step, just increment the step
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleFinish = () => {
    alert("Vendor Added successfully!");
    navigate("/vendors");
  };

  const updateFormData = (stepData) => {
    // Update the formData with the current step's data
    setFormData((prevData) => ({
      ...prevData,
      ...stepData, // Merge the current step's data into formData
    }));
  };

  const handleCityChange = (e) => {
    const selectedCityId = e.target.value;
    const selectedCity = cities.find(city => city.city_id === selectedCityId);
    setFormData((prevData) => ({
      ...prevData,
      city: selectedCityId, // Update the city property in formData
    }));
    setSelectedCityName(selectedCity.city_name);
  };

  const handleTypeChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = vendorTypes.find(vendorType => vendorType.vendor_type_id === selectedTypeId);
    setFormData((prevData) => ({
      ...prevData,
      vendor_type: selectedTypeId, // Update the city property in formData
    }));
    setVendorTypeName(selectedType.type_name);
  };

  const handleAvailChange = (e) => {
    const selectedAvail = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      availability: selectedAvail, // Update the city property in formData
    }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Your fieldLabels2 object with field labels
  const fieldLabels2 = {
    name: "Name",
    contact_email: "Contact Email",
    vendor_type: "Vendor Type",
    products_or_services: "Products or Services",
    address: "Address",
    city: "City",
    website: "Website",
    phone_number: "Phone Number",
    description: "Description",
    insurance_coverage: "Insurance Coverage",
    licenses_and_permits: "Licenses and Permits",
    preferred_venues: "Preferred Venues",
    facebook_url: "Facebook URL",
    instagram_url: "Instagram URL",
    twitter_url: "Twitter URL",
    linkedin_url: "LinkedIn URL",
    youtube_url: "YouTube URL",
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography style={{ padding: "16px" }}>
              All Vendor SucessFully
            </Typography>
          </div>
        ) : (
          <div>
            {activeStep === 0 && (
              <LoginForm
                handleNext={handleNext}
                cities={cities} // Pass cities to your form components
                vendorTypes={vendorTypes} // Pass vendorTypes to your form components
                formData={formData}
                setFormData={setFormData}
                updateFormData={updateFormData}
                handleCityChange={handleCityChange}
                handleTypeChange={handleTypeChange}
              />
            )}
            {activeStep === 1 && (
              <AdditionalDetails
                handleNext={handleNext}
                handleBack={handleBack}
                formData={formData}
                setFormData={setFormData}
                venues={venues}
                setVenues={setVenues}
                updateFormData={updateFormData}
                handleAvailChange={handleAvailChange}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                setSelectedFileName={setSelectedFileName}
                selectedFileName={selectedFileName}
              />
            )}
            {activeStep !== 0 && activeStep !== 1 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "20px",
                }}
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: "16px",
                    marginTop: "20px",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Summary
                  </Typography>

                  <List>
  {Object.keys(formData).map((field) => {
    if (fieldLabels2[field]) {
      let secondaryText = "";
      
      if (field === 'preferred_venues' && Array.isArray(formData[field])) {
        secondaryText = formData[field].join(', ');
      } else if (field === 'city' && selectedCityName) {
        secondaryText = selectedCityName;
      }
      else if (field === 'vendor_type' && selectedvendorTypeName) {
        secondaryText = selectedvendorTypeName;
      }
      else{
        secondaryText = formData[field];
      }
      return (
        <ListItem key={field}>
          <ListItemText
            primary={fieldLabels2[field]}
            secondary={secondaryText}
          />
        </ListItem>
      );
    }
    return null; // Skip rendering if there's no corresponding label
  })}
</List>

                  <ListItem>
                    <ListItemText
                      primary=" Availability"
                      secondary={formData.availability ? "Yes" : "No"}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary=" Media"
                      secondary={selectedFileName}
                    />
                  </ListItem>
                </Paper>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="I confirm all the details"
                  style={{ marginBottom: "16px", marginTop: "16px" }}
                />
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ marginRight: "16px" }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!isChecked}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyVendorForm;
