<template>
    <div>
        <form>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Segment name">
                </div>
            </div>

            <div v-for="(and, index) in segment.andFilters">
                <div class="row my-3">
                    <div class="col">
                        <select class="form-control">
                            <option :value="true">Include</option>
                            <option :value="false">Exclude</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="btn btn-primary float-right">Or</div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="btn btn-primary" @click="addAnd">And</div>
                </div>
            </div>


        </form>

    </div>
</template>


<script>
import {advertisers, defaultAnd} from '../defaultData';


export default {
    name: 'NewSegmentForm',
    props: {
    },
    data() {
        return {
            segment: {
                andFilters: [ //array of filters
                    {
                        include: '', //true or false
                        type: '', //vid
                        advertiserId: '', //1,2,3
                        conversionType: '', //sale
                        dates: {
                            from: '',
                            to: '',
                        },
                        orFilters: [
                            {
                                include: '', //true or false
                                type: '', //vid
                                advertiserId: '', //1,2,3
                                conversionType: '', //sale
                                dates: {
                                    from: '',
                                    to: '',
                                },
                            }
                        ]
                    }
                ],
            },
            advertisers: advertisers
        }
    },
    methods: {
        clearSegment() {
            console.log('here')
        },
        addAnd() {
            this.segment.andFilters.push({...defaultAnd})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
