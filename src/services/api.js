/**
 * API Service for TOAI
 * 
 * This file handles all API communication using native fetch or axios.
 * Currently using mock data for frontend demonstration.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const apiClient = {
    get: async (endpoint) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('API GET Error:', error);
            throw error;
        }
    },

    post: async (endpoint, data) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('API POST Error:', error);
            throw error;
        }
    }
};

// Mock Services
export const AuthService = {
    login: async (credentials) => {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ user: { name: 'User', email: credentials.email }, token: 'mock-jwt-token' });
            }, 1000);
        });
    },

    register: async (userData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: 'Registration successful' });
            }, 1000);
        });
    }
};

export const ContactService = {
    sendMessage: async (messageData) => {
        console.log('Sending message:', messageData);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: 'Message sent successfully' });
            }, 1500);
        });
    }
};
