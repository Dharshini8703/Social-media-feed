import axios from "axios";

// Create an Axios instance
export const axBackendInstance = axios.create({
  // baseURL: "http://localhost:3000", // Uncomment for local development
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the token immediately when creating the Axios instance
const setAuthorizationHeader = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    axBackendInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
};

// Call the function to set the token immediately
setAuthorizationHeader();

// Dev URLs for images and boarding passes
export const baseImgUrl = "http://192.168.1.35:3000/"; // Change to your server URL
export const boardingPassUrl = "http://devclub.trugotech.com/public/";

// Start with dynamic port number if needed (uncomment the block below)
 // export const baseImgUrl = `http://${window.location.hostname}:${window.location.port}/public/uploads/`;
 // export const boardingPassUrl = `http://${window.location.hostname}:${window.location.port}/public/`;
// export const baseImgNewUrl = `http://${window.location.hostname}:${window.location.port}/public/uploads/`;
