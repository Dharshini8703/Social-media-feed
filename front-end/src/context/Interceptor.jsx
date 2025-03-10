import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axBackendInstance } from "./Axios-instance";

const useAxiosInterceptor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Request Interceptor: Adds the Authorization header if access token is present
    const requestInterceptor = (config) => {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    };

    // Response Interceptor: Handles successful responses
    const responseInterceptor = (response) => {
      return response; // Can handle successful responses as needed
    };

    // Error Interceptor for request: Handles errors in the request
    const errorRequestInterceptor = (error) => {
      return Promise.reject(error);
    };

    // Error Interceptor for response: Handles errors in the response
    const errorResponseInterceptor = (error) => {
      if (error.response && error.response.status === 401) {
        // Session expired handling
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        localStorage.setItem("isSessionExpired", "true"); // Set flag indicating session expired
        toast.error("Session Expired: Please log in again 🙂");
        navigate("/");
      }
      delete axBackendInstance.defaults.headers.common.Authorization;
      return Promise.reject(error);
    };

    // Add interceptors
    const requestInterceptorId = axBackendInstance.interceptors.request.use(
      requestInterceptor,
      errorRequestInterceptor
    );

    const responseInterceptorId = axBackendInstance.interceptors.response.use(
      responseInterceptor,
      errorResponseInterceptor
    );

    // Cleanup interceptors on component unmount
    return () => {
      axBackendInstance.interceptors.request.eject(requestInterceptorId);
      axBackendInstance.interceptors.response.eject(responseInterceptorId);
    };
  }, [navigate]);

  return { axbe: axBackendInstance };
};

export default useAxiosInterceptor;
