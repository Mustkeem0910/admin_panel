import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  FormGroup,
  Checkbox,
  Typography,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function Step4({ handleNext, handleBack, formData4,handleICuisineChange, handleCuisineChange, handleItCuisineChange, handleCCuisineChange, handleVCuisineChange, handleGCuisineChange, handleHCuisineChange, handleKCuisineChange, handleOCuisineChange, updateFormData4, handleRoomChange, handleRoomDChange, handleRoomSChange, handleRoomAChange, handleRoomOChange, handleSave }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [isOtherRoomChecked, setIsOtherRoomChecked] = React.useState(false);
  const [isChecked, setIsChecked] = useState(formData4.types_of_cuisine.Indian);
  const [isChecked1, setIsChecked1] = useState(formData4.types_of_cuisine.Chinese);
  const [isChecked2, setIsChecked2] = useState(formData4.types_of_cuisine.Italian);
  const [isChecked3, setIsChecked3] = useState(formData4.types_of_cuisine.Continental);
  const [isChecked4, setIsChecked4] = useState(formData4.types_of_cuisine.Vegan);
  const [isChecked5, setIsChecked5] = useState(formData4.types_of_cuisine.GlutenFree);
  const [isChecked6, setIsChecked6] = useState(formData4.types_of_cuisine.Halal);
  const [isChecked7, setIsChecked7] = useState(formData4.types_of_cuisine.Kosher);
  const [isChecked8, setIsChecked8] = useState(formData4.types_of_cuisine.Other);
  const [isChecked9, setIsChecked9] = useState(formData4.types_of_rooms.Single);
  const [isChecked10, setIsChecked10] = useState(formData4.types_of_rooms.Double);
  const [isChecked11, setIsChecked11] = useState(formData4.types_of_rooms.Suite);
  const [isChecked12, setIsChecked12] = useState(formData4.types_of_rooms.Accessible);
  const [isChecked13, setIsChecked13] = useState(formData4.types_of_rooms.Other);

  const onSubmit = (data) => {
    console.log("data4:",data);
    if(data.types_of_cuisine.Other){
      if(data.types_of_rooms.Other){
        const submissionData = {
          ...data,
        };
        console.log("submissionData",submissionData);
        updateFormData4(submissionData);
      }
      else{
        const submissionData = {
          ...data,
          types_of_rooms: {
            ...data.types_of_rooms,
            OtherText: "", // Set otherText to an empty string when other is false
          },
        };
        console.log("submissionData",submissionData);
        updateFormData4(submissionData);
      }
    }
    else{
      if(data.types_of_rooms.Other){
        const submissionData = {
          ...data,
          types_of_rooms: {
            ...data.types_of_rooms,
            OtherText: "", // Set otherText to an empty string when other is false
          },
        };
        console.log("submissionData",submissionData);
        updateFormData4(submissionData);
      }
      else{
        const submissionData = {
          ...data,
          types_of_rooms: {
            ...data.types_of_rooms,
            OtherText: "", // Set otherText to an empty string when other is false
          },
          types_of_cuisine: {
            ...data.types_of_cuisine,
            OtherText: "", // Set otherText to an empty string when other is false
          },
        };
        console.log("submissionData",submissionData);
        updateFormData4(submissionData);
      }
  }
    handleNext();
  };

  return (
    <div style={{marginTop: "5px"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Catering Services</Typography>
            <Controller
              name="catering_services"
              control={control}
              defaultValue={formData4.catering_services}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Types of Cuisine</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_cuisine.Indian"
                    control={control}
                    defaultValue={formData4.types_of_cuisine.Indian}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked(newValue);
                          handleICuisineChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Indian"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_cuisine.Chinese"
                    control={control}
                    defaultValue={formData4.types_of_cuisine.Chinese}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked1}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked1(newValue);
                          handleCuisineChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Chinese"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_cuisine.Italian"
                    control={control}
                    defaultValue={formData4.types_of_cuisine.Italian}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked2}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked2(newValue);
                          handleItCuisineChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Italian"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_cuisine.Continental"
                    control={control}
                    defaultValue={formData4.types_of_cuisine.Continental}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked3}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked3(newValue);
                          handleCCuisineChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Continental"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_cuisine.Vegan"
                    control={control}
                    defaultValue={formData4.types_of_cuisine.Vegan}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked4}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked4(newValue);
                          handleVCuisineChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Vegan"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_cuisine.GlutenFree"
                    control={control}
                    defaultValue={formData4.types_of_cuisine.GlutenFree}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked5}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked5(newValue);
                          handleGCuisineChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Gluten-Free"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_cuisine.Halal"
                    control={control}
                    defaultValue={formData4.types_of_cuisine.Halal}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked6}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked6(newValue);
                          handleHCuisineChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Halal"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_cuisine.Kosher"
                    control={control}
                    defaultValue={formData4.types_of_cuisine.Kosher}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked7}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked7(newValue);
                          handleKCuisineChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Kosher"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_cuisine.Other"
                    control={control}
                    defaultValue={formData4.types_of_cuisine.Other}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked8}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked8(newValue);
                          handleOCuisineChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Other"
              />
              {isChecked8 && (
                <Controller
                name="types_of_cuisine.OtherText"
                control={control}
                defaultValue={formData4.types_of_cuisine.Other?formData4.types_of_cuisine.OtherText:""}
                render={({ field }) => (
                <TextField
                  {...field}
                  label="Other Type of Cuisine"
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Bar Services</Typography>
            <Controller
              name="bar_services"
              control={control}
              defaultValue={formData4.bar_services}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Available</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={<Typography variant="body1">Available</Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Alcohol Licensing</Typography>
            <Controller
              name="alcohol_licensing"
              control={control}
              defaultValue={formData4.alcohol_licensing}
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
                      label={<Typography variant="body1">No </Typography>}
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Decor Services</Typography>
            <Controller
              name="decor_services"
              control={control}
              defaultValue={formData4.decor_services}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Available</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={
                        <Typography variant="body1">Not Available</Typography>
                      }
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Event Planning Services</Typography>
            <Controller
              name="event_planning_services"
              control={control}
              defaultValue={formData4.event_planning_services}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Available</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={
                        <Typography variant="body1">Not Available</Typography>
                      }
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Audio/Visual Services</Typography>
            <Controller
              name="audio_visual_services"
              control={control}
              defaultValue={formData4.audio_visual_services}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Available</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={
                        <Typography variant="body1">Not Available</Typography>
                      }
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">
              Internet/Wi-Fi Availability
            </Typography>
            <Controller
              name="internet_wifi_availability"
              control={control}
              defaultValue={formData4.internet_wifi_availability}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Available</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={
                        <Typography variant="body1">Not Available</Typography>
                      }
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">
              Accommodation Availability
            </Typography>
            <Controller
              name="accommodation_availability"
              control={control}
              defaultValue={formData4.accommodation_availability}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Available</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={
                        <Typography variant="body1">Not Available</Typography>
                      }
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <Controller
          name="number_of_rooms_for_accommodation"
          control={control}
          defaultValue={formData4.number_of_rooms_for_accommodation}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Number of Rooms"
              fullWidth
              error={!!errors.number_of_rooms_for_accommodation}
              helperText={errors.number_of_rooms_for_accommodation?.message}
              style={{ marginBottom: "16px", marginLeft: "8px" , marginRight: "16px" }}
              type="number"
            />
          )}
        />

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Types of Rooms</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_rooms.Single"
                    control={control}
                    defaultValue={formData4.types_of_rooms.Single}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked9}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked9(newValue);
                          handleRoomChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Single"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_rooms.Double"
                    control={control}
                    defaultValue={formData4.types_of_rooms.Double}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked10}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked10(newValue);
                          handleRoomDChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Double"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_rooms.Suite"
                    control={control}
                    defaultValue={formData4.types_of_rooms.Suite}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked11}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked11(newValue);
                          handleRoomSChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Suite"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_rooms.Accessible"
                    control={control}
                    defaultValue={formData4.types_of_rooms.Accessible}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked12}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked12(newValue);
                          handleRoomAChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Accessible"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_rooms.Other"
                    control={control}
                    defaultValue={formData4.types_of_rooms.Other}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked13}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked13(newValue);
                          handleRoomOChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Other"
              />
              {isChecked13 && (
                <Controller
                name="types_of_rooms.OtherText"
                control={control}
                defaultValue={formData4.types_of_rooms.Other?formData4.types_of_rooms.OtherText:""}
                render={({ field }) => (
                <TextField
                  {...field}
                  label="Other Type of Room"
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Furniture Availability</Typography>
            <Controller
              name="furniture_availability"
              control={control}
              defaultValue={formData4.furniture_availability}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={<Typography variant="body1">Available</Typography>}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={
                        <Typography variant="body1">Not Available</Typography>
                      }
                    />
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>

        <Controller
          name="types_of_furniture_available"
          control={control}
          defaultValue={formData4.types_of_furniture_available}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Types of Furniture Available"
              fullWidth
              error={!!errors.types_of_furniture_available}
              helperText={errors.types_of_furniture_available?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="decor_restrictions"
          control={control}
          defaultValue={formData4.decor_restrictions}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Decor Restrictions"
              fullWidth
              error={!!errors.decor_restrictions}
              helperText={errors.decor_restrictions?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Cleaning Services</Typography>
            <Controller
              name="cleaning_services"
              control={control}
              defaultValue={formData4.cleaning_services}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">
              On-Site Staff Availability
            </Typography>
            <Controller
              name="on_site_staff_availability"
              control={control}
              defaultValue={formData4.on_site_staff_availability}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">
              Event Coordination Services
            </Typography>
            <Controller
              name="event_coordination_services"
              control={control}
              defaultValue={formData4.event_coordination_services}
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

        <FormControl
          component="fieldset"
          style={{ marginBottom: "16px", marginLeft: "16px" }}
        >
          <Typography variant="subtitle1">Equipment Rental Options</Typography>
          <Controller
            name="equipment_rental_options"
            control={control}
            defaultValue={formData4.equipment_rental_options}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Storage Facilities</Typography>
            <Controller
              name="storage_facilities"
              control={control}
              defaultValue={formData4.storage_facilities}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Signage/Banner Allowed</Typography>
            <Controller
              name="signage_banner_allowed"
              control={control}
              defaultValue={formData4.signage_banner_allowed}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Special Lighting</Typography>
            <Controller
              name="special_lighting"
              control={control}
              defaultValue={formData4.special_lighting}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Dance Floor</Typography>
            <Controller
              name="dance_floor"
              control={control}
              defaultValue={formData4.dance_floor}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Outdoor Heating</Typography>
            <Controller
              name="outdoor_heating"
              control={control}
              defaultValue={formData4.outdoor_heating}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Tenting Facilities</Typography>
            <Controller
              name="tenting_facilities"
              control={control}
              defaultValue={formData4.tenting_facilities}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Coat Check</Typography>
            <Controller
              name="coat_check"
              control={control}
              defaultValue={formData4.coat_check}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Bridal Suite</Typography>
            <Controller
              name="bridal_suite"
              control={control}
              defaultValue={formData4.bridal_suite}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Child Care Facilities</Typography>
            <Controller
              name="child_care_facilities"
              control={control}
              defaultValue={formData4.child_care_facilities}
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

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Pet Care Facilities</Typography>
            <Controller
              name="pet_care_facilities"
              control={control}
              defaultValue={formData4.pet_care_facilities}
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

        <div style={{ marginTop: "16px" }}>
          <Button onClick={handleBack}>Back</Button>
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
    </div>
  );
}

export default Step4;
