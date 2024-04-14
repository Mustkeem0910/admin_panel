import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import './venue.css';
import {
  fetchVenueTypes,
  createVenue,
  uploadVenueMedia,
  venueSocial,
  createVenueFacilities,
  createVenueServices,
  createVenueBookings,
  createVenueEvents,
  createVenueLegalCompliances,
  createVenuePreferredVendors,
  updateVenueSocialData,
  updateVenueFacilityData,
  updateVenueServiceData,
  updateVenueBookingData,
  updateVenueEventData,
  updateVenueLegalData,
  updateVenueVendorData,
  fetchVendorsByType,
} from "../../../apis/api";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// FormUtils.js

// Map function to render form fields with labels



function MyVenueForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [venueId, setVenueId] = useState(null);
  const [file, setFile] = useState(null);
  const [venueTypes, setVenueTypes] = useState([]);
  const [selectedVenueTypeName, setVenueTypeName] = useState('');
  const [CateringVendors, setCateringVendors] = useState([]);
  const [selectedCateringVendor, setCateringVendor] = useState('');
  const [PhotographyVendors, setPhotographyVendors] = useState([]);
  const [selectedPhotographyVendor, setPhotographyVendor] = useState('');
  const [BandVendors, setBandVendors] = useState([]);
  const [selectedBandVendor, setBandVendor] = useState('');
  const [FlowersVendors, setFlowersVendors] = useState([]);
  const [selectedFlowersVendor, setFlowersVendor] = useState('');
  const [TransportationVendors, setTransportationVendors] = useState([]);
  const [selectedTransportationVendor, setTransportationVendor] = useState('');
  const [LightingAndDecorsVendors, setLightingAndDecorsVendors] = useState([]);
  const [selectedLightingAndDecorsVendor, setLightingAndDecorsVendor] = useState('');
  const [WeddingCakeVendors, setWeddingCakeVendors] = useState([]);
  const [selectedWeddingCakeVendor, setWeddingCakeVendor] = useState('');
  const [DJVendors, setDJVendors] = useState([]);
  const [selectedDJVendor, setDJVendor] = useState('');
  const navigate = useNavigate();
  const storedData = localStorage.getItem("venueData");
  const venueDataList = storedData ? JSON.parse(storedData) : null;

  const storedData1 = localStorage.getItem("venueSocial");
  const venueSocialList = storedData1 ? JSON.parse(storedData1) : null;

  const storedData2 = localStorage.getItem("venueFacility");
  let venueFacilityList = storedData2 ? JSON.parse(storedData2) : null;

  const storedData3 = localStorage.getItem("venueService");
  let venueServiceList = storedData3 ? JSON.parse(storedData3) : null;

  const storedData4 = localStorage.getItem("venueBooking");
  let venueBookingList = storedData4 ? JSON.parse(storedData4) : null;

  const storedData5 = localStorage.getItem("venueEvent");
  let venueEventList = storedData5 ? JSON.parse(storedData5) : null;

  const storedData6 = localStorage.getItem("venueLegal");
  let venueLegalList = storedData6 ? JSON.parse(storedData6) : null;

  const storedData7 = localStorage.getItem("venueVendor");
  let venueVendorList = storedData7 ? JSON.parse(storedData7) : null;

  const initialFormData1 = venueDataList || {
    name: "",
    address: "",
    email: "",
    phone_number: "",
    venue_type: null,
    description: "",
    year_of_establishment: "",
    ownership_type: "",
  };
  const initialFormData2 = venueSocialList || {
    venue_add_info_id:null,
    venue: "",
    owner_manager_name: "",
    owner_manager_email: "",
    owner_manager_phone: "",
    facebook_url: "",
    twitter_url: "",
    instagram_url: "",
    linkedin_url: "",
    youtube_url: "",
  };
  const initialFormData3 = {
    venue_facilities_id:null,
    venue: "",
    total_area: null,
    indoor_area: null,
    outdoor_area: null,
    seating_capacity: null,
    standing_capacity: null,
    number_of_rooms_spaces: null,
    stage_availability: null,
    podium_availability: null,
    technical_equipment: "",
    parking_facilities: null,
    parking_capacity: null,
    valet_parking_availability: null,
    proximity_to_public_transport: "",
    proximity_to_major_roads: "",
    proximity_to_airport: "",
    surrounding_environment: "",
    noise_restrictions: "",
    ceiling_height: null,
    load_in_load_out_facilities: null,
    green_room_availability: null,
    dressing_room_availability: null,
    kitchen_facilities: null,
    restroom_facilities: null,
    power_supply_backup: null,
    air_conditioning_heating: null,
    natural_light_availability: null,
    outdoor_space_description: "",
    scenic_view: null,
    smoking_area: null,
    pet_friendly: null,
    child_friendly: null,
    noise_level: "",
    nearby_parking_facilities: "",
    security_features: {
      CCTV: false,
      securityPersonnel: false,
      alarmSystem: false,
      other: false,
      otherText: "",
    },
    fire_safety_measures: {
      sprinklerSystem: false,
      fireExitSigns: false,
      fireExtinguishers: false,
      other: false,
      otherText: "",
    },
  };
  const initialFormData4 = {
    venue_services_id:null,
    venue: "",
    catering_services: null,
    types_of_cuisine: {
      Indian: false,
      Chinese: false,
      Italian: false,
      Continental: false,
      Vegan: false,
      GlutenFree: false,
      Halal: false,
      Kosher: false,
      Other: false,
      OtherText: "",
    },
    bar_services: null,
    alcohol_licensing: null,
    decor_services: null,
    event_planning_services: null,
    audio_visual_services: null,
    internet_wifi_availability: null,
    accommodation_availability: null,
    number_of_rooms_for_accommodation: null,
    types_of_rooms: {
      Single: false,
      Double: false,
      Suite: false,
      Accessible: false,
      Other: false,
      OtherText: "",
    },
    furniture_availability: null,
    types_of_furniture_available: "",
    decor_restrictions: "",
    cleaning_services: null,
    on_site_staff_availability: null,
    event_coordination_services: null,
    equipment_rental_options: null,
    storage_facilities: null,
    signage_banner_allowed: null,
    special_lighting: null,
    dance_floor: null,
    outdoor_heating: null,
    tenting_facilities: null,
    coat_check: null,
    bridal_suite: null,
    child_care_facilities: null,
    pet_care_facilities: null,
  };
  const initialFormData5 = {
    venue_booking_id:null,
    venue: "",
    availability: null,
    minimum_notice_period: null,
    cancellation_policy: "",
    pricing: "",
    payment_methods_accepted: "",
    insurance_requirements: "",
    booking_channels: "",
    deposit_requirement: null,
    deposit_amount: null,
    deposit_refund_policy: "",
    full_payment_due_date: "",
    discounts_available: null,
    types_of_discounts: {
      EarlyBird: false,
      BulkBooking: false,
      OffSeason: false,
      Other: false,
      OtherText: "",
    },
    minimum_booking_duration: null,
    maximum_booking_duration: null,
    overtime_policy: "",
    setup_takedown_time_included: null,
    additional_costs: "",
    contract_requirement: null,
    contract_terms: "",
    cancellation_by_venue_policy: "",
    force_majeure_policy: "",
  };

  const initialFormData6 = {
    venue_events_id:null,
    venue: "",
    types_of_events_hosted: {
      CorporateEvents: false,
      Concerts: false,
      Exhibitions: false,
      PrivateParties: false,
      Festivals: false,
      Workshops: false,
      Seminars: false,
      Other: false,
      OtherText: "",
    },
    client_testimonials_and_reviews: "",
    number_of_events_hosted: null,
    notable_events_or_clients: "",
    client_references: "",
    event_success_stories: "",
    event_failures_lessons_learned: "",
    average_event_rating: null,
    event_portfolio: "",
    media_mentions: "",
    event_frequency: "",
  };

  const initialFormData7 = {
    venue_legal_compliance_id:null,
    venue: "",
    licenses_and_permits: "",
    safety_measures: "",
    business_registration_details: "",
    tax_compliance_status: "",
    health_and_safety_certifications: "",
    fire_safety_compliance: "",
    food_safety_certifications: "",
    alcohol_licensing_details: "",
    music_licensing_details: "",
    insurance_coverage_details: "",
    accessibility_compliance: "",
    privacy_policy: "",
    terms_and_conditions: "",
    dispute_resolution_mechanisms: "",
    sustainability_practices: "",
    noise_pollution_controls: "",
  };

  const initialFormData8 = {
    venue_preferred_vendors_id:null,
    venue: "",
    preferred_catering_vendor: "",
    preferred_photography_vendor: "",
    preferred_band_vendor: "",
    preferred_flowers_vendor: "",
    preferred_transportation_vendor: "",
    preferred_lighting_and_decor_vendor: "",
    preferred_wedding_cake_vendor: "",
    preferred_dj_vendor: "",
  };

  const [formData1, setFormData1] = useState(initialFormData1);
  const [formData2, setFormData2] = useState(initialFormData2);
  const [formData3, setFormData3] = useState(initialFormData3);
  const [formData4, setFormData4] = useState(initialFormData4);
  const [formData5, setFormData5] = useState(initialFormData5);
  const [formData6, setFormData6] = useState(initialFormData6);
  const [formData7, setFormData7] = useState(initialFormData7);
  const [formData8, setFormData8] = useState(initialFormData8);

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

    fetchVenueTypes()
      .then((data) => setVenueTypes(data))
      .catch((error) => {
        console.error(error);
        // Handle error if needed
        console.log("formData1 in Step 1:", formData1);
      });
    if (venueDataList) {
      setFormData1(venueDataList);
      // console.log("formData1:",formData1);
      localStorage.removeItem("venueData"); // Remove the data from local storage
    }
    if (venueSocialList) {
      setFormData2(venueSocialList);
      // console.log("formData1:",formData1);
      localStorage.removeItem("venueSocial");
    }

    if (venueFacilityList) {
      console.log("venueFacilityList:", venueFacilityList);
      console.log("formData3:", venueFacilityList.security_features);
      const facilityData = {
        venue_facilities_id: venueFacilityList.venue_facilities_id,
        venue: venueFacilityList.venue,
        total_area: venueFacilityList.total_area,
        indoor_area: venueFacilityList.indoor_area,
        outdoor_area: venueFacilityList.outdoor_area,
        seating_capacity: venueFacilityList.seating_capacity,
        standing_capacity: venueFacilityList.standing_capacity,
        number_of_rooms_spaces: venueFacilityList.number_of_rooms_spaces,
        stage_availability: venueFacilityList.stage_availability,
        podium_availability: venueFacilityList.podium_availability,
        technical_equipment: venueFacilityList.technical_equipment,
        parking_facilities: venueFacilityList.parking_facilities,
        parking_capacity: venueFacilityList.parking_capacity,
        valet_parking_availability:
          venueFacilityList.valet_parking_availability,
        proximity_to_public_transport:
          venueFacilityList.proximity_to_public_transport,
        proximity_to_major_roads: venueFacilityList.proximity_to_major_roads,
        proximity_to_airport: venueFacilityList.proximity_to_airport,
        surrounding_environment: venueFacilityList.surrounding_environment,
        noise_restrictions: venueFacilityList.noise_restrictions,
        ceiling_height: venueFacilityList.ceiling_height,
        load_in_load_out_facilities:
          venueFacilityList.load_in_load_out_facilities,
        green_room_availability: venueFacilityList.green_room_availability,
        dressing_room_availability:
          venueFacilityList.dressing_room_availability,
        kitchen_facilities: venueFacilityList.kitchen_facilities,
        restroom_facilities: venueFacilityList.restroom_facilities,
        power_supply_backup: venueFacilityList.power_supply_backup,
        air_conditioning_heating: venueFacilityList.air_conditioning_heating,
        natural_light_availability:
          venueFacilityList.natural_light_availability,
        outdoor_space_description: venueFacilityList.outdoor_space_description,
        scenic_view: venueFacilityList.scenic_view,
        smoking_area: venueFacilityList.smoking_area,
        pet_friendly: venueFacilityList.pet_friendly,
        child_friendly: venueFacilityList.child_friendly,
        noise_level: venueFacilityList.noise_level,
        nearby_parking_facilities: venueFacilityList.nearby_parking_facilities,
        security_features: JSON.parse(venueFacilityList.security_features),
        fire_safety_measures: JSON.parse(
          venueFacilityList.fire_safety_measures
        ),
      };
      // venueFacilityList.security_features = JSON.parse(venueFacilityList.security_features);
      // venueFacilityList.fire_safety_measures = JSON.parse(venueFacilityList.fire_safety_measures);
      setFormData3(facilityData);
      // console.log("formData1:",formData1);
      localStorage.removeItem("venueFacility");
      // formData3.security_features = JSON.parse(formData3.security_features);
      // formData3.fire_safety_measures = JSON.parse(formData3.fire_safety_measures);
    }

    if (venueServiceList) {
      const serviceData = {
        venue_services_id: venueServiceList.venue_services_id,
        venue: venueServiceList.venue,
        catering_services: venueServiceList.catering_services,
        types_of_cuisine: JSON.parse(venueServiceList.types_of_cuisine),
        bar_services: venueServiceList.bar_services,
        alcohol_licensing: venueServiceList.alcohol_licensing,
        decor_services: venueServiceList.decor_services,
        event_planning_services: venueServiceList.event_planning_services,
        audio_visual_services: venueServiceList.audio_visual_services,
        internet_wifi_availability: venueServiceList.internet_wifi_availability,
        accommodation_availability: venueServiceList.accommodation_availability,
        number_of_rooms_for_accommodation:
          venueServiceList.number_of_rooms_for_accommodation,
        types_of_rooms: JSON.parse(venueServiceList.types_of_rooms),
        furniture_availability: venueServiceList.furniture_availability,
        types_of_furniture_available:
          venueServiceList.types_of_furniture_available,
        decor_restrictions: venueServiceList.decor_restrictions,
        cleaning_services: venueServiceList.cleaning_services,
        on_site_staff_availability: venueServiceList.on_site_staff_availability,
        event_coordination_services:
          venueServiceList.event_coordination_services,
        equipment_rental_options: venueServiceList.equipment_rental_options,
        storage_facilities: venueServiceList.storage_facilities,
        signage_banner_allowed: venueServiceList.signage_banner_allowed,
        special_lighting: venueServiceList.special_lighting,
        dance_floor: venueServiceList.dance_floor,
        outdoor_heating: venueServiceList.outdoor_heating,
        tenting_facilities: venueServiceList.tenting_facilities,
        coat_check: venueServiceList.coat_check,
        bridal_suite: venueServiceList.bridal_suite,
        child_care_facilities: venueServiceList.child_care_facilities,
        pet_care_facilities: venueServiceList.pet_care_facilities,
      };

      setFormData4(serviceData);
      localStorage.removeItem("venueService");
    }

    if (venueBookingList) {
      const bookingData = {
        venue_booking_id: venueBookingList.venue_booking_id,
        venue: venueBookingList.venue,
        availability: venueBookingList.availability,
        minimum_notice_period: venueBookingList.minimum_notice_period,
        cancellation_policy: venueBookingList.cancellation_policy,
        pricing: venueBookingList.pricing,
        payment_methods_accepted: venueBookingList.payment_methods_accepted,
        insurance_requirements: venueBookingList.insurance_requirements,
        booking_channels: venueBookingList.booking_channels,
        deposit_requirement: venueBookingList.deposit_requirement,
        deposit_amount: venueBookingList.deposit_amount,
        deposit_refund_policy: venueBookingList.deposit_refund_policy,
        full_payment_due_date: venueBookingList.full_payment_due_date,
        discounts_available: venueBookingList.discounts_available,
        types_of_discounts: JSON.parse(venueBookingList.types_of_discounts),
        minimum_booking_duration: venueBookingList.minimum_booking_duration,
        maximum_booking_duration: venueBookingList.maximum_booking_duration,
        overtime_policy: venueBookingList.overtime_policy,
        setup_takedown_time_included:
          venueBookingList.setup_takedown_time_included,
        additional_costs: venueBookingList.additional_costs,
        contract_requirement: venueBookingList.contract_requirement,
        contract_terms: venueBookingList.contract_terms,
        cancellation_by_venue_policy:
          venueBookingList.cancellation_by_venue_policy,
        force_majeure_policy: venueBookingList.force_majeure_policy,
      };
      setFormData5(bookingData);
      localStorage.removeItem("venueBooking");
    }

    if (venueEventList) {
      const eventData = {
        venue_events_id: venueEventList.venue_events_id,
        venue: venueEventList.venue,
        types_of_events_hosted: JSON.parse(
          venueEventList.types_of_events_hosted
        ),
        client_testimonials_and_reviews:
          venueEventList.client_testimonials_and_reviews,
        number_of_events_hosted: venueEventList.number_of_events_hosted,
        notable_events_or_clients: venueEventList.notable_events_or_clients,
        client_references: venueEventList.client_references,
        event_success_stories: venueEventList.event_success_stories,
        event_failures_lessons_learned:
          venueEventList.event_failures_lessons_learned,
        average_event_rating: venueEventList.average_event_rating,
        event_portfolio: venueEventList.event_portfolio,
        media_mentions: venueEventList.media_mentions,
        event_frequency: venueEventList.event_frequency,
      };

      setFormData6(eventData);
      localStorage.removeItem("venueEvent");
    }

    if (venueLegalList) {
      setFormData7(venueLegalList);
      localStorage.removeItem("venueLegal"); // Remove the data from local storage
    }

    if (venueVendorList) {
      setFormData8(venueVendorList);
      localStorage.removeItem("venueVendor"); // Remove the data from local storage
    }
  }, [
    venueDataList,
    formData1,
    venueSocialList,
    venueFacilityList,
    venueServiceList,
    venueBookingList,
    venueEventList,
    venueLegalList,
    venueVendorList,
  ]);

  const steps = [
    "Basic Information",
    "Social Media",
    "Venue Facilities",
    "Venue Services",
    "Venue Booking Information",
    "Past Event Information",
    "Legal and Compliance Information",
    "Preferred Vendors",
    "Confirm",
  ];

  const handleVenueIdUpdate = (newVenueId) => {
    setVenueId(newVenueId);
  };

  const handleNext = () => {
    console.log("formData1:", formData1);
    console.log("formData2:", formData2);
    console.log("formData3:", formData3);
    console.log("formData4:", formData4);
    console.log("formData5:", formData5);
    console.log("formData6:", formData6);
    console.log("formData6:", formData7);
    console.log("formData6:", formData8);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    handleSave7();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTypeChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = venueTypes.find(venueType => venueType.venue_type_id === selectedTypeId);
    setFormData1((prevData) => ({
      ...prevData,
      venue_type: selectedTypeId,
    }));
    setVenueTypeName(selectedType.venue_type)
  };

  const handleCatChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = CateringVendors.find(CateringVendor => CateringVendor.vendor_id === selectedTypeId);
    setFormData8((prevData) => ({
      ...prevData,
      preferred_catering_vendor: selectedTypeId,
    }));
    setCateringVendor(selectedType.name);
  };

  const handlePhotoChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = PhotographyVendors.find(PhotographyVendor => PhotographyVendor.vendor_id === selectedTypeId);
    setFormData8((prevData) => ({
      ...prevData,
      preferred_photography_vendor: selectedTypeId,
    }));
    setPhotographyVendor(selectedType.name);
  };

  const handleBandChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = BandVendors.find(BandVendor => BandVendor.vendor_id === selectedTypeId);
    setFormData8((prevData) => ({
      ...prevData,
      preferred_band_vendor: selectedTypeId,
    }));
    setBandVendor(selectedType.name);
  };

  const handleFlowerChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = FlowersVendors.find(FlowersVendor => FlowersVendor.vendor_id === selectedTypeId);
    setFormData8((prevData) => ({
      ...prevData,
      preferred_flowers_vendor: selectedTypeId,
    }));
    setFlowersVendor(selectedType.name);
  };

  const handleTransChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = TransportationVendors.find(TransportationVendor => TransportationVendor.vendor_id === selectedTypeId);
    setFormData8((prevData) => ({
      ...prevData,
      preferred_transportation_vendor: selectedType,
    }));
    selectedTransportationVendor(selectedType.name);
  };

  const handleLightChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = LightingAndDecorsVendors.find(LightingAndDecorsVendor => LightingAndDecorsVendor.vendor_id === selectedTypeId);
    setFormData8((prevData) => ({
      ...prevData,
      preferred_lighting_and_decor_vendor: selectedTypeId,
    }));
    setLightingAndDecorsVendor(selectedType.name);
  };

  const handleWedChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = WeddingCakeVendors.find(WeddingCakeVendor => WeddingCakeVendor.vendor_id === selectedTypeId);
    setFormData8((prevData) => ({
      ...prevData,
      preferred_wedding_cake_vendor: selectedTypeId,
    }));
    setWeddingCakeVendor(selectedType.name);
  };

  const handleDjChange = (e) => {
    const selectedTypeId = e.target.value;
    const selectedType = DJVendors.find(DJVendor => DJVendor.vendor_id === selectedTypeId);
    setFormData8((prevData) => ({
      ...prevData,
      preferred_dj_vendor: selectedType,
    }));
    setDJVendor(selectedType.name);
  };

  const handleChange = (e) => {
    const selectedChange = e.target.value;
    setFormData1((prevData) => ({
      ...prevData,
      ownership_type: selectedChange,
    }));
  };

  const handleFireSChange = (e) => {
    const selectedChange = e.target.value;
    setFormData3((prevData) => ({
      ...prevData,
      fire_safety_measures: {
        ...prevData.fire_safety_measures,
        sprinklerSystem: selectedChange,
      },
    }));
  };

  const handleFireFChange = (e) => {
    const selectedChange = e.target.value;
    setFormData3((prevData) => ({
      ...prevData,
      fire_safety_measures: {
        ...prevData.fire_safety_measures,
        fireExitSigns: selectedChange,
      },
    }));
  };

  const handleFireFEChange = (e) => {
    const selectedChange = e.target.value;
    setFormData3((prevData) => ({
      ...prevData,
      fire_safety_measures: {
        ...prevData.fire_safety_measures,
        fireExtinguishers: selectedChange,
      },
    }));
  };

  const handleFireOChange = (e) => {
    const selectedChange = e.target.value;
    setFormData3((prevData) => ({
      ...prevData,
      fire_safety_measures: {
        ...prevData.fire_safety_measures,
        other: selectedChange,
      },
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(e.target.files[0]);
    const fileName = selectedFile.name;
    console.log(fileName);
    setFormData1((prevData) => ({
      ...prevData,
      media: fileName,
    }));
    
  };

  const handleSecurityChange = (e) => {
    const selectedChange = e.target.value;
    setFormData3((prevData) => ({
      ...prevData,
      security_features: {
        ...prevData.security_features,
        CCTV: selectedChange,
      },
    }));
  };

  const handleSecuritySChange = (e) => {
    const selectedChange = e.target.value;
    setFormData3((prevData) => ({
      ...prevData,
      security_features: {
        ...prevData.security_features,
        securityPersonnel: selectedChange,
      },
    }));
  };

  const handleSecurityAChange = (e) => {
    const selectedChange = e.target.value;
    setFormData3((prevData) => ({
      ...prevData,
      security_features: {
        ...prevData.security_features,
        alarmSystem: selectedChange,
      },
    }));
  };

  const handleSecurityOChange = (e) => {
    const selectedChange = e.target.value;
    setFormData3((prevData) => ({
      ...prevData,
      security_features: {
        ...prevData.security_features,
        other: selectedChange,
      },
    }));
  };

  const handleICuisineChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_cuisine: {
        ...prevData.types_of_cuisine,
        Indian: selectedChange,
      },
    }));
  };

  const handleCuisineChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_cuisine: {
        ...prevData.types_of_cuisine,
        Chinese: selectedChange,
      },
    }));
  };

  const handleItCuisineChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_cuisine: {
        ...prevData.types_of_cuisine,
        Italian: selectedChange,
      },
    }));
  };

  const handleCCuisineChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_cuisine: {
        ...prevData.types_of_cuisine,
        Continental: selectedChange,
      },
    }));
  };

  const handleVCuisineChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_cuisine: {
        ...prevData.types_of_cuisine,
        Vegan: selectedChange,
      },
    }));
  };

  const handleGCuisineChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_cuisine: {
        ...prevData.types_of_cuisine,
        GlutenFree: selectedChange,
      },
    }));
  };

  const handleHCuisineChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_cuisine: {
        ...prevData.types_of_cuisine,
        Halal: selectedChange,
      },
    }));
  };

  const handleKCuisineChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_cuisine: {
        ...prevData.types_of_cuisine,
        Kosher: selectedChange,
      },
    }));
  };

  const handleOCuisineChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_cuisine: {
        ...prevData.types_of_cuisine,
        Other: selectedChange,
      },
    }));
  };

  const handleRoomChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_rooms: {
        ...prevData.types_of_rooms,
        Single: selectedChange,
      },
    }));
  };

  const handleRoomDChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_rooms: {
        ...prevData.types_of_rooms,
        Double: selectedChange,
      },
    }));
  };

  const handleRoomSChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_rooms: {
        ...prevData.types_of_rooms,
        Suite: selectedChange,
      },
    }));
  };

  const handleRoomAChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_rooms: {
        ...prevData.types_of_rooms,
        Accessible: selectedChange,
      },
    }));
  };

  const handleRoomOChange = (e) => {
    const selectedChange = e.target.value;
    setFormData4((prevData) => ({
      ...prevData,
      types_of_rooms: {
        ...prevData.types_of_rooms,
        Other: selectedChange,
      },
    }));
  };

  const handleDiscountChange = (e) => {
    const selectedChange = e.target.value;
    setFormData5((prevData) => ({
      ...prevData,
      types_of_discounts: {
        ...prevData.types_of_discounts,
        EarlyBird: selectedChange,
      },
    }));
  };

  const handleDiscountBChange = (e) => {
    const selectedChange = e.target.value;
    setFormData5((prevData) => ({
      ...prevData,
      types_of_discounts: {
        ...prevData.types_of_discounts,
        BulkBooking: selectedChange,
      },
    }));
  };

  const handleDiscountFChange = (e) => {
    const selectedChange = e.target.value;
    setFormData5((prevData) => ({
      ...prevData,
      types_of_discounts: {
        ...prevData.types_of_discounts,
        OffSeason: selectedChange,
      },
    }));
  };

  const handleDiscountOChange = (e) => {
    const selectedChange = e.target.value;
    setFormData5((prevData) => ({
      ...prevData,
      types_of_discounts: {
        ...prevData.types_of_discounts,
        Other: selectedChange,
      },
    }));
  };

  const handleEventChange = (e) => {
    const selectedChange = e.target.value;
    setFormData6((prevData) => ({
      ...prevData,
      types_of_events_hosted: {
        ...prevData.types_of_events_hosted,
        CorporateEvents: selectedChange,
      },
    }));
  };

  const handleEventWedChange = (e) => {
    const selectedChange = e.target.value;
    setFormData6((prevData) => ({
      ...prevData,
      types_of_events_hosted: {
        ...prevData.types_of_events_hosted,
        Weddings: selectedChange,
      },
    }));
  };

  const handleEventConChange = (e) => {
    const selectedChange = e.target.value;
    setFormData6((prevData) => ({
      ...prevData,
      types_of_events_hosted: {
        ...prevData.types_of_events_hosted,
        Concerts: selectedChange,
      },
    }));
  };

  const handleEventEChange = (e) => {
    const selectedChange = e.target.value;
    setFormData6((prevData) => ({
      ...prevData,
      types_of_events_hosted: {
        ...prevData.types_of_events_hosted,
        Exhibitions: selectedChange,
      },
    }));
  };

  const handleEventPPChange = (e) => {
    const selectedChange = e.target.value;
    setFormData6((prevData) => ({
      ...prevData,
      types_of_events_hosted: {
        ...prevData.types_of_events_hosted,
        PrivateParties: selectedChange,
      },
    }));
  };

  const handleEventFChange = (e) => {
    const selectedChange = e.target.value;
    setFormData6((prevData) => ({
      ...prevData,
      types_of_events_hosted: {
        ...prevData.types_of_events_hosted,
        Festivals: selectedChange,
      },
    }));
  };

  const handleEventWChange = (e) => {
    const selectedChange = e.target.value;
    setFormData6((prevData) => ({
      ...prevData,
      types_of_events_hosted: {
        ...prevData.types_of_events_hosted,
        Workshops: selectedChange,
      },
    }));
  };

  const handleEventSChange = (e) => {
    const selectedChange = e.target.value;
    setFormData6((prevData) => ({
      ...prevData,
      types_of_events_hosted: {
        ...prevData.types_of_events_hosted,
        Seminars: selectedChange,
      },
    }));
  };

  const handleEventOChange = (e) => {
    const selectedChange = e.target.value;
    setFormData6((prevData) => ({
      ...prevData,
      types_of_events_hosted: {
        ...prevData.types_of_events_hosted,
        Other: selectedChange,
      },
    }));
  };

  const updateFormData1 = (stepData) => {
    // Update the formData with the current step's data
    setFormData1((prevData) => ({
      ...prevData,
      ...stepData, // Merge the current step's data into formData
    }));
  };

  const updateFormData2 = (stepData) => {
    // Update the formData with the current step's data
    setFormData2((prevData) => ({
      ...prevData,
      ...stepData, // Merge the current step's data into formData
    }));
  };

  const updateFormData3 = (stepData) => {
    // Update the formData with the current step's data
    setFormData3((prevData) => ({
      ...prevData,
      ...stepData, // Merge the current step's data into formData
    }));
  };

  const updateFormData4 = (stepData) => {
    // Update the formData with the current step's data
    setFormData4((prevData) => ({
      ...prevData,
      ...stepData, // Merge the current step's data into formData
    }));
  };

  const updateFormData5 = (stepData) => {
    // Update the formData with the current step's data
    setFormData5((prevData) => ({
      ...prevData,
      ...stepData, // Merge the current step's data into formData
    }));
  };

  const updateFormData6 = (stepData) => {
    // Update the formData with the current step's data
    setFormData6((prevData) => ({
      ...prevData,
      ...stepData, // Merge the current step's data into formData
    }));
  };

  const updateFormData7 = (stepData) => {
    // Update the formData with the current step's data
    setFormData7((prevData) => ({
      ...prevData,
      ...stepData, // Merge the current step's data into formData
    }));
  };

  const updateFormData8 = (stepData) => {
    // Update the formData with the current step's data
    setFormData8((prevData) => ({
      ...prevData,
      ...stepData, // Merge the current step's data into formData
    }));
  };

  const handleSave1 = async () => {
    try {
      if (formData2.venue_add_info_id) {
        const response = await updateVenueSocialData(
          formData2.venue_add_info_id,
          formData2
        );

        if (response.ok) {
          console.log(response.data);
          console.log("Venue updated successfully");
          navigate("/venues");
          
          alert("Venue Updated successfully!");
        }
      } else {
        const response = await venueSocial(formData2);
        if (response) {
          console.log("Venue created successfully");
          navigate("/venues");
          alert("Venue Added successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      }
    } catch (error) {
      console.error("Error creating venue:", error);
    }
  };

  const handleSave2 = async () => {
    try {
      if (formData3.venue_facilities_id && formData2.venue_add_info_id) {
        const response = await updateVenueSocialData(
          formData2.venue_add_info_id,
          formData2
          
        );
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response1 = await updateVenueFacilityData(
          formData3.venue_facilities_id,
          formData3
        );

        if (response.ok && response1.ok) {
          console.log("Venue updated successfully");
          navigate("/venues");
          alert("Venue Updated successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      } else {
        const response = await venueSocial(formData2);
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response2 = await createVenueFacilities(formData3);
        if (response2) {
          console.log("Venue created successfully");
          navigate("/venues");
          alert("Venue Added successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      }
    } catch (error) {
      console.error("Error creating venue:", error);
    }
  };

  const handleSave3 = async () => {
    try {
      if (
        formData4.venue_services_id &&
        formData3.venue_facilities_id &&
        formData2.venue_add_info_id
      ) {
        const response = await updateVenueSocialData(
          formData2.venue_add_info_id,
          formData2
        );
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response1 = await updateVenueFacilityData(
          formData3.venue_facilities_id,
          formData3
        );
        formData4.types_of_cuisine = JSON.stringify(formData4.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData4.types_of_rooms);
        const response2 = await updateVenueServiceData(
          formData3.venue_services_id,
          formData4
        );

        if (response.ok && response1.ok && response2.ok) {
          console.log("Venue updated successfully");
          navigate("/venues");
          alert("Venue Updated successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      } else {
        const response = await venueSocial(formData2);
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response2 = await createVenueFacilities(formData3);
        formData4.types_of_cuisine = JSON.stringify(formData4.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData4.types_of_rooms);
        const response3 = await createVenueServices(formData4);
        if (response3) {
          console.log("Venue created successfully");
          navigate("/venues");
          alert("Venue Added successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      }
    } catch (error) {
      console.error("Error creating venue:", error);
    }
  };

  const handleSave4 = async () => {
    try {
      if (
        formData5.venue_booking_id &&
        formData4.venue_services_id &&
        formData3.venue_facilities_id &&
        formData2.venue_add_info_id
      ) {
        const response = await updateVenueSocialData(
          formData2.venue_add_info_id,
          formData2
        );
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response1 = await updateVenueFacilityData(
          formData3.venue_facilities_id,
          formData3
        );
        formData4.types_of_cuisine = JSON.stringify(formData4.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData4.types_of_rooms);
        const response2 = await updateVenueServiceData(
          formData4.venue_services_id,
          formData4
        );
        formData5.types_of_discounts = JSON.stringify(
          formData5.types_of_discounts
        );
        const response3 = await updateVenueBookingData(
          formData5.venue_booking_id,
          formData5
        );
        if (response.ok && response1.ok && response2.ok && response3.ok) {
          console.log("Venue updated successfully");
          navigate("/venues");
          alert("Venue Updated successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      } else {
        const response = await venueSocial(formData2);
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response2 = await createVenueFacilities(formData3);
        formData4.types_of_cuisine = JSON.stringify(formData3.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData3.types_of_rooms);
        const response3 = await createVenueServices(formData4);
        formData5.types_of_discounts = JSON.stringify(
          formData5.types_of_discounts
        );
        const response4 = await createVenueBookings(formData5);
        if (response4) {
          console.log("Venue created successfully");
          navigate("/venues");
          alert("Venue Added successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      }
    } catch (error) {
      console.error("Error creating venue:", error);
    }
  };

  const handleSave5 = async () => {
    try {
      if (
        formData6.venue_events_id &&
        formData5.venue_booking_id &&
        formData4.venue_services_id &&
        formData3.venue_facilities_id &&
        formData2.venue_add_info_id
      ) {
        const response = await updateVenueSocialData(
          formData2.venue_add_info_id,
          formData2
        );
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response1 = await updateVenueFacilityData(
          formData3.venue_facilities_id,
          formData3
        );
        formData4.types_of_cuisine = JSON.stringify(formData4.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData4.types_of_rooms);
        const response2 = await updateVenueServiceData(
          formData4.venue_services_id,
          formData4
        );
        formData5.types_of_discounts = JSON.stringify(
          formData5.types_of_discounts
        );
        const response3 = await updateVenueBookingData(
          formData5.venue_booking_id,
          formData5
        );
        formData6.types_of_events_hosted = JSON.stringify(
          formData6.types_of_events_hosted
        );
        const response4 = await updateVenueEventData(
          formData6.venue_events_id,
          formData6
        );
        if (
          response.ok &&
          response1.ok &&
          response2.ok &&
          response3.ok &&
          response4.ok
        ) {
          console.log("Venue updated successfully");
          navigate("/venues");
          alert("Venue Updated successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      } else {
        const response = await venueSocial(formData2);
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response2 = await createVenueFacilities(formData3);
        formData4.types_of_cuisine = JSON.stringify(formData4.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData4.types_of_rooms);
        const response3 = await createVenueServices(formData4);
        formData5.types_of_discounts = JSON.stringify(
          formData5.types_of_discounts
        );
        const response4 = await createVenueBookings(formData5);
        formData6.types_of_events_hosted = JSON.stringify(
          formData6.types_of_events_hosted
        );
        const response5 = await createVenueEvents(formData6);
        if (response5) {
          console.log("Venue created successfully");
          navigate("/venues");
          alert("Venue Added successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      }
    } catch (error) {
      console.error("Error creating venue:", error);
    }
  };

  const handleSave6 = async () => {
    try {
      if (
        formData7.venue_legal_compliance_id &&
        formData6.venue_events_id &&
        formData5.venue_booking_id &&
        formData4.venue_services_id &&
        formData3.venue_facilities_id &&
        formData2.venue_add_info_id
      ) {
        const response = await updateVenueSocialData(
          formData2.venue_add_info_id,
          formData2
        );
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response1 = await updateVenueFacilityData(
          formData3.venue_facilities_id,
          formData3
        );
        formData4.types_of_cuisine = JSON.stringify(formData4.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData4.types_of_rooms);
        const response2 = await updateVenueServiceData(
          formData4.venue_services_id,
          formData4
        );
        formData5.types_of_discounts = JSON.stringify(
          formData5.types_of_discounts
        );
        const response3 = await updateVenueBookingData(
          formData5.venue_booking_id,
          formData5
        );
        formData6.types_of_events_hosted = JSON.stringify(
          formData6.types_of_events_hosted
        );
        const response4 = await updateVenueEventData(
          formData6.venue_events_id,
          formData6
        );
        const response5 = await updateVenueLegalData(
          formData7.venue_legal_compliance_id,
          formData7
        );
        if (
          response.ok &&
          response1.ok &&
          response2.ok &&
          response3.ok &&
          response4.ok &&
          response5.ok
        ) {
          console.log("Venue updated successfully");
          navigate("/venues");
          alert("Venue Updated successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      } else {
        const response = await venueSocial(formData2);
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response2 = await createVenueFacilities(formData3);
        formData4.types_of_cuisine = JSON.stringify(formData4.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData4.types_of_rooms);
        const response3 = await createVenueServices(formData4);
        formData5.types_of_discounts = JSON.stringify(
          formData5.types_of_discounts
        );
        const response4 = await createVenueBookings(formData5);
        formData6.types_of_events_hosted = JSON.stringify(
          formData6.types_of_events_hosted
        );
        const response5 = await createVenueEvents(formData6);
        const response6 = await createVenueLegalCompliances(formData7);
        if (response6) {
          console.log("Venue created successfully");
          navigate("/venues");
          alert("Venue Added successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      }
    } catch (error) {
      console.error("Error creating venue:", error);
    }
  };

  const handleSave7 = async () => {
    try {
      if (
        formData8.venue_preferred_vendors_id &&
        formData7.venue_legal_compliance_id &&
        formData6.venue_events_id &&
        formData5.venue_booking_id &&
        formData4.venue_services_id &&
        formData3.venue_facilities_id &&
        formData2.venue_add_info_id
      ) {
        const response = await updateVenueSocialData(
          formData2.venue_add_info_id,
          formData2
        );
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response1 = await updateVenueFacilityData(
          formData3.venue_facilities_id,
          formData3
        );
        formData4.types_of_cuisine = JSON.stringify(formData4.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData4.types_of_rooms);
        const response2 = await updateVenueServiceData(
          formData4.venue_services_id,
          formData4
        );
        formData5.types_of_discounts = JSON.stringify(
          formData5.types_of_discounts
        );
        const response3 = await updateVenueBookingData(
          formData5.venue_booking_id,
          formData5
        );
        formData6.types_of_events_hosted = JSON.stringify(
          formData6.types_of_events_hosted
        );
        const response4 = await updateVenueEventData(
          formData6.venue_events_id,
          formData6
        );
        const response5 = await updateVenueLegalData(
          formData7.venue_legal_compliance_id,
          formData7
        );
        const response6 = await updateVenueVendorData(
          formData8.venue_preferred_vendors_id,
          formData8
        );
        if (
          response.ok &&
          response1.ok &&
          response2.ok &&
          response3.ok &&
          response4.ok &&
          response5.ok &&
          response6.ok
        ) {
          console.log("Venue updated successfully");
          navigate("/venues");
          alert("Venue Updated successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      } else {
        const response = await venueSocial(formData2);
        formData3.security_features = JSON.stringify(
          formData3.security_features
        );
        formData3.fire_safety_measures = JSON.stringify(
          formData3.fire_safety_measures
        );
        const response2 = await createVenueFacilities(formData3);
        formData4.types_of_cuisine = JSON.stringify(formData4.types_of_cuisine);
        formData4.types_of_rooms = JSON.stringify(formData4.types_of_rooms);
        const response3 = await createVenueServices(formData4);
        formData5.types_of_discounts = JSON.stringify(
          formData5.types_of_discounts
        );
        const response4 = await createVenueBookings(formData5);
        formData6.types_of_events_hosted = JSON.stringify(
          formData6.types_of_events_hosted
        );
        const response5 = await createVenueEvents(formData6);
        const response6 = await createVenueLegalCompliances(formData7);
        const response7 = await createVenuePreferredVendors(formData8);
        if (response7) {
          console.log("Venue created successfully");
          navigate("/venues");
          alert("Venue Added successfully!");
        } else {
          console.error("Full Venue creation failed");
        }
      }
    } catch (error) {
      console.error("Error creating venue:", error);
    }
  };
  const fieldLabels1 = {
    name: "Venue Name",
    address: "Address",
    email: "Email",
    phone_number: "Phone Number",
    venue_type: "Venue Type",
    description: "Description",
    year_of_establishment: "Year of Establishment",
    ownership_type: "Ownership Type",
    media: "Media",
  };

  const fieldLabels2 = {
    owner_manager_name: "Owner/Manager Name",
    owner_manager_email: "Owner/Manager Email",
    owner_manager_phone: "Owner/Manager Phone",
    facebook_url: "Facebook URL",
    twitter_url: "Twitter URL",
    instagram_url: "Instagram URL",
    linkedin_url: "LinkedIn URL",
    youtube_url: "YouTube URL",
  };

  const fieldLabels3 = {
    total_area: "Total Area",
    indoor_area: "Indoor Area",
    outdoor_area: "Outdoor Area",
    seating_capacity: "Seating Capacity",
    standing_capacity: "Standing Capacity",
    number_of_rooms_spaces: "Number of Rooms/Spaces",
    stage_availability: "Stage Availability",
    podium_availability: "Podium Availability",
    technical_equipment: "Technical Equipment",
    parking_facilities: "Parking Facilities",
    parking_capacity: "Parking Capacity",
    valet_parking_availability: "Valet Parking Availability",
    proximity_to_public_transport: "Proximity to Public Transport",
    proximity_to_major_roads: "Proximity to Major Roads",
    proximity_to_airport: "Proximity to Airport",
    surrounding_environment: "Surrounding Environment",
    noise_restrictions: "Noise Restrictions",
    ceiling_height: "Ceiling Height",
    load_in_load_out_facilities: "Load-in/Load-out Facilities",
    green_room_availability: "Green Room Availability",
    dressing_room_availability: "Dressing Room Availability",
    kitchen_facilities: "Kitchen Facilities",
    restroom_facilities: "Restroom Facilities",
    power_supply_backup: "Power Supply Backup",
    air_conditioning_heating: "Air Conditioning/Heating",
    natural_light_availability: "Natural Light Availability",
    outdoor_space_description: "Outdoor Space Description",
    scenic_view: "Scenic View",
    smoking_area: "Smoking Area",
    pet_friendly: "Pet Friendly",
    child_friendly: "Child Friendly",
    noise_level: "Noise Level",
    nearby_parking_facilities: "Nearby Parking Facilities",
    security_features: {
      CCTV: "CCTV",
      securityPersonnel: "Security Personnel",
      alarmSystem: "Alarm System",
      other: "Other",
      otherText: "Other Text",
    },
    fire_safety_measures: {
      sprinklerSystem: "Sprinkler System",
      fireExitSigns: "Fire Exit Signs",
      fireExtinguishers: "Fire Extinguishers",
      other: "Other",
      otherText: "Other Text",
    },
  };

  const fieldLabels4 = {
    catering_services: "Catering Services",
    types_of_cuisine: {
      Indian: "Indian Cuisine",
      Chinese: "Chinese Cuisine",
      Italian: "Italian Cuisine",
      Continental: "Continental Cuisine",
      Vegan: "Vegan Cuisine",
      GlutenFree: "Gluten-Free Cuisine",
      Halal: "Halal Cuisine",
      Kosher: "Kosher Cuisine",
      Other: "Other Cuisine",
      OtherText: "Other Cuisine Description",
    },
    bar_services: "Bar Services",
    alcohol_licensing: "Alcohol Licensing",
    decor_services: "Decor Services",
    event_planning_services: "Event Planning Services",
    audio_visual_services: "Audio Visual Services",
    internet_wifi_availability: "Internet/Wi-Fi Availability",
    accommodation_availability: "Accommodation Availability",
    number_of_rooms_for_accommodation: "Number of Rooms for Accommodation",
    types_of_rooms: {
      Single: "Single Rooms",
      Double: "Double Rooms",
      Suite: "Suite Rooms",
      Accessible: "Accessible Rooms",
      Other: "Other Room Types",
      OtherText: "Other Room Type Description",
    },
    furniture_availability: "Furniture Availability",
    types_of_furniture_available: "Types of Furniture Available",
    decor_restrictions: "Decor Restrictions",
    cleaning_services: "Cleaning Services",
    on_site_staff_availability: "On-Site Staff Availability",
    event_coordination_services: "Event Coordination Services",
    equipment_rental_options: "Equipment Rental Options",
    storage_facilities: "Storage Facilities",
    signage_banner_allowed: "Signage/Banner Allowed",
    special_lighting: "Special Lighting",
    dance_floor: "Dance Floor",
    outdoor_heating: "Outdoor Heating",
    tenting_facilities: "Tenting Facilities",
    coat_check: "Coat Check",
    bridal_suite: "Bridal Suite",
    child_care_facilities: "Child Care Facilities",
    pet_care_facilities: "Pet Care Facilities",
  };

  const fieldLabels5 = {
    availability: "Availability",
    minimum_notice_period: "Minimum Notice Period",
    cancellation_policy: "Cancellation Policy",
    pricing: "Pricing",
    payment_methods_accepted: "Payment Methods Accepted",
    insurance_requirements: "Insurance Requirements",
    booking_channels: "Booking Channels",
    deposit_requirement: "Deposit Requirement",
    deposit_amount: "Deposit Amount",
    deposit_refund_policy: "Deposit Refund Policy",
    full_payment_due_date: "Full Payment Due Date",
    discounts_available: "Discounts Available",
    types_of_discounts: {
      EarlyBird: "Early Bird Discount",
      BulkBooking: "Bulk Booking Discount",
      OffSeason: "Off-Season Discount",
      Other: "Other Discount",
      OtherText: "Other Discount Description",
    },
    minimum_booking_duration: "Minimum Booking Duration",
    maximum_booking_duration: "Maximum Booking Duration",
    overtime_policy: "Overtime Policy",
    setup_takedown_time_included: "Setup/Takedown Time Included",
    additional_costs: "Additional Costs",
    contract_requirement: "Contract Requirement",
    contract_terms: "Contract Terms",
    cancellation_by_venue_policy: "Cancellation by Venue Policy",
    force_majeure_policy: "Force Majeure Policy",
  };

  const fieldLabels6 = {
    types_of_events_hosted: {
      CorporateEvents: "Corporate Events",
      Concerts: "Concerts",
      Exhibitions: "Exhibitions",
      PrivateParties: "Private Parties",
      Festivals: "Festivals",
      Workshops: "Workshops",
      Seminars: "Seminars",
      Other: "Other Event Types",
      OtherText: "Other Event Types Description",
    },
    client_testimonials_and_reviews: "Client Testimonials and Reviews",
    number_of_events_hosted: "Number of Events Hosted",
    notable_events_or_clients: "Notable Events or Clients",
    client_references: "Client References",
    event_success_stories: "Event Success Stories",
    event_failures_lessons_learned: "Event Failures and Lessons Learned",
    average_event_rating: "Average Event Rating",
    event_portfolio: "Event Portfolio",
    media_mentions: "Media Mentions",
    event_frequency: "Event Frequency",
  };

  const fieldLabels7 = {
    licenses_and_permits: "Licenses and Permits",
    safety_measures: "Safety Measures",
    business_registration_details: "Business Registration Details",
    tax_compliance_status: "Tax Compliance Status",
    health_and_safety_certifications: "Health and Safety Certifications",
    fire_safety_compliance: "Fire Safety Compliance",
    food_safety_certifications: "Food Safety Certifications",
    alcohol_licensing_details: "Alcohol Licensing Details",
    music_licensing_details: "Music Licensing Details",
    insurance_coverage_details: "Insurance Coverage Details",
    accessibility_compliance: "Accessibility Compliance",
    privacy_policy: "Privacy Policy",
    terms_and_conditions: "Terms and Conditions",
    dispute_resolution_mechanisms: "Dispute Resolution Mechanisms",
    sustainability_practices: "Sustainability Practices",
    noise_pollution_controls: "Noise Pollution Controls",
  };

  const fieldLabels8 = {
    preferred_catering_vendor: "Preferred Catering Vendor",
    preferred_photography_vendor: "Preferred Photography Vendor",
    preferred_band_vendor: "Preferred Band Vendor",
    preferred_flowers_vendor: "Preferred Flowers Vendor",
    preferred_transportation_vendor: "Preferred Transportation Vendor",
    preferred_lighting_and_decor_vendor: "Preferred Lighting and Decor Vendor",
    preferred_wedding_cake_vendor: "Preferred Wedding Cake Vendor",
    preferred_dj_vendor: "Preferred DJ Vendor",
  };

  

  return (
    <div style={{ marginTop: "20px" }}>
   

<Stepper activeStep={activeStep} alternativeLabel>
  {console.log("activeStep", activeStep)}
  {steps.map((label, index) => {
    if (index === activeStep || index === activeStep - 1 || index === activeStep + 1) {
      const isPreviousStep = index === activeStep - 1;
      return (
        <Step key={label}>
          <StepLabel
            StepIconComponent={(props) => (
              <div
                className={`${
                  isPreviousStep ? 'completed' : index === activeStep ? 'active' : ''
                } step-icon`}
              >
                {isPreviousStep ? <CheckCircleIcon style={{ color: '#2196f3' }}/> : index + 1}
              </div>
            )}
          >
            {label}
          </StepLabel>
        </Step>
      );
    }
    return null;
  })}
</Stepper>



      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h5">Data Successfully Submitted!</Typography>
          </div>
        ) : (
          <div>
            {activeStep === 0 && (
              <Step1
                handleNext={handleNext}
                venueId={venueId}
                onVenueIdUpdate={handleVenueIdUpdate}
                formData1={formData1}
                setFormData1={setFormData1}
                updateFormData1={updateFormData1}
                handleTypeChange={handleTypeChange}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                setVenueId={setVenueId}
                setFormData2={setFormData2}
                setFormData3={setFormData3}
                setFormData4={setFormData4}
                setFormData5={setFormData5}
                setFormData6={setFormData6}
                setFormData7={setFormData7}
                setFormData8={setFormData8}
                file={file}
              />
            )}
            {activeStep === 1 && (
              <Step2
                handleNext={handleNext}
                handleBack={handleBack}
                handleSave={handleSave1}
                venueId={venueId}
                formData2={formData2}
                setFormData2={setFormData2}
                updateFormData2={updateFormData2}
              />
            )}
            {activeStep === 2 && (
              <Step3
                handleNext={handleNext}
                handleBack={handleBack}
                handleSave={handleSave2}
                venueId={venueId}
                formData3={formData3}
                setFormData3={setFormData3}
                updateFormData3={updateFormData3}
                handleFireSChange={handleFireSChange}
                handleFireFChange={handleFireFChange}
                handleFireFEChange={handleFireFEChange}
                handleFireOChange={handleFireOChange}
                handleSecurityChange={handleSecurityChange}
                handleSecuritySChange={handleSecuritySChange}
                handleSecurityAChange={handleSecurityAChange}
                handleSecurityOChange={handleSecurityOChange}
              />
            )}
            {activeStep === 3 && (
              <Step4
                handleNext={handleNext}
                handleBack={handleBack}
                handleSave={handleSave3}
                venueId={venueId}
                formData4={formData4}
                setFormData4={setFormData4}
                updateFormData4={updateFormData4}
                handleICuisineChange={handleICuisineChange}
                handleCuisineChange={handleCuisineChange}
                handleItCuisineChange={handleItCuisineChange}
                handleCCuisineChange={handleCCuisineChange}
                handleVCuisineChange={handleVCuisineChange}
                handleGCuisineChange={handleGCuisineChange}
                handleHCuisineChange={handleHCuisineChange}
                handleKCuisineChange={handleKCuisineChange}
                handleOCuisineChange={handleOCuisineChange}
                handleRoomChange={handleRoomChange}
                handleRoomDChange={handleRoomDChange}
                handleRoomSChange={handleRoomSChange}
                handleRoomAChange={handleRoomAChange}
                handleRoomOChange={handleRoomOChange}
              />
            )}
            {activeStep === 4 && (
              <Step5
                handleNext={handleNext}
                handleBack={handleBack}
                handleSave={handleSave4}
                venueId={venueId}
                formData5={formData5}
                setFormData5={setFormData5}
                updateFormData5={updateFormData5}
                handleDiscountChange={handleDiscountChange}
                handleDiscountBChange={handleDiscountBChange}
                handleDiscountFChange={handleDiscountFChange}
                handleDiscountOChange={handleDiscountOChange}
              />
            )}
            {activeStep === 5 && (
              <Step6
                handleNext={handleNext}
                handleBack={handleBack}
                handleSave={handleSave5}
                venueId={venueId}
                formData6={formData6}
                setFormData6={setFormData6}
                updateFormData6={updateFormData6}
                handleEventChange={handleEventChange}
                handleEventWedChange={handleEventWedChange}
                handleEventConChange={handleEventConChange}
                handleEventEChange={handleEventEChange}
                handleEventPPChange={handleEventPPChange}
                handleEventFChange={handleEventFChange}
                handleEventWChange={handleEventWChange}
                handleEventSChange={handleEventSChange}
                handleEventOChange={handleEventOChange}
              />
            )}
            {activeStep === 6 && (
              <Step7
                handleNext={handleNext}
                handleBack={handleBack}
                handleSave={handleSave6}
                venueId={venueId}
                formData7={formData7}
                setFormData7={setFormData7}
                updateFormData7={updateFormData7}
              />
            )}
            {activeStep === 7 && (
              <Step8
                handleNext={handleNext}
                handleBack={handleBack}
                handleSave={handleSave7}
                venueId={venueId}
                formData8={formData8}
                setFormData8={setFormData8}
                updateFormData8={updateFormData8}
                handleCatChange={handleCatChange}
                handlePhotoChange={handlePhotoChange}
                handleBandChange={handleBandChange}
                handleFlowerChange={handleFlowerChange}
                handleTransChange={handleTransChange}
                handleLightChange={handleLightChange}
                handleWedChange={handleWedChange}
                handleDjChange={handleDjChange}
              />
            )}
            {activeStep !== 0 &&
              activeStep !== 1 &&
              activeStep !== 2 &&
              activeStep !== 3 &&
              activeStep !== 4 &&
              activeStep !== 5 &&
              activeStep !== 6 &&
              activeStep !== 7 && (
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
                      {Object.keys(formData1).map((field) => {
                        if (fieldLabels1[field]) {
                          let secondaryText = "";
                          if (field === 'venue_type' && selectedVenueTypeName) {
                            secondaryText = selectedVenueTypeName;
                          }
                          else{
                            secondaryText = formData1[field];
                          }
                          return (
                            <ListItem key={field}>
                              <ListItemText
                                primary={fieldLabels1[field]}
                                secondary={secondaryText}
                              />
                            </ListItem>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </List>
                    

                    <List>
                      {Object.keys(formData2).map((field) => {
                        if (fieldLabels2[field]) {
                          // Check if there's a corresponding label in fieldLabel
                          return (
                            <ListItem key={field}>
                              <ListItemText
                                primary={fieldLabels2[field]}
                                secondary={formData2[field]}
                              />
                            </ListItem>
                          );
                        } else {
                          // Skip rendering if there's no corresponding label
                          return null;
                        }
                      })}
                    </List>

                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Total Area"
                          secondary={formData3.total_area}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Indoor Area"
                          secondary={formData3.indoor_area}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Outdoor Area"
                          secondary={formData3.outdoor_area}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Seating Capacity"
                          secondary={formData3.seating_capacity}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Standing Capacity"
                          secondary={formData3.standing_capacity}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Number of Rooms/Spaces"
                          secondary={formData3.number_of_rooms_spaces}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Stage Availability"
                          secondary={
                            formData3.stage_availability ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Podium Availability"
                          secondary={
                            formData3.podium_availability ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Parking Facilities"
                          secondary={
                            formData3.parking_facilities ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Parking Capacity"
                          secondary={formData3.parking_capacity}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Valet Parking Availability"
                          secondary={
                            formData3.valet_parking_availability ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Proximity to Public Transport"
                          secondary={formData3.proximity_to_public_transport}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Proximity to Major Roads"
                          secondary={formData3.proximity_to_major_roads}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Proximity to Airport"
                          secondary={formData3.proximity_to_airport}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Surrounding Environment"
                          secondary={formData3.surrounding_environment}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Noise Restrictions"
                          secondary={
                            formData3.noise_restrictions ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Ceiling Height"
                          secondary={formData3.ceiling_height}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Load-in/Load-out Facilities"
                          secondary={
                            formData3.load_in_load_out_facilities ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Green Room Availability"
                          secondary={
                            formData3.green_room_availability ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Dressing Room Availability"
                          secondary={
                            formData3.dressing_room_availability ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Kitchen Facilities"
                          secondary={
                            formData3.kitchen_facilities ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Restroom Facilities"
                          secondary={
                            formData3.restroom_facilities ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Power Supply Backup"
                          secondary={
                            formData3.power_supply_backup ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Air Conditioning/Heating"
                          secondary={
                            formData3.air_conditioning_heating ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Natural Light Availability"
                          secondary={
                            formData3.natural_light_availability ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Outdoor Space Description"
                          secondary={formData3.outdoor_space_description}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Scenic View"
                          secondary={formData3.scenic_view ? "Yes" : "No"}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Smoking Area"
                          secondary={formData3.smoking_area ? "Yes" : "No"}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Pet Friendly"
                          secondary={formData3.pet_friendly ? "Yes" : "No"}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Child Friendly"
                          secondary={formData3.child_friendly ? "Yes" : "No"}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Noise Level"
                          secondary={formData3.noise_level}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Nearby Parking Facilities"
                          secondary={
                            formData3.nearby_parking_facilities ? "Yes" : "No"
                          }
                        />
                      </ListItem>
                      <List>
                        <ListItem>
                          <ListItemText primary="Security Features" />
                        </ListItem>
                        <ul>
                          {fieldLabels3.security_features.CCTV && (
                            <li>
                              <ListItemText
                                primary="CCTV"
                                secondary={
                                  formData3.security_features.CCTV
                                    ? "Yes"
                                    : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels3.security_features.securityPersonnel && (
                            <li>
                              <ListItemText
                                primary="Security Personnel"
                                secondary={
                                  formData3.security_features.securityPersonnel
                                    ? "Yes"
                                    : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels3.security_features.alarmSystem && (
                            <li>
                              <ListItemText
                                primary="Alarm System"
                                secondary={
                                  formData3.security_features.alarmSystem
                                    ? "Yes"
                                    : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels3.security_features.other && (
                            <li>
                              <ListItemText
                                primary="Other"
                                secondary={formData3.security_features.other}
                              />
                            </li>
                          )}
                          {fieldLabels3.security_features.otherText && (
                            <li>
                              <ListItemText
                                primary="Other Text"
                                secondary={
                                  formData3.security_features.otherText
                                }
                              />
                            </li>
                          )}
                        </ul>

                        <ListItem>
                          <ListItemText primary="Fire Safety Measures" />
                        </ListItem>
                        <ul>
                          {fieldLabels3.fire_safety_measures
                            .sprinklerSystem && (
                            <li>
                              <ListItemText
                                primary="Sprinkler System"
                                secondary={
                                  formData3.fire_safety_measures.sprinklerSystem
                                    ? "Yes"
                                    : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels3.fire_safety_measures.fireExitSigns && (
                            <li>
                              <ListItemText
                                primary="Fire Exit Signs"
                                secondary={
                                  formData3.fire_safety_measures.fireExitSigns
                                    ? "Yes"
                                    : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels3.fire_safety_measures
                            .fireExtinguishers && (
                            <li>
                              <ListItemText
                                primary="Fire Extinguishers"
                                secondary={
                                  formData3.fire_safety_measures
                                    .fireExtinguishers
                                    ? "Yes"
                                    : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels3.fire_safety_measures.other && (
                            <li>
                              <ListItemText
                                primary="Other"
                                secondary={formData3.fire_safety_measures.other}
                              />
                            </li>
                          )}
                          {fieldLabels3.fire_safety_measures.otherText && (
                            <li>
                              <ListItemText
                                primary="Other Text"
                                secondary={
                                  formData3.fire_safety_measures.otherText
                                }
                              />
                            </li>
                          )}
                        </ul>
                      </List>
                    </List>

                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Child Friendly"
                          secondary={formData4.catering_services ? "Yes" : "No"}
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemText primary="Types of Cuisine" />
                      </ListItem>
                      <ul>
                        {fieldLabels4.types_of_cuisine.Indian && (
                          <li>
                            <ListItemText
                              primary="Indian Cuisine"
                              secondary={
                                formData4.types_of_cuisine.Indian ? "Yes" : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels4.types_of_cuisine.Chinese && (
                          <li>
                            <ListItemText
                              primary="Chinese Cuisine"
                              secondary={
                                formData4.types_of_cuisine.Chinese
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels4.types_of_cuisine.Italian && (
                          <li>
                            <ListItemText
                              primary="Italian Cuisine"
                              secondary={
                                formData4.types_of_cuisine.Italian
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels4.types_of_cuisine.Continental && (
                          <li>
                            <ListItemText
                              primary="Continental Cuisine"
                              secondary={
                                formData4.types_of_cuisine.Continental
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels4.types_of_cuisine.Vegan && (
                          <li>
                            <ListItemText
                              primary="Vegan Cuisine"
                              secondary={
                                formData4.types_of_cuisine.Vegan ? "Yes" : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels4.types_of_cuisine.GlutenFree && (
                          <li>
                            <ListItemText
                              primary="Gluten-Free Cuisine"
                              secondary={
                                formData4.types_of_cuisine.GlutenFree
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels4.types_of_cuisine.Halal && (
                          <li>
                            <ListItemText
                              primary="Halal Cuisine"
                              secondary={
                                formData4.types_of_cuisine.Halal ? "Yes" : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels4.types_of_cuisine.Kosher && (
                          <li>
                            <ListItemText
                              primary="Kosher Cuisine"
                              secondary={
                                formData4.types_of_cuisine.Kosher ? "Yes" : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels4.types_of_cuisine.Other && (
                          <li>
                            <ListItemText
                              primary="Other Cuisine"
                              secondary={formData4.types_of_cuisine.Other}
                            />
                          </li>
                        )}
                        {fieldLabels4.types_of_cuisine.OtherText && (
                          <li>
                            <ListItemText
                              primary="Other Cuisine Description"
                              secondary={formData4.types_of_cuisine.OtherText}
                            />
                          </li>
                        )}
                      </ul>

                      <ListItem>
                        {fieldLabels4.bar_services && (
                          <ListItemText
                            primary="Bar Services"
                            secondary={formData4.bar_services ? "Yes" : "No"}
                          />
                        )}
                      </ListItem>

                      <ListItem>
                        {fieldLabels4.alcohol_licensing && (
                          <ListItemText
                            primary="Alcohol Licensing"
                            secondary={
                              formData4.alcohol_licensing ? "Yes" : "No"
                            }
                          />
                        )}
                      </ListItem>

                      <ListItem>
                        {fieldLabels4.decor_services && (
                          <ListItemText
                            primary="Decor Services"
                            secondary={formData4.decor_services ? "Yes" : "No"}
                          />
                        )}
                      </ListItem>

                      <ListItem>
                        {fieldLabels4.event_planning_services && (
                          <ListItemText
                            primary="Event Planning Services"
                            secondary={
                              formData4.event_planning_services ? "Yes" : "No"
                            }
                          />
                        )}
                      </ListItem>

                      <ListItem>
                        {fieldLabels4.audio_visual_services && (
                          <ListItemText
                            primary="Audio Visual Services"
                            secondary={
                              formData4.audio_visual_services ? "Yes" : "No"
                            }
                          />
                        )}
                      </ListItem>

                      <ListItem>
                        {fieldLabels4.internet_wifi_availability && (
                          <ListItemText
                            primary="Internet/Wi-Fi Availability"
                            secondary={
                              formData4.internet_wifi_availability
                                ? "Yes"
                                : "No"
                            }
                          />
                        )}
                      </ListItem>

                      <ListItem>
                        {fieldLabels4.accommodation_availability && (
                          <ListItemText
                            primary="Accommodation Availability"
                            secondary={
                              formData4.accommodation_availability
                                ? "Yes"
                                : "No"
                            }
                          />
                        )}
                      </ListItem>

                      <ListItem>
                        {fieldLabels4.number_of_rooms_for_accommodation && (
                          <ListItemText
                            primary="Number of Rooms for Accommodation"
                            secondary={
                              formData4.number_of_rooms_for_accommodation
                            }
                          />
                        )}
                      </ListItem>
                      <List>
                        <ListItem>
                          <ListItemText primary="Types of Rooms" />
                        </ListItem>
                        <ul>
                          {fieldLabels4.types_of_rooms.Single && (
                            <li>
                              <ListItemText
                                primary="Single Rooms"
                                secondary={
                                  formData4.types_of_rooms.Single ? "Yes" : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels4.types_of_rooms.Double && (
                            <li>
                              <ListItemText
                                primary="Double Rooms"
                                secondary={
                                  formData4.types_of_rooms.Double ? "Yes" : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels4.types_of_rooms.Suite && (
                            <li>
                              <ListItemText
                                primary="Suite Rooms"
                                secondary={
                                  formData4.types_of_rooms.Suite ? "Yes" : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels4.types_of_rooms.Accessible && (
                            <li>
                              <ListItemText
                                primary="Accessible Rooms"
                                secondary={
                                  formData4.types_of_rooms.Accessible
                                    ? "Yes"
                                    : "No"
                                }
                              />
                            </li>
                          )}
                          {fieldLabels4.types_of_rooms.Other && (
                            <li>
                              <ListItemText
                                primary="Other Room Types"
                                secondary={formData4.types_of_rooms.Other}
                              />
                            </li>
                          )}
                          {fieldLabels4.types_of_rooms.OtherText && (
                            <li>
                              <ListItemText
                                primary="Other Room Type Description"
                                secondary={formData4.types_of_rooms.OtherText}
                              />
                            </li>
                          )}
                        </ul>
                      </List>

                      <List>
                        <ListItem>
                          <ListItemText
                            primary="Furniture Availability"
                            secondary={
                              formData3.furniture_availability
                                ? "Available"
                                : "NoT Available"
                            }
                          />
                        </ListItem>

                        <ListItem>
                          {fieldLabels4.types_of_furniture_available && (
                            <ListItemText
                              primary="Types of Furniture Available"
                              secondary={formData4.types_of_furniture_available}
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.decor_restrictions && (
                            <ListItemText
                              primary="Decor Restrictions"
                              secondary={formData4.decor_restrictions}
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.cleaning_services && (
                            <ListItemText
                              primary="Cleaning Services"
                              secondary={
                                formData4.cleaning_services ? "Yes" : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.on_site_staff_availability && (
                            <ListItemText
                              primary="On-Site Staff Availability"
                              secondary={
                                formData4.on_site_staff_availability
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.event_coordination_services && (
                            <ListItemText
                              primary="Event Coordination Services"
                              secondary={
                                formData4.event_coordination_services
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.equipment_rental_options && (
                            <ListItemText
                              primary="Equipment Rental Options"
                              secondary={
                                formData4.equipment_rental_options
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.storage_facilities && (
                            <ListItemText
                              primary="Storage Facilities"
                              secondary={
                                formData4.storage_facilities ? "Yes" : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.signage_banner_allowed && (
                            <ListItemText
                              primary="Signage/Banner Allowed"
                              secondary={
                                formData4.signage_banner_allowed ? "Yes" : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.special_lighting && (
                            <ListItemText
                              primary="Special Lighting"
                              secondary={
                                formData4.special_lighting ? "Yes" : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.dance_floor && (
                            <ListItemText
                              primary="Dance Floor"
                              secondary={formData4.dance_floor ? "Yes" : "No"}
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.outdoor_heating && (
                            <ListItemText
                              primary="Outdoor Heating"
                              secondary={
                                formData4.outdoor_heating ? "Yes" : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.tenting_facilities && (
                            <ListItemText
                              primary="Tenting Facilities"
                              secondary={
                                formData4.tenting_facilities ? "Yes" : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.coat_check && (
                            <ListItemText
                              primary="Coat Check"
                              secondary={formData4.coat_check ? "Yes" : "No"}
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.bridal_suite && (
                            <ListItemText
                              primary="Bridal Suite"
                              secondary={formData4.bridal_suite ? "Yes" : "No"}
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.child_care_facilities && (
                            <ListItemText
                              primary="Child Care Facilities"
                              secondary={
                                formData4.child_care_facilities ? "Yes" : "No"
                              }
                            />
                          )}
                        </ListItem>
                        <ListItem>
                          {fieldLabels4.pet_care_facilities && (
                            <ListItemText
                              primary="Pet Care Facilities"
                              secondary={
                                formData4.pet_care_facilities ? "Yes" : "No"
                              }
                            />
                          )}
                        </ListItem>
                      </List>
                    </List>
                    <ListItem>
                      <ListItemText
                        primary="Availability"
                        secondary={formData5.availability ? "Yes" : "No"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Minimum Notice Period"
                        secondary={formData5.minimum_notice_period}
                      />
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.cancellation_policy && (
                        <ListItemText
                          primary="Cancellation Policy"
                          secondary={formData5.cancellation_policy}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.pricing && (
                        <ListItemText
                          primary="Pricing"
                          secondary={formData5.pricing}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.payment_methods_accepted && (
                        <ListItemText
                          primary="Payment Methods Accepted"
                          secondary={formData5.payment_methods_accepted}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.insurance_requirements && (
                        <ListItemText
                          primary="Insurance Requirements"
                          secondary={formData5.insurance_requirements}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Booking Channels"
                        secondary={formData5.booking_channels}
                      />
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.deposit_requirement && (
                        <ListItemText
                          primary="Deposit Requirement"
                          secondary={
                            formData5.deposit_requirement ? "Yes" : "No"
                          }
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.deposit_amount && (
                        <ListItemText
                          primary="Deposit Amount"
                          secondary={formData5.deposit_amount}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.deposit_refund_policy && (
                        <ListItemText
                          primary="Deposit Refund Policy"
                          secondary={formData5.deposit_refund_policy}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.full_payment_due_date && (
                        <ListItemText
                          primary="Full Payment Due Date"
                          secondary={formData5.full_payment_due_date}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.discounts_available && (
                        <ListItemText
                          primary="Discounts Available"
                          secondary={
                            formData5.discounts_available ? "Yes" : "No"
                          }
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Types of Discounts" />
                    </ListItem>
                    <ul>
                      {fieldLabels5.types_of_discounts.EarlyBird && (
                        <li>
                          <ListItemText
                            primary="Early Bird Discount"
                            secondary={
                              formData5.types_of_discounts.EarlyBird
                                ? "Yes"
                                : "No"
                            }
                          />
                        </li>
                      )}
                      {fieldLabels5.types_of_discounts.BulkBooking && (
                        <li>
                          <ListItemText
                            primary="Bulk Booking Discount"
                            secondary={
                              formData5.types_of_discounts.BulkBooking
                                ? "Yes"
                                : "No"
                            }
                          />
                        </li>
                      )}
                      {fieldLabels5.types_of_discounts.OffSeason && (
                        <li>
                          <ListItemText
                            primary="Off Season Discount"
                            secondary={
                              formData5.types_of_discounts.OffSeason
                                ? "Yes"
                                : "No"
                            }
                          />
                        </li>
                      )}
                      {fieldLabels5.types_of_discounts.Other && (
                        <li>
                          <ListItemText
                            primary="Other Discount"
                            secondary={formData5.types_of_discounts.Other}
                          />
                        </li>
                      )}
                      {fieldLabels5.types_of_discounts.OtherText && (
                        <li>
                          <ListItemText
                            primary="Other Discount Description"
                            secondary={formData5.types_of_discounts.OtherText}
                          />
                        </li>
                      )}
                    </ul>

                    <ListItem>
                      {fieldLabels5.minimum_booking_duration && (
                        <ListItemText
                          primary="Minimum Booking Duration"
                          secondary={formData5.minimum_booking_duration}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.maximum_booking_duration && (
                        <ListItemText
                          primary="Maximum Booking Duration"
                          secondary={formData5.maximum_booking_duration}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.overtime_policy && (
                        <ListItemText
                          primary="Overtime Policy"
                          secondary={formData5.overtime_policy}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Setup/Takedown Time Included"
                        secondary={
                          formData5.setup_takedown_time_included ? "Yes" : "No"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.additional_costs && (
                        <ListItemText
                          primary="Additional Costs"
                          secondary={formData5.additional_costs}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Contract Requirement"
                        secondary={
                          formData5.contract_requirement ? "Yes" : "No"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.contract_terms && (
                        <ListItemText
                          primary="Contract Terms"
                          secondary={formData5.contract_terms}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.cancellation_by_venue_policy && (
                        <ListItemText
                          primary="Cancellation by Venue Policy"
                          secondary={formData5.cancellation_by_venue_policy}
                        />
                      )}
                    </ListItem>
                    <ListItem>
                      {fieldLabels5.force_majeure_policy && (
                        <ListItemText
                          primary="Force Majeure Policy"
                          secondary={formData5.force_majeure_policy}
                        />
                      )}
                    </ListItem>
                    {/* fORM 6 */}

                    <List>
                      <ListItem>
                        <ListItemText primary="Event Types" />
                      </ListItem>
                      <ul>
                        {fieldLabels6.types_of_events_hosted
                          .CorporateEvents && (
                          <li>
                            <ListItemText
                              primary="Corporate Events"
                              secondary={
                                formData6.types_of_events_hosted.CorporateEvents
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels6.types_of_events_hosted
                          .CorporateEvents && (
                          <li>
                            <ListItemText
                              primary="Corporate Events"
                              secondary={
                                formData6.types_of_events_hosted.CorporateEvents
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels6.types_of_events_hosted.Concerts && (
                          <li>
                            <ListItemText
                              primary="Concerts"
                              secondary={
                                formData6.types_of_events_hosted.Concerts
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels6.types_of_events_hosted.Exhibitions && (
                          <li>
                            <ListItemText
                              primary="Exhibitions"
                              secondary={
                                formData6.types_of_events_hosted.Exhibitions
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels6.types_of_events_hosted.PrivateParties && (
                          <li>
                            <ListItemText
                              primary="Private Parties"
                              secondary={
                                formData6.types_of_events_hosted.PrivateParties
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels6.types_of_events_hosted.Festivals && (
                          <li>
                            <ListItemText
                              primary="Festivals"
                              secondary={
                                formData6.types_of_events_hosted.Festivals
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels6.types_of_events_hosted.Workshops && (
                          <li>
                            <ListItemText
                              primary="Workshops"
                              secondary={
                                formData6.types_of_events_hosted.Workshops
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels6.types_of_events_hosted.Seminars && (
                          <li>
                            <ListItemText
                              primary="Seminars"
                              secondary={
                                formData6.types_of_events_hosted.Seminars
                                  ? "Yes"
                                  : "No"
                              }
                            />
                          </li>
                        )}
                        {fieldLabels6.types_of_events_hosted.Other && (
                          <li>
                            <ListItemText
                              primary="Other"
                              secondary={formData6.types_of_events_hosted.Other}
                            />
                          </li>
                        )}
                        {fieldLabels6.types_of_events_hosted.OtherText && (
                          <li>
                            <ListItemText
                              primary="Other Description"
                              secondary={
                                formData6.types_of_events_hosted.OtherText
                              }
                            />
                          </li>
                        )}
                      </ul>
                      <ListItem>
                        {fieldLabels6.client_testimonials_and_reviews && (
                          <ListItemText
                            primary="Client Testimonials and Reviews"
                            secondary={
                              formData6.client_testimonials_and_reviews
                            }
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels6.number_of_events_hosted && (
                          <ListItemText
                            primary="Number of Events Hosted"
                            secondary={formData6.number_of_events_hosted}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels6.notable_events_or_clients && (
                          <ListItemText
                            primary="Notable Events or Clients"
                            secondary={formData6.notable_events_or_clients}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels6.client_references && (
                          <ListItemText
                            primary="Client References"
                            secondary={formData6.client_references}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels6.event_success_stories && (
                          <ListItemText
                            primary="Event Success Stories"
                            secondary={formData6.event_success_stories}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels6.event_failures_lessons_learned && (
                          <ListItemText
                            primary="Event Failures and Lessons Learned"
                            secondary={formData6.event_failures_lessons_learned}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels6.average_event_rating && (
                          <ListItemText
                            primary="Average Event Rating"
                            secondary={formData6.average_event_rating}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels6.event_portfolio && (
                          <ListItemText
                            primary="Event Portfolio"
                            secondary={formData6.event_portfolio}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels6.media_mentions && (
                          <ListItemText
                            primary="Media Mentions"
                            secondary={formData6.media_mentions}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels6.event_frequency && (
                          <ListItemText
                            primary="Event Frequency"
                            secondary={formData6.event_frequency}
                          />
                        )}
                      </ListItem>
                    </List>

                    {/* Form 7 */}

                    <List>
                      <ListItem>
                        {fieldLabels7.licenses_and_permits && (
                          <ListItemText
                            primary="Licenses and Permits"
                            secondary={formData7.licenses_and_permits}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.safety_measures && (
                          <ListItemText
                            primary="Safety Measures"
                            secondary={formData7.safety_measures}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.business_registration_details && (
                          <ListItemText
                            primary="Business Registration Details"
                            secondary={formData7.business_registration_details}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.tax_compliance_status && (
                          <ListItemText
                            primary="Tax Compliance Status"
                            secondary={
                              formData7.tax_compliance_status
                                ? "Complian"
                                : "NoN-Complian"
                            }
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.health_and_safety_certifications && (
                          <ListItemText
                            primary="Health and Safety Certifications"
                            secondary={
                              formData7.health_and_safety_certifications
                            }
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.fire_safety_compliance && (
                          <ListItemText
                            primary="Fire Safety Compliance"
                            secondary={formData7.fire_safety_compliance}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.food_safety_certifications && (
                          <ListItemText
                            primary="Food Safety Certifications"
                            secondary={formData7.food_safety_certifications}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.alcohol_licensing_details && (
                          <ListItemText
                            primary="Alcohol Licensing Details"
                            secondary={formData7.alcohol_licensing_details}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.music_licensing_details && (
                          <ListItemText
                            primary="Music Licensing Details"
                            secondary={formData7.music_licensing_details}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.insurance_coverage_details && (
                          <ListItemText
                            primary="Insurance Coverage Details"
                            secondary={formData7.insurance_coverage_details}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.accessibility_compliance && (
                          <ListItemText
                            primary="Accessibility Compliance"
                            secondary={formData7.accessibility_compliance}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.privacy_policy && (
                          <ListItemText
                            primary="Privacy Policy"
                            secondary={formData7.privacy_policy}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.terms_and_conditions && (
                          <ListItemText
                            primary="Terms and Conditions"
                            secondary={formData7.terms_and_conditions}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.dispute_resolution_mechanisms && (
                          <ListItemText
                            primary="Dispute Resolution Mechanisms"
                            secondary={formData7.dispute_resolution_mechanisms}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.sustainability_practices && (
                          <ListItemText
                            primary="Sustainability Practices"
                            secondary={formData7.sustainability_practices}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels7.noise_pollution_controls && (
                          <ListItemText
                            primary="Noise Pollution Controls"
                            secondary={formData7.noise_pollution_controls}
                          />
                        )}
                      </ListItem>
                    </List>
                    {/* fORM 8 */}

                    <List>
                      <ListItem>
                        {fieldLabels8.preferred_catering_vendor && (
                          <ListItemText
                            primary="Preferred Catering Vendor"
                            secondary={selectedCateringVendor}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels8.preferred_photography_vendor && (
                          <ListItemText
                            primary="Preferred Photography Vendor"
                            secondary={selectedPhotographyVendor}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels8.preferred_band_vendor && (
                          <ListItemText
                            primary="Preferred Band Vendor"
                            secondary={selectedBandVendor}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels8.preferred_flowers_vendor && (
                          <ListItemText
                            primary="Preferred Flowers Vendor"
                            secondary={selectedFlowersVendor}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels8.preferred_transportation_vendor && (
                          <ListItemText
                            primary="Preferred Transportation Vendor"
                            secondary={selectedTransportationVendor}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels8.preferred_lighting_and_decor_vendor && (
                          <ListItemText
                            primary="Preferred Lighting and Decor Vendor"
                            secondary={selectedLightingAndDecorsVendor}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels8.preferred_wedding_cake_vendor && (
                          <ListItemText
                            primary="Preferred Wedding Cake Vendor"
                            secondary={selectedWeddingCakeVendor}
                          />
                        )}
                      </ListItem>
                      <ListItem>
                        {fieldLabels8.preferred_dj_vendor && (
                          <ListItemText
                            primary="Preferred DJ Vendor"
                            secondary={selectedDJVendor}
                          />
                        )}
                      </ListItem>
                    </List>
                  </Paper>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="I confirm all the details"
                    style={{ marginBottom: "16px" , marginTop: "16px" }}
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
                      onClick={handleFinish}
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

export default MyVenueForm;
