<template>
    <div class="state-summary p-2 rounded">

        <span class="m-2">{{ state.name }}</span>
        <p>
            <input id="visited" class="m-2" type="checkbox"
            v-model="stateVisited" v-on:change="$emit('isVisited', stateName, stateVisited)">
        </p>
<!--when box is checked, emit isVisited to parent;  v-model is linked to stateVisited data/prop-->
        <p>
            <router-link v-bind:to="{ name: 'detail', params: { state: stateName } }">
                <img class="map-icon" src="@/assets/icons8-map.png"> 
            </router-link>
        </p>
   <!-- image element is inside router-link; v-bind to set name param in the router-link-->
    </div>
</template>

<script>
export default {
    name: 'State',
    props: {
        state: Object
    },
    data() {
        return {
            stateName: this.state.name,
            stateVisited: this.state.visited,
        }
    }
}
</script>

<style scoped>
    .state-summary {
        height: 8em;
        width: 10em;
        border: 1px #EEE solid;
        background-color: whitesmoke;
    }

    .map-icon {
        width: 2em;  /* setting size of the icon*/
        height: 2em;
    }
</style>