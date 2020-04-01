import axios from 'axios';

export default {
    signUp: (obj)=> axios.post('/api/signup', obj)
}