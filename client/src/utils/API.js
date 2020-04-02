import axios from 'axios';

export default {
    signUp: (obj)=> axios.post('/api/signup', obj),
    setGoals: (arr)=> axios.post('/api/goals'),
    getGoals: ()=> axios.get('/api/goals')
}