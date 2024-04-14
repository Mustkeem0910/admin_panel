import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, FormGroup, Checkbox, Typography, TextField, InputLabel } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';



function Step7({ handleNext, handleBack, handleSave, formData7, updateFormData7 }) {
    const { handleSubmit, control, formState: { errors }  } = useForm();

    const onSubmit = (data) => {
        console.log("data7:",data);
        updateFormData7(data);
        handleNext();
    };



    return (
        <div style={{marginTop: "5px"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="licenses_and_permits"
                    control={control}
                    defaultValue={formData7.licenses_and_permits}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Licenses and Permits"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.licenses_and_permits}
                            helperText={errors.licenses_and_permits?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <Controller
                    name="safety_measures"
                    control={control}
                    defaultValue={formData7.safety_measures}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Safety Measures"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.safety_measures}
                            helperText={errors.safety_measures?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />

                <Controller
                    name="business_registration_details"
                    control={control}
                    defaultValue={formData7.business_registration_details}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Business Registration Details"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.business_registration_details}
                            helperText={errors.business_registration_details?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />



                

                <div style={{ marginBottom: '16px', marginLeft: '16px' }}>
                    <FormControl component="fieldset">
                        <Typography variant="subtitle1">Tax Compliance Status</Typography>
                        <Controller
                            name="tax_compliance_status"
                            control={control}
                            defaultValue={formData7.tax_compliance_status}
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <FormControlLabel
                                            value="Compliant"
                                            control={<Radio />}
                                            label={<Typography variant="body1">Compliant</Typography>}
                                        />
                                        <FormControlLabel
                                            value="Non-Compliant"
                                            control={<Radio />}
                                            label={<Typography variant="body1">Non-Compliant</Typography>}
                                        />
                                    </div>
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                </div>
                <Controller
                    name="health_and_safety_certifications"
                    control={control}
                    defaultValue={formData7.health_and_safety_certifications}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Health and Safety Certifications"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.health_and_safety_certifications}
                            helperText={errors.health_and_safety_certifications?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <div style={{ marginBottom: '16px', marginLeft: '16px' }}>
                    <FormControl component="fieldset">
                        <Typography variant="subtitle1">Fire Safety Compliance</Typography>
                        <Controller
                            name="fire_safety_compliance"
                            control={control}
                            defaultValue={formData7.fire_safety_compliance}
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <FormControlLabel
                                            value="Compliant"
                                            control={<Radio />}
                                            label={<Typography variant="body1">Compliant</Typography>}
                                        />
                                        <FormControlLabel
                                            value="Non-Compliant"
                                            control={<Radio />}
                                            label={<Typography variant="body1">Non-Compliant</Typography>}
                                        />
                                    </div>
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                </div>

                <Controller
                    name="food_safety_certifications"
                    control={control}
                    defaultValue={formData7.food_safety_certifications}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Food Safety Certifications (if applicable)"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.food_safety_certifications}
                            helperText={errors.food_safety_certifications?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <Controller
                    name="alcohol_licensing_details"
                    control={control}
                    defaultValue={formData7.alcohol_licensing_details}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Alcohol Licensing Details"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.alcohol_licensing_details}
                            helperText={errors.alcohol_licensing_details?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <Controller
                    name="music_licensing_details"
                    control={control}
                    defaultValue={formData7.music_licensing_details}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Music Licensing Details"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.music_licensing_details}
                            helperText={errors.music_licensing_details?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />

                <Controller
                    name="insurance_coverage_details"
                    control={control}
                    defaultValue={formData7.insurance_coverage_details}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Insurance Coverage Details"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.insurance_coverage_details}
                            helperText={errors.insurance_coverage_details?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />



                <div style={{ marginBottom: '16px', marginLeft: '16px' }}>
                    <FormControl component="fieldset">
                        <Typography variant="subtitle1">Accessibility Compliance</Typography>
                        <Controller
                            name="accessibility_compliance"
                            control={control}
                            defaultValue={formData7.accessibility_compliance}
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <FormControlLabel
                                            value="Compliant"
                                            control={<Radio />}
                                            label={<Typography variant="body1">Compliant</Typography>}
                                        />
                                        <FormControlLabel
                                            value="Non-Compliant"
                                            control={<Radio />}
                                            label={<Typography variant="body1">Non-Compliant</Typography>}
                                        />
                                    </div>
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                </div>


                <Controller
                    name="privacy_policy"
                    control={control}
                    defaultValue={formData7.privacy_policy}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Privacy Policy"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.privacy_policy}
                            helperText={errors.privacy_policy?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />


                <Controller
                    name="terms_and_conditions"
                    control={control}
                    defaultValue={formData7.terms_and_conditions}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Terms and Conditions"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.terms_and_conditions}
                            helperText={errors.terms_and_conditions?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />



                <Controller
                    name="dispute_resolution_mechanisms"
                    control={control}
                    defaultValue={formData7.dispute_resolution_mechanisms}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Dispute Resolution Mechanisms"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.dispute_resolution_mechanisms}
                            helperText={errors.dispute_resolution_mechanisms?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />

                <Controller
                    name="sustainability_practices"
                    control={control}
                    defaultValue={formData7.sustainability_practices}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Sustainability Practices"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.sustainability_practices}
                            helperText={errors.sustainability_practices?.message}
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                />

                <Controller
                    name="noise_pollution_controls"
                    control={control}
                    defaultValue={formData7.noise_pollution_controls}
                    rules={{}}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Noise Pollution Controls"
                            fullWidth
                            multiline
                            rows={1}
                            error={!!errors.noise_pollution_controls}
                            helperText={errors.noise_pollution_controls?.message}
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

export default Step7;