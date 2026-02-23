// api.js

import axios from 'axios';

// Create an instance of axios with default configuration
const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Set your API base URL
    timeout: 10000, // Set a timeout for requests
    headers: { 'Content-Type': 'application/json' } // Set default headers
});

// Interceptors to handle requests and responses
apiClient.interceptors.request.use(config => {
    // You can modify the request configuration before sending it
    console.log('Request sent:', config);
    return config;
}, error => {
    // Handle request error
    return Promise.reject(error);
});

apiClient.interceptors.response.use(response => {
    // You can handle the response data here
    console.log('Response received:', response);
    return response;
}, error => {
    // Handle response error
    console.error('Response error:', error);
    return Promise.reject(error);
});

// Export the apiClient for use in other parts of the application
export default apiClient;