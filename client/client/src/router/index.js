import Router from 'vue-router'

import StateList from '@/components/StateList'
import About from '@/components/About'
import StateDetail from '@/components/StateDetail'

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
         },
         {
         path: '/detail/:state', //so routed to correct state page
         name: 'detail',
         component: StateDetail //this component will load details for the state selected
         }
    ]
})