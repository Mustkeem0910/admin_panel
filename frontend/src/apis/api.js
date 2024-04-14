const domain='http://127.0.0.1:8000'
export async function fetchCities() {
    const response = await fetch(`${domain}/api/cities/`);
    if (!response.ok) {
      throw new Error('Failed to fetch cities');
    }
    const data = await response.json();
    return data;
}
  
export async function fetchVendorTypes() {
    const response = await fetch(`${domain}/api/vendor-types/`);
    if (!response.ok) {
      throw new Error('Failed to fetch vendor types');
    }
    const data = await response.json();
    return data;
}
  


async function fetchVendorData() {
  try {
    const response = await fetch(`${domain}/api/vendors/`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch vendor data');
    }
  } catch (error) {
    console.error('Error fetching vendor data:', error);
    throw error;
  }
}

export { fetchVendorData };




// Function to create a new vendor
export async function createVendor(formData) {
  try {
    const response = await fetch(`${domain}/api/vendors/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response;
  } catch (error) {
    throw new Error('Error creating vendor:', error);
  }
}

// Function to upload an image for a vendor
export async function uploadMedia(vendorId, selectedMedia) {
  try {
    const formData = new FormData();
    formData.append('vendor', vendorId);
    formData.append('media', selectedMedia);

    const response = await fetch(`${domain}/api/vendor-media/`, {
      method: 'POST',
      body: formData,
    });
    return response;
  } catch (error) {
    throw new Error('Error uploading image:', error);
  }
}

// Function to delete a vendor by ID
export async function deleteVendorById(vendorId) {
  try {
    const response = await fetch(`${domain}/api/vendors/${vendorId}/`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // Optionally, you can return a success message or status code
      return 'Vendor deleted successfully';
    } else {
      throw new Error('Failed to delete vendor');
    }
  } catch (error) {
    console.error('Error deleting vendor:', error);
    throw error;
  }
}






// Function to fetch vendor data by ID
export async function fetchVendorDataId(vendorId) {
  try {
    const response = await fetch(`${domain}/api/vendors/${vendorId}/`);
    if (response.ok) {
      const vendorData = await response.json();
      return vendorData;
    } else {
      throw new Error('Failed to fetch vendor data');
    }
  } catch (error) {
    console.error('Error fetching vendor data:', error);
    throw error;
  }
}

// Function to update vendor data
export async function updateVendorData(vendorId, updatedData) {
  try {
    const response = await fetch(`${domain}/api/vendors/${vendorId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      console.log('Vendor data updated successfully');
      return response;
    } else {
      throw new Error('Failed to update vendor data');
    }
  } catch (error) {
    console.error('Error updating vendor data:', error);
    throw error;
  }
}



export async function fetchVenueTypes() {
  const response = await fetch(`${domain}/api/venue-types/`);
  if (!response.ok) {
    throw new Error('Failed to fetch vendor types');
  }
  const data = await response.json();
  return data;
}

// Function to create a new venue
export async function createVenue(formData) {
  try {
    const response = await fetch(`${domain}/api/venues/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response;
  } catch (error) {
    throw new Error('Error creating vendor:', error);
  }
}


// Function to upload an image for a vendue
export async function uploadVenueMedia(venueId, file) {
  try {
    const formData = new FormData();
    formData.append('venue', venueId);
    formData.append('media', file);

    const response = await fetch(`${domain}/api/venue-media/`, {
      method: 'POST',
      body: formData,
    });
    return response;
  } catch (error) {
    throw new Error('Error uploading image:', error);
  }
}


async function fetchVenueData() {
  try {
    const response = await fetch(`${domain}/api/venues/`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch venue data');
    }
  } catch (error) {
    console.error('Error fetching venue data:', error);
    throw error;
  }
}

export { fetchVenueData };

export async function venueSocial(formData) {
  try {
    const response = await fetch(`${domain}/api/venue-social/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response;
  } catch (error) {
    throw new Error('Error creating vendor:', error);
  }
}


export const fetchVendorsByType = async (vendorType) => {
  try {
      const response = await fetch(`${domain}/api/api/vendorsTypes/${vendorType}/`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch vendors data');
      }
    } catch (error) {
      console.error('Error fetching vendors:', error);
      throw error;
    }
};


export async function createVenueFacilities(formData) {
  try {
    const response = await fetch(`${domain}/api/venue-facility/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error('Error creating Venue Facilities: ' + JSON.stringify(responseData));
    }

    return response.json();
  } catch (error) {
    throw new Error('Error creating Venue Facilities: ' + error.message);
  }
}




export async function createVenueServices(formData) {
  try {
    const response = await fetch(`${domain}/api/venue-services/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error('Error creating Venue Services: ' + JSON.stringify(responseData));
    }

    return response.json();
  } catch (error) {
    throw new Error('Error creating Venue Services: ' + error.message);
  }
}



export async function createVenueBookings(formData) {
  try {
    const response = await fetch(`${domain}/api/venue-bookings/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error('Error creating Venue Bookings: ' + JSON.stringify(responseData));
    }

    return response.json();
  } catch (error) {
    throw new Error('Error creating Venue Bookings: ' + error.message);
  }
}



export async function createVenueEvents(formData) {
  try {
    const response = await fetch(`${domain}/api/venue-events/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error('Error creating Venue Events: ' + JSON.stringify(responseData));
    }

    return response.json();
  } catch (error) {
    throw new Error('Error creating Venue Events: ' + error.message);
  }
}



export async function createVenueLegalCompliances(formData) {
  try {
    const response = await fetch(`${domain}/api/venue-legal-compliances/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error('Error creating Venue Legal Compliances: ' + JSON.stringify(responseData));
    }

    return response.json();
  } catch (error) {
    throw new Error('Error creating Venue Legal Compliances: ' + error.message);
  }
}


export async function createVenuePreferredVendors(formData) {
  try {
    const response = await fetch(`${domain}/api/venue-preferred-vendors/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error('Error creating Venue Preferred Vendors: ' + JSON.stringify(responseData));
    }

    return response.json();
  } catch (error) {
    throw new Error('Error creating Venue Preferred Vendors: ' + error.message);
  }
}



// Function to delete a venue by ID
export async function deleteVenueById(venueId) {
  try {
    const response = await fetch(`${domain}/api/venues/${venueId}/`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // Optionally, you can return a success message or status code
      return 'Venue deleted successfully';
    } else {
      throw new Error('Failed to delete vendor');
    }
  } catch (error) {
    console.error('Error deleting vendor:', error);
    throw error;
  }
}


// Function to fetch venue data by ID
export async function fetchVenueDataId(venueId) {
  try {
    const response = await fetch(`${domain}/api/venues/${venueId}/`);
    if (response.ok) {
      const venueData = await response.json();
      return venueData;
    } else {
      throw new Error('Failed to fetch venue data');
    }
  } catch (error) {
    console.error('Error fetching venue data:', error);
    throw error;
  }
}



// Function to update vendor data
export async function updateVenueData(venueId, updatedData) {
  try {
    const response = await fetch(`${domain}/api/venues/${venueId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      console.log('Vendor data updated successfully');
      return response;
    } else {
      throw new Error('Failed to update vendor data');
    }
  } catch (error) {
    console.error('Error updating vendor data:', error);
    throw error;
  }
}



export const fetchVenueSocialByType = async (venue_id) => {
  try {
      const response = await fetch(`${domain}/api/api/venueSocial/${venue_id}/`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch venue data');
      }
    } catch (error) {
      console.error('Error fetching venue:', error);
      throw error;
    }
};


export async function updateVenueSocialData(socialId, updatedData) {
  try {
    const response = await fetch(`${domain}/api/venue-social/${socialId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      console.log('Venue data updated successfully');
      return response;
    } else {
      throw new Error('Failed to update venue data');
    }
  } catch (error) {
    console.error('Error updating venue data:', error);
    throw error;
  }
}



export const fetchVenueServiceByType = async (venue_id) => {
  try {
      const response = await fetch(`${domain}/api/api/venueService/${venue_id}/`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch venue data');
      }
    } catch (error) {
      console.error('Error fetching venue:', error);
      throw error;
    }
};



export const fetchVenueFacilityByType = async (venue_id) => {
  try {
      const response = await fetch(`${domain}/api/api/venueFacility/${venue_id}/`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch venue data');
      }
    } catch (error) {
      console.error('Error fetching venue:', error);
      throw error;
    }
};

export async function updateVenueFacilityData(facilityId, updatedData) {
  try {
    const response = await fetch(`${domain}/api/venue-facility/${facilityId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      console.log('Venue data updated successfully');
      return response;
    } else {
      throw new Error('Failed to update venue data');
    }
  } catch (error) {
    console.error('Error updating venue data:', error);
    throw error;
  }
}


export async function updateVenueServiceData(serviceId, updatedData) {
  try {
    const response = await fetch(`${domain}/api/venue-services/${serviceId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      console.log('Venue data updated successfully');
      return response;
    } else {
      throw new Error('Failed to update venue data');
    }
  } catch (error) {
    console.error('Error updating venue data:', error);
    throw error;
  }
}


export const fetchVenueBookingByType = async (venue_id) => {
  try {
      const response = await fetch(`${domain}/api/api/venueBooking/${venue_id}/`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch venue data');
      }
    } catch (error) {
      console.error('Error fetching venue:', error);
      throw error;
    }
};


export async function updateVenueBookingData(bookingId, updatedData) {
  try {
    const response = await fetch(`${domain}/api/venue-bookings/${bookingId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      console.log('Venue data updated successfully');
      return response;
    } else {
      throw new Error('Failed to update venue data');
    }
  } catch (error) {
    console.error('Error updating venue data:', error);
    throw error;
  }
}


export const fetchVenueEventByType = async (venue_id) => {
  try {
      const response = await fetch(`${domain}/api/api/venueEvent/${venue_id}/`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch venue data');
      }
    } catch (error) {
      console.error('Error fetching venue:', error);
      throw error;
    }
};


export async function updateVenueEventData(eventId, updatedData) {
  try {
    const response = await fetch(`${domain}/api/venue-events/${eventId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      console.log('Venue data updated successfully');
      return response;
    } else {
      throw new Error('Failed to update venue data');
    }
  } catch (error) {
    console.error('Error updating venue data:', error);
    throw error;
  }
};

export const fetchVenueLegalByType = async (venue_id) => {
  try {
      const response = await fetch(`${domain}/api/api/venueLegal/${venue_id}/`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch venue data');
      }
    } catch (error) {
      console.error('Error fetching venue:', error);
      throw error;
    }
};


export async function updateVenueLegalData(legalId, updatedData) {
  try {
    const response = await fetch(`${domain}/api/venue-legal-compliances/${legalId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      console.log('Venue data updated successfully');
      return response;
    } else {
      throw new Error('Failed to update venue data');
    }
  } catch (error) {
    console.error('Error updating venue data:', error);
    throw error;
  }
}

export const fetchVenueVendorByType = async (venue_id) => {
  try {
      const response = await fetch(`${domain}/api/api/venueVendor/${venue_id}/`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch venue data');
      }
    } catch (error) {
      console.error('Error fetching venue:', error);
      throw error;
    }
};


export async function updateVenueVendorData(venueVendorId, updatedData) {
  try {
    const response = await fetch(`${domain}pip/venue-preferred-vendors/${venueVendorId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      console.log('Venue data updated successfully');
      return response;
    } else {
      throw new Error('Failed to update venue data');
    }
  } catch (error) {
    console.error('Error updating venue data:', error);
    throw error;
  }
}