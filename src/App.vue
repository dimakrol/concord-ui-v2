<template>
  <div id="app">
      <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <img class="logo" alt="Ad-Center logo" src="./assets/logo.png">
          </nav>
          <div class="my-4">
              <NewSegmentForm></NewSegmentForm>
          </div>
          <SegmentsList></SegmentsList>
      </div>
  </div>
</template>

<script>
import SegmentsList from './components/SegmentsList.vue'
// import NewSegmentModal from './components/segmentModals/NewSegmentModal'
import NewSegmentForm from './components/NewSegmentForm.vue';

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
        SegmentsList,
        NewSegmentForm
    },
    mounted() {
    }
}
</script>

<style>
    .logo {
        width: 50px;
        height: 50px;
    }
</style>
