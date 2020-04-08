<template>
    <div id="state-list">
<!--flex-wrap displays comonents in a grid -->
        <div class="d-flex flex-wrap justify-content-arrow">
            <div class="p-2" v-for="state in states" v-bind:key="state.name">
                <State
                    v-bind:state="state"
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
    }
}
</script>

<style>

</style>