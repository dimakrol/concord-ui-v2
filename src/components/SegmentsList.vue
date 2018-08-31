
<template>
    <div>
        <div v-for="segment in segments">
                <div class="card my-4">
                    <div class="card-header">
                        Segment {{segment.advertiserId}}
                    </div>
                    <div class="card-body">
                        {{segment.type}}
                    </div>
                </div>
            <!--<li v-bind:key="segment.advertiserId">{{segment.type}}</li>-->
        </div>
    </div>
</template>



<script>
    const segmentsList = [
        {
            include: 'true', //true or false
            type: 'a', //vid
            advertiserId: 1, //1,2,3
            conversionType: 'sale', //sale
        },
        {
            include: 'false', //true or false
            type: 'b', //vid
            advertiserId: 2, //1,2,3
            conversionType: 'sale', //sale
        },
        {
            include: 'true', //true or false
            type: 'c', //vid
            advertiserId: 3, //1,2,3
            conversionType: 'sale', //sale
        },
    ];


    /* eslint-disable */
    export default {
        name: 'SegmentsList',
        // props: {
        //     segments: Array
        // },
        data() {
            return {
                segments: segmentsList
            }
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
