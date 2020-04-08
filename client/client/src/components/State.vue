<template>
    <div class="state-summary p-2 rounded">

        <span class="m-2">{{ state.name }}</span>
        <p>
            <input id="visited" class="m-2" type="checkbox">
        </p>

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
</style>