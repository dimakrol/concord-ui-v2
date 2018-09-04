<template>
  <div id="app">
      <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <img class="logo" alt="Ad-Center logo" src="./assets/logo.png">
          </nav>
          <div class="my-4">
              <NewSegmentForm></NewSegmentForm>
          </div>
          <SegmentsList :segments-prop="segments"></SegmentsList>
      </div>
  </div>
</template>

<script>
import SegmentsList from './components/SegmentsList.vue'
// import NewSegmentModal from './components/segmentModals/NewSegmentModal'
import NewSegmentForm from './components/NewSegmentForm.vue';

export default {
    name: 'app',
    data() {
        return {
            segments: []
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
