
<template>
    <div>
        <ul v-for="segment in segments">

            <li v-bind:key="segment.advertiserId">{{segment.type}}</li>
        </ul>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'SegmentsList',
        props: {
            segments: Array
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
