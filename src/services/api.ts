
import axios from 'axios';

// In a real-world scenario, this would be fetched from environment variables
const API_BASE_URL = 'https://api.example.com';

// Mock implementation for demo purposes
let mockHeading = "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI";
let mockHeadingColor = "#0056A4";
let mockHighlightText = "";

export const api = {
  // Fetch heading from the API
  getHeading: async () => {
    console.log("Fetching heading from API...");
    // In a real implementation, this would be a real API call:
    // return axios.get(`${API_BASE_URL}/heading`).then(response => response.data);
    
    // For demo purposes, using mock data
    return Promise.resolve({ 
      heading: mockHeading,
      headingColor: mockHeadingColor,
      highlightText: mockHighlightText
    });
  },
  
  // Save heading to the API
  saveHeading: async (heading: string, headingColor: string, highlightText: string) => {
    console.log("Saving heading to API:", heading);
    console.log("Saving heading color to API:", headingColor);
    console.log("Saving highlight text to API:", highlightText);
    // In a real implementation, this would be a real API call:
    // return axios.post(`${API_BASE_URL}/heading`, { heading, headingColor, highlightText }).then(response => response.data);
    
    // For demo purposes, update mock data
    mockHeading = heading;
    mockHeadingColor = headingColor;
    mockHighlightText = highlightText;
    return Promise.resolve({ success: true });
  }
};
