import Router from 'vue-router'

import StateList from '@/components/StateList'

//associates the base URL path/ with the StateList component
//sets the "home page of the app"
export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        }
    ]
})