<template>
  <div id="app">
      <div class="container">
          <SegmentsList :segments="segments"></SegmentsList>
      </div>
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

export default {
    name: 'app',
    data() {
        return {
            segments: segmentsList
        }
    },
    components: {
        SegmentsList
    },
    mounted() {
    }
}
</script>

<style>
</style>
