import axios from 'axios';

export default {
    createUser: (userData) => {
        return axios.post('/api/user/signup', userData);
    },

    getUser: () => {
        return axios.get('/auth/user');
    },

    authenticateUser: (userData) => {
        return axios('auth/signup', 
        {
            method: 'POST',
            data: userData,
            withCredentials: true
        })
    },

    logout: () => {
        return axios.get('/auth/user');
    }
}