import React from 'react';
import { TextField, Button, Grid,Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { venueSocial } from '../../../apis/api';

function Step2({ handleNext, handleBack, venueId, updateFormData2, formData2, handleSave }) {
    const { handleSubmit, control,formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log("data2:",data); // Handle the form submission data
        
        updateFormData2(data);
        handleNext();
        // try {
        //     const s_data={venue:venueId,facebook_url:data.facebook_url,twitter_url:data.twitter_url,instagram_url:data.instagram_url,youtube_url:data.youtube_url,linkedin_url:data.linkedin_url}
        //     console.log("s_data:",s_data);
        //     const response = await venueSocial(s_data);

        //     if (response.ok) {
        //         const venueData = await response.json();
        //         console.log("Social Media handles added successfully");
        //         handleNext();
        //     }
        //     else {
        //         console.error("Social Media handles addition failed");
        //     }
        // }
        // catch (error) {
        //     console.error("Error creating venue:", error);
        //   }
        
    };

    return (
        <div style={{marginTop: "5px"}}>
            <div style={{ textAlign: "center" }}>
          <Typography variant="h5" style={{ marginBottom: "16px" }}>
            Owner/Manager Details
          </Typography>
        </div>

        <Controller
          name="owner_manager_name"
          control={control}
          defaultValue={formData2.owner_manager_name}
          rules={{ required: "Owner/Manager Name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Owner/Manager Name"
              fullWidth
              error={!!errors.owner_manager_name}
              helperText={errors.owner_manager_name?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="owner_manager_email"
          control={control}
          defaultValue={formData2.owner_manager_email}
          rules={{
            required: "Owner/Manager Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Owner/Manager Email"
              fullWidth
              error={!!errors.owner_manager_email}
              helperText={errors.owner_manager_email?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="owner_manager_phone"
          control={control}
          defaultValue={formData2.owner_manager_phone}
          rules={{
            required: "Owner/Manager Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message:
                "Add Valid a Number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Owner/Manager Phone Number"
              fullWidth
              error={!!errors.owner_manager_phone}
              helperText={errors.owner_manager_phone?.message}
              style={{ marginBottom: "16px" }}
              type="tel" // Use type "tel" for phone numbers
            />
          )}
        />
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5" style={{ marginBottom: "16px", marginTop: "16px" }}>
            Social Media Handles
          </Typography>
        </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} style={{ marginTop: '1px' }}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="facebook_url"
                            control={control}
                            defaultValue={formData2.facebook_url}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Facebook"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="twitter_url"
                            control={control}
                            defaultValue={formData2.twitter_url}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Twitter"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="instagram_url"
                            control={control}
                            defaultValue={formData2.instagram_url}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Instagram"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="youtube_url"
                            control={control}
                            defaultValue={formData2.youtube_url}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Youtube"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="linkedin_url"
                            control={control}
                            defaultValue={formData2.linkedin_url}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Linkedin"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>

                </Grid>
                <div style={{ marginTop: '16px' }}>
                    <Button  onClick={handleBack}>
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
                    <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '8px' }}>
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Step2;