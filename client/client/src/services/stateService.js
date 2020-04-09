import axios from 'axios'

export default {
    getAll() { //this makes a request to the api-states route
        return axios.get('/api/states/').then( response => {
            return response.data
        })
    },
    //this function sends a patch request to  states.js route
    setVisited(stateName, visited) {
        return axios.patch('/api/state/' + stateName, { visited: visited }).then(response=> {
            return response.data
        })
    },
    getOne(stateName) { //this fx makes request to new API route. stateName is argument used to build URL
        return axios.get('/api/states/' + stateName).then( response => {
            return response.data
        })
    }
}