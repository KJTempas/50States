import axios from 'axios'

export default {
    getAll() { //this makes a request to the api-states route
        return axios.get('/api/states/').then( response => {
            return response.data
        })
    }
}