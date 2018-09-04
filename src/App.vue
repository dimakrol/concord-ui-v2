<template>
  <div id="app">
      <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <img class="logo" alt="Ad-Center logo" src="./assets/logo.png">
          </nav>
          <div class="my-4">
              <NewSegmentForm ref="segmentForm" @createSegment="createSegment"></NewSegmentForm>
          </div>
          <SegmentsList @prepareEdit="action" :segments-prop="segments"></SegmentsList>
      </div>
  </div>
</template>

<script>
import SegmentsList from './components/SegmentsList.vue'
// import NewSegmentModal from './components/segmentModals/NewSegmentModal'
import swal from 'sweetalert2'

import NewSegmentForm from './components/NewSegmentForm.vue';

export default {
    name: 'app',
    data() {
        return {
            segments: []
        }
    },
    methods: {
        createSegment(payload) {
            this.segments.push(payload.segment);
            swal({
                title: 'Success!',
                text: 'Segment created!!!',
                type: 'success',
                confirmButtonText: 'Cool'
            })
        },
        action(id) {
            const segment = this.segments.find(segment => segment.id === id);
            this.$refs.segmentForm.prepareUpdate(segment)
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
