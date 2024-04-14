import React, { useState, useEffect } from 'react';
import {
    FormControl, FormControlLabel, Radio, RadioGroup, Button, FormGroup, Checkbox, Typography, TextField, InputLabel, Select,
    MenuItem,
} from '@mui/material';

import { useForm, Controller } from 'react-hook-form';
import {fetchVendorsByType } from '../../../apis/api';



function Step8({ handleNext, handleBack, handleSave, formData8, handleCatChange, handlePhotoChange, handleBandChange, handleFlowerChange,handleTransChange, handleLightChange, handleWedChange, handleDjChange }) {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [CateringVendors, setCateringVendors] = useState([]);
    const [PhotographyVendors, setPhotographyVendors] = useState([]);
    const [BandVendors, setBandVendors] = useState([]);
    const [FlowersVendors, setFlowersVendors] = useState([]);
    const [TransportationVendors, setTransportationVendors] = useState([]);
    const [LightingAndDecorsVendors, setLightingAndDecorsVendors] = useState([]);
    const [WeddingCakeVendors, setWeddingCakeVendors] = useState([]);
    const [DJVendors, setDJVendors] = useState([]);

    const onSubmit = (data) => {
        console.log("data8:",data);
        handleNext();
    };

    useEffect(() => {
        const fetchCateringVendors = async () => {
            try {
                const cateringVendors = await fetchVendorsByType(1);
                setCateringVendors(cateringVendors);
            } catch (error) {
                console.error('Error fetching catering vendors:', error);
            }
        };

        // Fetch catering vendors when the component loads
        fetchCateringVendors();

        const fetchPhotographyVendors = async () => {
            try {
                const photographyVendors = await fetchVendorsByType(2);
                setPhotographyVendors(photographyVendors);
            } catch (error) {
                console.error('Error fetching photography vendors:', error);
            }
        };

        // Fetch photography vendors when the component loads
        fetchPhotographyVendors();

        const fetchBandVendors = async () => {
            try {
                const bandVendors = await fetchVendorsByType(4);
                setBandVendors(bandVendors);
            } catch (error) {
                console.error('Error fetching band vendors:', error);
            }
        };

        // Fetch band vendors when the component loads
        fetchBandVendors();

        const fetchFlowersVendors = async () => {
            try {
                const flowersVendors = await fetchVendorsByType(5);
                setFlowersVendors(flowersVendors);
            } catch (error) {
                console.error('Error fetching flowers vendors:', error);
            }
        };

        // Fetch flowers vendors when the component loads
        fetchFlowersVendors();

        const fetchTransportationVendors = async () => {
            try {
                const transportationVendors = await fetchVendorsByType(6);
                setTransportationVendors(transportationVendors);
            } catch (error) {
                console.error('Error fetching transportation vendors:', error);
            }
        };

        // Fetch transportation vendors when the component loads
        fetchTransportationVendors();

        const fetchLightingAndDecorsVendors = async () => {
            try {
                const lightingAndDecorsVendors = await fetchVendorsByType(7);
                setLightingAndDecorsVendors(lightingAndDecorsVendors);
            } catch (error) {
                console.error('Error fetching LightingAndDecors vendors:', error);
            }
        };

        // Fetch LightingAndDecors vendors when the component loads
        fetchLightingAndDecorsVendors();


        const fetchWeddingCakeVendors = async () => {
            try {
                const weddingCakeVendors = await fetchVendorsByType(8);
                setWeddingCakeVendors(weddingCakeVendors);
            } catch (error) {
                console.error('Error fetching weddingCake vendors:', error);
            }
        };

        // Fetch weddingCake vendors when the component loads
        fetchWeddingCakeVendors();

        const fetchDJVendors = async () => {
            try {
                const dJVendors = await fetchVendorsByType(9);
                setDJVendors(dJVendors);
            } catch (error) {
                console.error('Error fetching DJ vendors:', error);
            }
        };

        // Fetch DJ vendors when the component loads
        fetchDJVendors();
    }, []);






    return (
        <div style={{marginTop: "5px"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
          name="preferred_catering_vendor"
          control={control}
          defaultValue={formData8.preferred_catering_vendor}
          render={({ field }) => (
            <FormControl fullWidth variant="outlined">
                    <InputLabel id="preferred_catering_vendor">Preferred Catering Vendor</InputLabel>
                    <Select
                        {...field}
                        labelId="preferred_catering_vendor"
                        id="preferred_catering_vendor"
                        value={formData8.preferred_catering_vendor}
                        onChange={(e) => {field.onChange(e); handleCatChange(e);}}
                        label="Preferred Catering Vendor"
                    >
                        <MenuItem value="">
                            <em>Select catering vendor</em>
                        </MenuItem>
                        {CateringVendors.map((vendor) => (
                            <MenuItem key={vendor.vendor_id} value={vendor.vendor_id}>
                                {vendor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                )}
                />


<Controller
          name="preferred_photography_vendor"
          control={control}
          defaultValue={formData8.preferred_photography_vendor}
          render={({ field }) => (
                <FormControl fullWidth variant="outlined" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <InputLabel id="preferred_photography_vendor">Preferred PhotoGraphy Vendor</InputLabel>
                    <Select
                        labelId="preferred_photography_vendor"
                        id="preferred_photography_vendor"
                        value={formData8.preferred_photography_vendor}
                        onChange={(e) => {field.onChange(e); handlePhotoChange(e);}}
                        label="Preferred Photography Vendor"
                    >
                        <MenuItem value="">
                            <em>Select photography vendor</em>
                        </MenuItem>
                        {PhotographyVendors.map((vendor) => (
                            <MenuItem key={vendor.vendor_id} value={vendor.vendor_id}>
                                {vendor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                )}
                />

<Controller
          name="preferred_band_vendor"
          control={control}
          defaultValue={formData8.preferred_band_vendor}
          render={({ field }) => (
                <FormControl fullWidth variant="outlined" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <InputLabel id="preferred_band_vendor">Preferred Band Vendor</InputLabel>
                    <Select
                        labelId="preferred_band_vendor"
                        id="preferred_band_vendor"
                        value={formData8.preferred_band_vendor}
                        onChange={(e) => {field.onChange(e); handleBandChange(e);}}
                        label="Preferred Band Vendor"
                    >
                        <MenuItem value="">
                            <em>Select band vendor</em>
                        </MenuItem>
                        {BandVendors.map((vendor) => (
                            <MenuItem key={vendor.vendor_id} value={vendor.vendor_id}>
                                {vendor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
          )}
          />

                
<Controller
          name="preferred_flowers_vendor"
          control={control}
          defaultValue={formData8.preferred_flowers_vendor}
          render={({ field }) => (
                <FormControl fullWidth variant="outlined" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <InputLabel id="preferred_flowers_vendor">Preferred Flowers Vendor</InputLabel>
                    <Select
                        labelId="preferred_flowers_vendor"
                        id="preferred_flowers_vendor"
                        value={formData8.preferred_flowers_vendor}
                        onChange={(e) => {field.onChange(e); handleFlowerChange(e);}}
                        label="Preferred Flowers Vendor"
                    >
                        <MenuItem value="">
                            <em>Select flowers vendor</em>
                        </MenuItem>
                        {FlowersVendors.map((vendor) => (
                            <MenuItem key={vendor.vendor_id} value={vendor.vendor_id}>
                                {vendor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
          )}
          />
                 

                <div>
                
                <Controller
          name="preferred_transportation_vendor"
          control={control}
          defaultValue={formData8.preferred_transportation_vendor}
          render={({ field }) => (
                <FormControl fullWidth variant="outlined" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <InputLabel id="preferred_transportation_vendor">Preferred Transportation Vendor</InputLabel>
                    <Select
                        labelId="preferred_transportation_vendor"
                        id="preferred_transportation_vendor"
                        value={formData8.preferred_transportation_vendor}
                        onChange={(e) => {field.onChange(e); handleTransChange(e);}}
                        label="Preferred Transportation Vendor"
                    >
                        <MenuItem value="">
                            <em>Select transportation vendor</em>
                        </MenuItem>
                        {TransportationVendors.map((vendor) => (
                            <MenuItem key={vendor.vendor_id} value={vendor.vendor_id}>
                                {vendor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
          )}
          />

<Controller
          name="preferred_lighting_and_decor_vendor"
          control={control}
          defaultValue={formData8.preferred_lighting_and_decor_vendor}
          render={({ field }) => (
                <FormControl fullWidth variant="outlined" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <InputLabel id="preferred_lighting_and_decor_vendor">Preferred Lighting Vendor</InputLabel>
                    <Select
                        labelId="preferred_lighting_and_decor_vendor"
                        id="preferred_lighting_and_decor_vendor"
                        value={formData8.preferred_lighting_and_decor_vendor}
                        onChange={(e) => {field.onChange(e); handleLightChange(e);}}
                        label="Preferred Lighting Vendor"
                    >
                        <MenuItem value="">
                            <em>Select lighting vendor</em>
                        </MenuItem>
                        {LightingAndDecorsVendors.map((vendor) => (
                            <MenuItem key={vendor.vendor_id} value={vendor.vendor_id}>
                                {vendor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
          )}
          />

<Controller
          name="preferred_wedding_cake_vendor"
          control={control}
          defaultValue={formData8.preferred_wedding_cake_vendor}
          render={({ field }) => (
                <FormControl fullWidth variant="outlined" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <InputLabel id="preferred_wedding_cake_vendor">Preferred Wedding Cake Vendor</InputLabel>
                    <Select
                        labelId="preferred_wedding_cake_vendor"
                        id="preferred_wedding_cake_vendor"
                        value={formData8.preferred_wedding_cake_vendor}
                        onChange={(e) => {field.onChange(e); handleWedChange(e);}}
                        label="Preferred Wedding Cake Vendor"
                    >
                        <MenuItem value="">
                            <em>Select Wedding Cake vendor</em>
                        </MenuItem>
                        {WeddingCakeVendors.map((vendor) => (
                            <MenuItem key={vendor.vendor_id} value={vendor.vendor_id}>
                                {vendor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
          )}
          />

<Controller
          name="preferred_dj_vendor"
          control={control}
          defaultValue={formData8.preferred_dj_vendor}
          render={({ field }) => (
                <FormControl fullWidth variant="outlined" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <InputLabel id="preferred_dj_vendor">Preferred DJ Vendor</InputLabel>
                    <Select
                        labelId="preferred_dj_vendor"
                        id="preferred_dj_vendor"
                        value={formData8.preferred_dj_vendor}
                        onChange={(e) => {field.onChange(e); handleDjChange(e);}}
                        label="Preferred DJ Vendor"
                    >
                        <MenuItem value="">
                            <em>Select DJ vendor</em>
                        </MenuItem>
                        {DJVendors.map((vendor) => (
                            <MenuItem key={vendor.vendor_id} value={vendor.vendor_id}>
                                {vendor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
          )}
          />
        </div>





                <div style={{ marginTop: '16px' }}>
                    <Button onClick={handleBack}>
                        Back
                    </Button>
                    <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '8px' }}>
                        Next
                    </Button>
                </div>


            </form>
        </div>
    );
}

export default Step8;