
<template>
    <div>
        <div v-for="segment in segments">
                <div class="card my-4">
                    <div class="card-header">
                        Segment {{segment.name}}
                    </div>
                    <div class="card-body">
                        {{segment.name}}
                    </div>
                </div>
            <!--<li v-bind:key="segment.advertiserId">{{segment.type}}</li>-->
        </div>
    </div>
</template>



<script>
    /* eslint-disable */
    export default {
        name: 'SegmentsList',
        props: {
            segmentsProp: Array
        },
        data() {
            return {
                segments: this.segmentsProp
            }
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
