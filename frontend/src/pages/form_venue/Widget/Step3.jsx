import React, { useState, useEffect } from "react";
import {
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  RadioFormGroup,
  Checkbox,
  FormGroup,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function Step3({
  handleNext,
  handleBack,
  venueId,
  formData3,
  updateFormData3,
  handleFireSChange,
  handleFireOChange,
  handleFireFEChange,
  handleFireFChange,
  handleSecurityChange,
  handleSecuritySChange,
  handleSecurityOChange,
  handleSecurityAChange,
  handleSave,
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [showOtherTextField, setShowOtherTextField] = React.useState(false);
  const [isOtherChecked, setIsOtherChecked] = React.useState(false);
  const [isChecked, setIsChecked] = useState(
    formData3.fire_safety_measures.fireExtinguishers
  );
  const [isChecked1, setIsChecked1] = useState(
    formData3.fire_safety_measures.fireExitSigns
  );
  const [isChecked2, setIsChecked2] = useState(
    formData3.fire_safety_measures.sprinklerSystem
  );
  const [isChecked3, setIsChecked3] = useState(
    formData3.fire_safety_measures.other
  );
  const [isChecked4, setIsChecked4] = useState(
    formData3.security_features.CCTV
  );
  const [isChecked5, setIsChecked5] = useState(
    formData3.security_features.securityPersonnel
  );
  const [isChecked6, setIsChecked6] = useState(
    formData3.security_features.alarmSystem
  );
  const [isChecked7, setIsChecked7] = useState(
    formData3.security_features.other
  );
  const onSubmit = (data) => {
    console.log("data3:", data);
    if (data.fire_safety_measures.other) {
      if (data.security_features.other) {
        const submissionData = {
          ...data,
        };
        console.log("submissionData", submissionData);
        updateFormData3(submissionData);
      } else {
        const submissionData = {
          ...data,
          security_features: {
            ...data.security_features,
            otherText: "", // Set otherText to an empty string when other is false
          },
        };
        console.log("submissionData", submissionData);
        updateFormData3(submissionData);
      }
    } else {
      // If formData3.fire_safety_measures.other is false, you can exclude otherText
      if (data.security_features.other) {
        const submissionData = {
          ...data,
          fire_safety_measures: {
            ...data.fire_safety_measures,
            otherText: "", // Set otherText to an empty string when other is false
          },
        };
        console.log("submissionData", submissionData);
        updateFormData3(submissionData);
      } else {
        const submissionData = {
          ...data,
          security_features: {
            ...data.security_features,
            otherText: "", // Set otherText to an empty string when other is false
          },
          fire_safety_measures: {
            ...data.fire_safety_measures,
            otherText: "", // Set otherText to an empty string when other is false
          },
        };
        console.log("submissionData", submissionData);
        updateFormData3(submissionData);
      }
    }

    handleNext();
  };

  const technicalEquipmentOptions = [
    "Sound System",
    "Lighting",
    "Projectors",
    "Screens",
    "Microphones",
    "DJ Equipment",
    "Video Recording Equipment",
  ];

  const [parkingFacilitiesValue, setParkingFacilitiesValue] = useState("");
  const [showParkingCapacityField, setShowParkingCapacityField] =
    useState(false);

  const handleParkingFacilitiesChange = (event) => {
    setParkingFacilitiesValue(event.target.value);

    // Show the Parking Capacity field only when "Yes" is chosen
    setShowParkingCapacityField(event.target.value === "Yes");
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" , marginTop: "5px"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="total_area"
          control={control}
          defaultValue={formData3.total_area}
          rules={{
            pattern: {
              value: /^\d*\.?\d*$/,
              message: "Enter a valid number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Venue Total Area"
              fullWidth
              style={{ marginBottom: "16px" }}
              error={!!errors.total_area}
              helperText={errors.total_area?.message}
              type="number"
            />
          )}
        />

        <Controller
          name="indoor_area"
          control={control}
          defaultValue={formData3.indoor_area}
          rules={{
            pattern: {
              value: /^[0-9]*\.?[0-9]*$/, // Regular expression for decimal numbers
              message: "Enter a valid number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Indoor Area"
              fullWidth
              style={{ marginBottom: "16px" }}
              error={!!errors.indoor_area}
              helperText={errors.indoor_area?.message}
              type="number"
            />
          )}
        />

        <Controller
          name="outdoor_area"
          control={control}
          defaultValue={formData3.outdoor_area}
          rules={{
            pattern: {
              value: /^[0-9]*\.?[0-9]*$/, // Regular expression for decimal numbers
              message: "Enter a valid number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Outdoor Area"
              fullWidth
              style={{ marginBottom: "16px" }}
              error={!!errors.outdoor_area}
              helperText={errors.outdoor_area?.message}
              type="number"
            />
          )}
        />

        <Controller
          name="seating_capacity"
          control={control}
          defaultValue={formData3.seating_capacity}
          rules={{
            pattern: {
              value: /^[0-9]*\.?[0-9]*$/, // Regular expression for decimal numbers
              message: "Enter a valid number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Seating Capacity"
              fullWidth
              style={{ marginBottom: "16px" }}
              error={!!errors.seating_capacity}
              helperText={errors.seating_capacity?.message}
              type="number"
            />
          )}
        />

        <Controller
          name="standing_capacity"
          control={control}
          defaultValue={formData3.standing_capacity}
          rules={{
            pattern: {
              value: /^[0-9]*\.?[0-9]*$/, // Regular expression for decimal numbers
              message: "Enter a valid number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Standing Capacity"
              fullWidth
              style={{ marginBottom: "16px" }}
              error={!!errors.standing_capacity}
              helperText={errors.standing_capacity?.message}
              type="number"
            />
          )}
        />

        <Controller
          name="number_of_rooms_spaces"
          control={control}
          defaultValue={formData3.number_of_rooms_spaces}
          rules={{
            pattern: {
              value: /^[0-9]*\.?[0-9]*$/, // Regular expression for decimal numbers
              message: "Enter a valid number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Number of Rooms/Spaces"
              fullWidth
              style={{ marginBottom: "16px" }}
              error={!!errors.number_of_rooms_spaces}
              helperText={errors.number_of_rooms_spaces?.message}
              type="number"
            />
          )}
        />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Stage Availability</Typography>
            <Controller
              name="stage_availability"
              control={control}
              defaultValue={formData3.stage_availability}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Podium Availability</Typography>
            <Controller
              name="podium_availability"
              control={control}
              defaultValue={formData3.podium_availability}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
          <Typography variant="subtitle1">Parking Facilities</Typography>
          <Controller
            name="parking_facilities"
            control={control}
            defaultValue={formData3.parking_facilities}
            render={({ field }) => (
              <RadioGroup {...field}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </div>
              </RadioGroup>
            )}
          />
        </FormControl>

        <Controller
          name="parking_capacity"
          control={control}
          defaultValue={formData3.parking_capacity}
         
          render={({ field }) => (
            <TextField
              {...field}
              label="Parking Capacity"
              fullWidth
              error={!!errors.parking_capacity}
              helperText={errors.parking_capacity?.message}
              style={{ marginBottom: "16px" }}
              type="number" 
              inputProps={{ min: 0 }} // Optionally, you can set a minimum value of 0
            />
          )}
        />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">
              Valet Parking Availability
            </Typography>
            <Controller
              name="valet_parking_availability"
              control={control}
              defaultValue={formData3.valet_parking_availability}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>
        <Controller
          name="proximity_to_public_transport"
          control={control}
          defaultValue={formData3.proximity_to_public_transport}
          render={({ field }) => (
            <TextField
              {...field}
              label="Proximity to Public Transport"
              fullWidth
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="proximity_to_major_roads"
          control={control}
          defaultValue={formData3.proximity_to_major_roads}
          render={({ field }) => (
            <TextField
              {...field}
              label="Proximity to Major Roads"
              fullWidth
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="proximity_to_airport"
          control={control}
          defaultValue={formData3.proximity_to_airport}
          render={({ field }) => (
            <TextField
              {...field}
              label="Proximity to Airport"
              fullWidth
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="surrounding_environment"
          control={control}
          defaultValue={formData3.surrounding_environment}
          render={({ field }) => (
            <TextField
              {...field}
              label="Surrounding Environment"
              fullWidth
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="noise_restrictions"
          control={control}
          defaultValue={formData3.noise_restrictions}
          render={({ field }) => (
            <TextField
              {...field}
              label="Noise Restrictions"
              fullWidth
              style={{ marginBottom: "16px" }}
            />
          )}
        />

<Controller
  name="ceiling_height"
  control={control}
  defaultValue={formData3.ceiling_height}
  render={({ field }) => (
    <TextField
      {...field}
      label="Ceiling Height"
      fullWidth
      style={{ marginBottom: "16px" }}
      type="number" 
      
    />
  )}
/>


        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Load-in/Load-out Facilities */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">
              Load-in/Load-out Facilities
            </Typography>
            <Controller
              name="load_in_load_out_facilities"
              control={control}
              defaultValue={formData3.load_in_load_out_facilities}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>

          {/* Green Room Availability */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">Green Room Availability</Typography>
            <Controller
              name="green_room_availability"
              control={control}
              defaultValue={formData3.green_room_availability}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>

          {/* Dressing Room Availability */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">
              Dressing Room Availability
            </Typography>
            <Controller
              name="dressing_room_availability"
              control={control}
              defaultValue={formData3.dressing_room_availability}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>

          {/* Kitchen Facilities */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">Kitchen Facilities</Typography>
            <Controller
              name="kitchen_facilities"
              control={control}
              defaultValue={formData3.kitchen_facilities}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <Controller
          name="restroom_facilities"
          control={control}
          defaultValue={formData3.restroom_facilities}
          render={({ field }) => (
            <div style={{ marginBottom: "16px" }}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1">Restroom Facilities</Typography>
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          )}
        />

        <Controller
          name="power_supply_backup"
          control={control}
          defaultValue={formData3.power_supply_backup}
          render={({ field }) => (
            <div style={{ marginBottom: "16px" }}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1">Power Supply/Backup</Typography>
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          )}
        />
        <Controller
          name="air_conditioning_heating"
          control={control}
          defaultValue={formData3.air_conditioning_heating}
          render={({ field }) => (
            <div style={{ marginBottom: "16px" }}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1">
                  Air Conditioning/Heating
                </Typography>
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          )}
        />

        <Controller
          name="natural_light_availability"
          control={control}
          defaultValue={formData3.natural_light_availability}
          render={({ field }) => (
            <div style={{ marginBottom: "16px" }}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1">
                  Natural Light Availability
                </Typography>
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          )}
        />

        <Controller
          name="outdoor_space_description"
          control={control}
          defaultValue={formData3.outdoor_space_description}
          rules={{
            validate: (value) =>
              value.trim().split(/\s+/).length <= 100 ||
              "Description should not exceed 100 words",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Outdoor Space Description"
              fullWidth
              error={!!errors.outdoor_space_description}
              helperText={errors.outdoor_space_description?.message}
              style={{ marginBottom: "16px" }}
              multiline
            />
          )}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Scenic View */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">Scenic View</Typography>
            <Controller
              name="scenic_view"
              control={control}
              defaultValue={formData3.scenic_view}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>

          {/* Smoking Area */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">Smoking Area</Typography>
            <Controller
              name="smoking_area"
              control={control}
              defaultValue={formData3.smoking_area}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>

          {/* Pet-Friendly */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">Pet-Friendly</Typography>
            <Controller
              name="pet_friendly"
              control={control}
              defaultValue={formData3.pet_friendly}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>

          {/* Child-Friendly */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">Child-Friendly</Typography>
            <Controller
              name="child_friendly"
              control={control}
              defaultValue={formData3.child_friendly}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Yes</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">No</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <FormControl fullWidth style={{ marginBottom: "16px" }}>
          <InputLabel htmlFor="noiseLevel">Noise Level</InputLabel>
          <Controller
            name="noise_level"
            control={control}
            defaultValue={formData3.noise_level}
            render={({ field }) => (
              <Select
                {...field}
                label="Noise Level"
                inputProps={{
                  id: "noise_level",
                }}
              >
                <MenuItem value="Quiet">Quiet</MenuItem>
                <MenuItem value="Moderate">Moderate</MenuItem>
                <MenuItem value="Loud">Loud</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <Controller
          name="nearby_parking_facilities"
          control={control}
          defaultValue={formData3.nearby_parking_facilities}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nearby Parking Facilities"
              fullWidth
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Security Features */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">Security Features</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Controller
                    name="security_features.CCTV"
                    control={control}
                    defaultValue={formData3.security_features.CCTV}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked4}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked4(newValue);
                          handleSecurityChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="CCTV"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="security_features.securityPersonnel"
                    control={control}
                    defaultValue={formData3.security_features.securityPersonnel}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked5}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked5(newValue);
                          handleSecuritySChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Security Personnel"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="security_features.alarmSystem"
                    control={control}
                    defaultValue={formData3.security_features.alarmSystem}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked6}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked6(newValue);
                          handleSecurityAChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Alarm System"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="security_features.other"
                    control={control}
                    defaultValue={formData3.security_features.other}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked7}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked7(newValue);
                          handleSecurityOChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Other"
              />
              {isChecked7 && (
                <Controller
                  name="security_features.otherText"
                  control={control}
                  defaultValue={
                    formData3.security_features.other
                      ? formData3.security_features.otherText
                      : ""
                  }
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Other Security Feature"
                      fullWidth
                      variant="standard"
                      margin="normal"
                      // You can add a name and connect this field to your form as needed
                    />
                  )}
                />
              )}
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <Typography variant="subtitle1">Fire Safety Measures</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Controller
                    name="fire_safety_measures.fireExtinguishers"
                    control={control}
                    defaultValue={
                      formData3.fire_safety_measures.fireExtinguishers
                    }
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked(newValue);
                          console.log(isChecked);
                          handleFireFEChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Fire Extinguishers"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="fire_safety_measures.fireExitSigns"
                    control={control}
                    defaultValue={formData3.fire_safety_measures.fireExitSigns}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked1}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked1(newValue);
                          handleFireFChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Fire Exit Signs"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="fire_safety_measures.sprinklerSystem"
                    control={control}
                    defaultValue={
                      formData3.fire_safety_measures.sprinklerSystem
                    }
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked2}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked2(newValue);
                          handleFireSChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Sprinkler System"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="fire_safety_measures.other"
                    control={control}
                    defaultValue={formData3.fire_safety_measures.other}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked3}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked3(newValue);
                          handleFireOChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Other"
              />
              {isChecked3 && (
                <Controller
                  name="fire_safety_measures.otherText"
                  control={control}
                  defaultValue={
                    formData3.fire_safety_measures.other
                      ? formData3.fire_safety_measures.otherText
                      : ""
                  }
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Other Fire Safety Measure"
                      fullWidth
                      variant="standard"
                      margin="normal"
                      // You can add a name and connect this field to your form as needed
                    />
                  )}
                />
              )}
            </FormGroup>
          </FormControl>
        </div>

        <div style={{ display: "flex", marginTop: "16px" }}>
          <Button onClick={handleBack} style={{ marginLeft: "8px" }}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "8px" }}
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginLeft: "8px" }}
          >
            Next
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default Step3;
