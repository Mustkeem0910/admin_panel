import {React, useState} from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, FormGroup, Checkbox, Typography, TextField, InputLabel } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';


function Step6({ handleNext, handleBack, handleSave, formData6, updateFormData6, handleEventChange, handleEventWedChange, handleEventConChange, handleEventEChange, handleEventPPChange, handleEventFChange, handleEventWChange, handleEventSChange, handleEventOChange }) {
    const { handleSubmit, control, formState: { errors }  , setValue, getValues} = useForm();
    const [isChecked, setIsChecked] = useState(formData6.types_of_events_hosted.Weddings);
    const [isChecked1, setIsChecked1] = useState(formData6.types_of_events_hosted.CorporateEvents);
    const [isChecked2, setIsChecked2] = useState(formData6.types_of_events_hosted.Concerts);
    const [isChecked3, setIsChecked3] = useState(formData6.types_of_events_hosted.Exhibitions);
    const [isChecked4, setIsChecked4] = useState(formData6.types_of_events_hosted.PrivateParties);
    const [isChecked5, setIsChecked5] = useState(formData6.types_of_events_hosted.Festivals);
    const [isChecked6, setIsChecked6] = useState(formData6.types_of_events_hosted.Workshops);
    const [isChecked7, setIsChecked7] = useState(formData6.types_of_events_hosted.Seminars);
    const [isChecked8, setIsChecked8] = useState(formData6.types_of_events_hosted.Other);
    const onSubmit = (data) => {
        console.log("data6:",data);
        if(data.types_of_events_hosted.Other){
            const submissionData = {
                ...data,
              };
              console.log("submissionData",submissionData);
              updateFormData6(submissionData);
        }
        else{
            const submissionData = {
                ...data,
                types_of_events_hosted: {
                  ...data.types_of_discounts,
                  OtherText: "", // Set otherText to an empty string when other is false
                },
            };
            console.log("submissionData",submissionData);
            updateFormData6(submissionData);
        }
        handleNext();
    };

    const validateRating = (value) => {
      const rating = parseFloat(value);
      if (isNaN(rating) || rating < 0 || rating > 5) {
        return 'Rating must be between 0 and 5';
      }
      return true;
    };

    return (
        <div style={{marginTop: "5px"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: '16px', marginLeft: '16px' }}>
      <FormControl component="fieldset">
        <Typography variant="subtitle1">Event Types</Typography>
        <FormGroup>
          <FormControlLabel
            control={
                <Controller
                    name="types_of_events_hosted.Weddings"
                    control={control}
                    defaultValue={formData6.types_of_events_hosted.Weddings}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked(newValue);
                          handleEventWedChange(e);
                        }}
                      />
                    )}
                  />
            }
            label="Weddings"
          />
              <FormControlLabel
                                control={
                                    <Controller
                    name="types_of_events_hosted.CorporateEvents"
                    control={control}
                    defaultValue={formData6.types_of_events_hosted.CorporateEvents}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked1}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked1(newValue);
                          handleEventChange(e);
                        }}
                      />
                    )}
                  />
                    
                                }
                                label="Corporate Events"
                            />
                            <FormControlLabel
                                control={
                                    <Controller
                    name="types_of_events_hosted.Concerts"
                    control={control}
                    defaultValue={formData6.types_of_events_hosted.Concerts}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked2}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked2(newValue);
                          handleEventConChange(e);
                        }}
                      />
                    )}
                  />
                                }
                                label="Concerts"
                            />
                            <FormControlLabel
                                control={
                                    <Controller
                    name="types_of_events_hosted.Exhibitions"
                    control={control}
                    defaultValue={formData6.types_of_events_hosted.Exhibitions}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked3}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked3(newValue);
                          handleEventEChange(e);
                        }}
                      />
                    )}
                  />
                                }
                                label="Exhibitions"
                            />
                            <FormControlLabel
                                control={
                                    <Controller
                    name="types_of_events_hosted.PrivateParties"
                    control={control}
                    defaultValue={formData6.types_of_events_hosted.PrivateParties}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked4}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked4(newValue);
                          handleEventPPChange(e);
                        }}
                      />
                    )}
                  />
                                }
                                label="Private Parties"
                            />
                            <FormControlLabel
                                control={
                                    <Controller
                    name="types_of_events_hosted.Festivals"
                    control={control}
                    defaultValue={formData6.types_of_events_hosted.Festivals}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked5}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked5(newValue);
                          handleEventFChange(e);
                        }}
                      />
                    )}
                  />
                                }
                                label="Festivals"
                            />
                            <FormControlLabel
                                control={
                                    <Controller
                    name="types_of_events_hosted.Workshops"
                    control={control}
                    defaultValue={formData6.types_of_events_hosted.Workshops}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked6}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked6(newValue);
                          handleEventWChange(e);
                        }}
                      />
                    )}
                  />
                                }
                                label="Workshops"
                            />
                            <FormControlLabel
                                control={
                                    <Controller
                    name="types_of_events_hosted.Seminars"
                    control={control}
                    defaultValue={formData6.types_of_events_hosted.Seminars}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked7}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked7(newValue);
                          handleEventSChange(e);
                        }}
                      />
                    )}
                  />
                                }
                                label="Seminars"
                            />
          <FormControlLabel
            control={
                <Controller
                    name="types_of_events_hosted.Other"
                    control={control}
                    defaultValue={formData6.types_of_events_hosted.Other}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked8}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked8(newValue);
                          handleEventOChange(e);
                        }}
                      />
                    )}
                  />
            }
            label="Other"
          />
          {isChecked8 && (
                <Controller
                name="types_of_events_hosted.OtherText"
                control={control}
                defaultValue={formData6.types_of_events_hosted.Other?formData6.types_of_events_hosted.OtherText:""}
                render={({ field }) => (
                <TextField
                  {...field}
                  label="Other Types of events"
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

                <Controller
                    name="client_testimonials_and_reviews"
                    control={control}
                    defaultValue={formData6.client_testimonials_and_reviews}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Client Testimonials and Reviews"
                            fullWidth
                            multiline
                            rows={2}
                            error={!!errors.client_testimonials_and_reviews}
                            helperText={errors.client_testimonials_and_reviews?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <Controller
                    name="number_of_events_hosted"
                    control={control}
                    defaultValue={formData6.number_of_events_hosted}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Number of Events Hosted"
                            fullWidth
                            error={!!errors.number_of_events_hosted}
                            helperText={errors.number_of_events_hosted?.message}
                            style={{ marginBottom: '16px' }}
                            type='number'
                        />
                    )}
                />


                <Controller
                    name="notable_events_or_clients"
                    control={control}
                    defaultValue={formData6.notable_events_or_clients}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Notable Events or Clients"
                            fullWidth
                            multiline
                            rows={2}
                            error={!!errors.notable_events_or_clients}
                            helperText={errors.notable_events_or_clients?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <Controller
                    name="client_references"
                    control={control}
                    defaultValue={formData6.client_references}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Client References"
                            fullWidth
                            multiline
                            rows={2}
                            error={!!errors.client_references}
                            helperText={errors.client_references?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />




                <Controller
                    name="event_success_stories"
                    control={control}
                    defaultValue={formData6.event_success_stories}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Event Success Stories"
                            fullWidth
                            multiline
                            rows={2}
                            error={!!errors.event_success_stories}
                            helperText={errors.event_success_stories?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <Controller
                    name="event_failures_lessons_learned"
                    control={control}
                    defaultValue={formData6.event_failures_lessons_learned}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Event Failures/Lessons Learned"
                            fullWidth
                            multiline
                            rows={2}
                            error={!!errors.event_failures_lessons_learned}
                            helperText={errors.event_failures_lessons_learned?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />

<Controller
  name="average_event_rating"
  control={control}
  defaultValue={formData6.average_event_rating}
  rules={{
    validate: (value) => {
      if (!value) return true; 
      if (!/^\d+(\.\d{1,2})?$/.test(value) || value < 0 || value > 5) {
        return "Enter a valid rating between 0 and 5";
      }
      return true;
    },
  }}
  render={({ field }) => (
    <TextField
      {...field}
      label="Average Event Rating"
      fullWidth
      error={!!errors.average_event_rating}
      helperText={errors.average_event_rating?.message}
      style={{ marginBottom: '16px' }}
      type="number"
      inputProps={{ step: '0.01', min: '0', max: '5' }}
    />
  )}
/>



                <Controller
                    name="event_portfolio"
                    control={control}
                    defaultValue={formData6.event_portfolio}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Event Portfolio"
                            fullWidth
                            error={!!errors.event_portfolio}
                            helperText={errors.event_portfolio?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />

                <Controller
                    name="media_mentions"
                    control={control}
                    defaultValue={formData6.media_mentions}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Media Mentions"
                            fullWidth
                            multiline
                            rows={2}
                            error={!!errors.media_mentions}
                            helperText={errors.media_mentions?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <Controller
                    name="event_frequency"
                    control={control}
                    defaultValue={formData6.event_frequency}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Event Frequency"
                            fullWidth
                            error={!!errors.event_frequency}
                            helperText={errors.event_frequency?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <div style={{ marginTop: '16px' }}>
                    <Button onClick={handleBack}>
                        Back
                    </Button>
                    <Button variant="contained" color="primary" style={{ marginLeft: '8px' }} onClick={handleSave}>
                        Save
                    </Button>
                    <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '8px' }}>
                        Next
                    </Button>
                </div>


            </form>
        </div>
    );
}

export default Step6;