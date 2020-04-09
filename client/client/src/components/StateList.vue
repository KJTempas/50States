<template>
    <div id="state-list">
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
//import and register StateList as a child component
import State from '@/components/State'

export default {
    name: 'StateList',
    components: {
        State
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
    }
}
</script>

<style>

</style>