<template>
    <div class="state-detail p-2">

        <h2> The State of {{state.name}}</h2>

        <p v-if="state.visited"> You have visited this state</p>
        <p v-else> You have not visited this state</p>
    </div>

</template>

<script>
export default {
    name: 'StateDetail',
    data() {
        return {
            state: {
                name: ''
            }
        }
    },
    mounted() {
        this.state.name = this.$route.params.state //this. refers to whatever state is after the /detail in the route path
        this.fetchStateData()  //call method below
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOne( this.state.name ).then( data=> {
                this.state = data
            }).catch( err => console.error(err))
        }
    }
}
</script>

<style scoped>
</style>