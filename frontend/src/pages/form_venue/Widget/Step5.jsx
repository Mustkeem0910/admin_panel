import { React, useState } from "react";
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
  InputLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function Step5({
  handleNext,
  handleBack,
  formData5,
  handleDiscountChange,
  handleDiscountBChange,
  handleDiscountFChange,
  handleDiscountOChange,
  updateFormData5,
  handleSave,
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [isChecked, setIsChecked] = useState(
    formData5.types_of_discounts.EarlyBird
  );
  const [isChecked1, setIsChecked1] = useState(
    formData5.types_of_discounts.BulkBooking
  );
  const [isChecked2, setIsChecked2] = useState(
    formData5.types_of_discounts.OffSeason
  );
  const [isChecked3, setIsChecked3] = useState(
    formData5.types_of_discounts.Other
  );
  const onSubmit = (data) => {
    console.log("data5:", data);
    if (data.types_of_discounts.Other) {
      const submissionData = {
        ...data,
      };
      console.log("submissionData", submissionData);
      updateFormData5(submissionData);
    } else {
      const submissionData = {
        ...data,
        types_of_discounts: {
          ...data.types_of_discounts,
          OtherText: "", // Set otherText to an empty string when other is false
        },
      };
      console.log("submissionData", submissionData);
      updateFormData5(submissionData);
    }
    handleNext();
  };

  return (
    <div style={{marginTop: "5px"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Available</Typography>
            <Controller
              name="availability"
              control={control}
              defaultValue={formData5.availability}
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
          name="minimum_notice_period"
          control={control}
          defaultValue={formData5.minimum_notice_period}
          render={({ field }) => (
            <TextField
              {...field}
              label="Minimum Notice Period"
              fullWidth
              error={!!errors.minimum_notice_period}
              helperText={errors.minimum_notice_period?.message}
              style={{ marginBottom: "16px" }}
              type="number"
            />
          )}
        />

        <Controller
          name="cancellation_policy"
          control={control}
          defaultValue={formData5.cancellation_policy}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Cancellation Policy"
              fullWidth
              multiline
              rows={2} // Adjust the number of rows as needed
              error={!!errors.cancellation_policy}
              helperText={errors.cancellation_policy?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="pricing"
          control={control}
          defaultValue={formData5.pricing}
          render={({ field }) => (
            <TextField
              {...field}
              label="Pricing"
              fullWidth
              error={!!errors.pricing}
              helperText={errors.pricing?.message}
              style={{ marginBottom: "16px" }}
              type="number"
            />
          )}
        />
        <Controller
          name="payment_methods_accepted"
          control={control}
          defaultValue={formData5.payment_methods_accepted}
          render={({ field }) => (
            <TextField
              {...field}
              label="Payment Methods Accepted"
              fullWidth
              error={!!errors.payment_methods_accepted}
              helperText={errors.payment_methods_accepted?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="insurance_requirements"
          control={control}
          defaultValue={formData5.insurance_requirements}
          render={({ field }) => (
            <TextField
              {...field}
              label="Insurance Requirements"
              fullWidth
              error={!!errors.insurance_requirements}
              helperText={errors.insurance_requirements?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="booking_channels"
          control={control}
          defaultValue={formData5.booking_channels}
          render={({ field }) => (
            <TextField
              {...field}
              label="Booking Channels"
              fullWidth
              error={!!errors.booking_channels}
              helperText={errors.booking_channels?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Deposit Requirement</Typography>
            <Controller
              name="deposit_requirement"
              control={control}
              defaultValue={formData5.deposit_requirement}
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
          name="deposit_amount"
          control={control}
          defaultValue={formData5.deposit_amount}
          rules={{
            validate: (value) => {
              if (!value) return true;
              if (!/^\d+(\.\d{1,2})?$/.test(value)) {
                return "Enter a valid number";
              }
              return true;
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Deposit Amount"
              fullWidth
              error={!!errors.deposit_amount}
              helperText={errors.deposit_amount?.message}
              style={{ marginBottom: "16px" }}
              type="number"
              inputProps={{ step: "0.01" }}
            />
          )}
        />

        <Controller
          name="deposit_refund_policy"
          control={control}
          defaultValue={formData5.deposit_refund_policy}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Deposit Refund Policy"
              fullWidth
              multiline
              rows={2}
              error={!!errors.deposit_refund_policy}
              helperText={errors.deposit_refund_policy?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="full_payment_due_date"
          control={control}
          defaultValue={formData5.full_payment_due_date}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Full Payment Due Date"
              fullWidth
              error={!!errors.full_payment_due_date}
              helperText={errors.full_payment_due_date?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Discounts Available</Typography>
            <Controller
              name="discounts_available"
              control={control}
              defaultValue={formData5.discounts_available}
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
            <Typography variant="subtitle1">Types of Discounts</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_discounts.EarlyBird"
                    control={control}
                    defaultValue={formData5.types_of_discounts.EarlyBird}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked(newValue);
                          handleDiscountChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Early Bird"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_discounts.BulkBooking"
                    control={control}
                    defaultValue={formData5.types_of_discounts.BulkBooking}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked1}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked1(newValue);
                          handleDiscountBChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Bulk Booking"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_discounts.OffSeason"
                    control={control}
                    defaultValue={formData5.types_of_discounts.OffSeason}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked2}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked2(newValue);
                          handleDiscountFChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Off-Season"
              />
              <FormControlLabel
                control={
                  <Controller
                    name="types_of_discounts.Other"
                    control={control}
                    defaultValue={formData5.types_of_discounts.Other}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={isChecked3}
                        onChange={(e) => {
                          const newValue = e.target.checked ? true : false;
                          field.onChange(newValue);
                          setIsChecked3(newValue);
                          handleDiscountOChange(e);
                        }}
                      />
                    )}
                  />
                }
                label="Other"
              />
              {isChecked3 && (
                <Controller
                  name="types_of_discounts.OtherText"
                  control={control}
                  defaultValue={
                    formData5.types_of_discounts.Other
                      ? formData5.types_of_discounts.OtherText
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
        </div>

        <Controller
          name="minimum_booking_duration"
          control={control}
          defaultValue={formData5.minimum_booking_duration}
          render={({ field }) => (
            <TextField
              {...field}
              label="Minimum Booking Duration"
              fullWidth
              error={!!errors.minimum_booking_duration}
              helperText={errors.minimum_booking_duration?.message}
              style={{ marginBottom: "16px" }}
              type="number"
            />
          )}
        />

        <Controller
          name="maximum_booking_duration"
          control={control}
          defaultValue={formData5.maximum_booking_duration}
          render={({ field }) => (
            <TextField
              {...field}
              label="Maximum Booking Duration"
              fullWidth
              error={!!errors.maximum_booking_duration}
              helperText={errors.maximum_booking_duration?.message}
              style={{ marginBottom: "16px" }}
              type="number"
            />
          )}
        />

        <Controller
          name="overtime_policy"
          control={control}
          defaultValue={formData5.overtime_policy}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Overtime Policy"
              fullWidth
              multiline
              rows={2} // Adjust the number of rows as needed
              error={!!errors.overtime_policy}
              helperText={errors.overtime_policy?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">
              Setup/Takedown Time Included
            </Typography>
            <Controller
              name="setup_takedown_time_included"
              control={control}
              defaultValue={formData5.setup_takedown_time_included}
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
          name="additional_costs"
          control={control}
          defaultValue={formData5.additional_costs}
          render={({ field }) => (
            <TextField
              {...field}
              label="Additional Costs (if any)"
              fullWidth
              error={!!errors.additional_costs}
              helperText={errors.additional_costs?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <div style={{ marginBottom: "16px", marginLeft: "16px" }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Contract Requirement</Typography>
            <Controller
              name="contract_requirement"
              control={control}
              defaultValue={formData5.contract_requirement}
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
          name="contract_terms"
          control={control}
          defaultValue={formData5.contract_terms}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Contract Terms"
              fullWidth
              multiline
              rows={2}
              error={!!errors.contract_terms}
              helperText={errors.contract_terms?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="cancellation_by_venue_policy"
          control={control}
          defaultValue={formData5.cancellation_by_venue_policy}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Cancellation by Venue Policy"
              fullWidth
              multiline
              rows={2}
              error={!!errors.cancellation_by_venue_policy}
              helperText={errors.cancellation_by_venue_policy?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

        <Controller
          name="force_majeure_policy"
          control={control}
          defaultValue={formData5.force_majeure_policy}
          rules={{}}
          render={({ field }) => (
            <TextField
              {...field}
              label="Force Majeure Policy"
              fullWidth
              multiline
              rows={2}
              error={!!errors.force_majeure_policy}
              helperText={errors.force_majeure_policy?.message}
              style={{ marginBottom: "16px" }}
            />
          )}
        />

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

export default Step5;
