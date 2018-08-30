<template>
  <div id="app">
      <SegmentsList :segments="segments"></SegmentsList>
  </div>
</template>

<script>
import SegmentsList from './components/SegmentsList.vue'

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
const a = {
    a: 'a',
    b: 'b',
};

export default {
    name: 'app',
    data() {
        return {
            b: {...a},
            segments: segmentsList
        }
    },
    components: {
        SegmentsList
    },
    mounted() {
        console.log(this.b)
    }
}
</script>

<style>
</style>
