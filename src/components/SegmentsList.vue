
<template>
    <div>
        <div v-for="segment in segments">
                <div class="card my-4">
                    <div class="card-header">
                        Segment {{segment.name}}
                        <div @click="prepareEdit(segment.id)" class="btn btn-primary float-right mx-3">Edit</div>
                        <div class="btn btn-danger float-right">Delete</div>
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
        methods: {
            prepareEdit(id) {
                console.log('segment list: ', id);
                this.$emit('prepareEdit', id);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
