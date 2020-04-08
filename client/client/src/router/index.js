import Router from 'vue-router'

import StateList from '@/components/StateList'
import About from '@/components/About'

//associates the base URL path/ with the StateList component
//sets the "home page of the app"
export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        },
        {
            path: '/about', //this creaes a route to /about that displays the component
            component: About
         }
    ]
})