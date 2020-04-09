<template>
    <div id="state-list">
<!-- in Summary, bind to computed methods below-->
        <Summary
            v-bind:total="totalVisited" 
            v-bind:visitedAll="visitedAll">
        </Summary>
<!--flex-wrap displays comonents in a grid -->
        <div class="d-flex flex-wrap justify-content-arrow">
            <div class="p-2" v-for="state in states" v-bind:key="state.name">
                <State
                    v-bind:state="state"
                    v-on:isVisited="updateVisited"
                ></State>
            </div>
        </div>
    </div>
</template>

<script>
//import and register StateList and Summary as child components
import State from '@/components/State'
import Summary from '@/components/Summary'


export default {
    name: 'StateList',
    components: {
        State,Summary
    },
    data() {
        return {
            states: [],
        }
    },
    mounted() {
        this.getAll()
    },
    methods: {
        getAll() {
            this.$stateService.getAll().then(data => {
                this.states = data
            })
        },
        //this method is bound to v-on:isVisited in State.vue
        //this method calls $stateService.setVisited and calls getAll() method to update the states arrayu
        updateVisited(stateName, stateVisited) {
            this.$stateService.setVisited(stateName, stateVisited).then(data => {
                this.getAll()
            })
        }
    },
    computed: {  
        totalVisited() {
            let visited = this.states.filter(function(state) {
                return state.visited
            }) //visited.lenth is equal to the number of states visited
            return visited.length
        },
        visitedAll() {
            let visited = this.states.filter(function(state) {
                return state.visited
            }) //if length of visited array is same as length of states array
            return visited.length == this.states.length
        }
    }
}
</script>

<style>

</style>