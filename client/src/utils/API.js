import axios from 'axios';

export default {
    signUp: (obj) => axios.post('/api/signup', obj),
    signIn: (obj) => axios.post('/api/signin', obj),
    setGoals: (arr) => axios.post('/api/goals', arr),
    getGoals: () => axios.get('/api/goals'),
    renderAvatar: () => axios.get('/api/users')
}

