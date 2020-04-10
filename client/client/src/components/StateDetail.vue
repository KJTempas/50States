<template>
    <div class="state-detail p-2">

        <h2> The State of {{state.name}}</h2>

        <p v-if="state.visited"> You have visited this state</p>
        <p v-else> You have not visited this state</p>
<!-- adding leaflet map component, binding to Vue data, adding tile layer-->
        <div id="map-container">
            <l-map 
                ref="stateMap"
                style="height: 100%; width: 100%"
                v-bind:zoom="zoom"
                v-bind:center="center">
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>
    </div>

</template>

<script>
import { LMap, LTileLayer} from 'vue2-leaflet'

export default {
    name: 'StateDetail',
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
            state: {
                name: ''
            },  //using Open Stree Map tiles (no key needed)
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 2,
            center: [44, -103], //initializes map at geographic center of US
            bounds: null
        }
    },
    mounted() {
        this.state.name = this.$route.params.state //this. refers to whatever state is after the /detail in the route path
        //prevents use from draggin map away fromstate
        this.$refs.stateMap.mapObject.dragging.disable()
        this.fetchStateData()  //call method below
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOne( this.state.name ).then( data=> {
                this.state = data
                this.zoom = data.zoom
                this.center= [data.lat, data.lon]
                //go to new center coordinates to center on state that has been fetched from the API
                this.$refs.stateMap.mapObject.flyTo(this.center, this.zoom)
            }).catch( err => console.error(err))
        }
    }
}
</script>

<style scoped>
#map-container {
    height: 30em;
}
</style>