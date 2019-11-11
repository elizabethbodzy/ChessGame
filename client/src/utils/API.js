import axios from 'axios';

export default {
    createUser: (userData) => {
        return axios.post('/auth/signup', userData);
    },
    getCurrentUser: () => {
        return axios.get('/api/user/currentUser', {
            headers: {
                Authorization: localStorage.getItem('jwtToken')
            }
        });
    }
};