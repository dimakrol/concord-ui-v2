<template>
    <div>
        <form>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Segment name">
                </div>
            </div>

            <div v-for="(and, andFilterIndex) in segment.andFilters">
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
                    <div v-if="1 < segment.andFilters.length" class="col">
                        <div class="btn btn-warning" @click="delAndFilter(andFilterIndex)">Del And</div>
                    </div>
                </div>
                <div v-for="(or, orIndexFilter) in and.orFilters">
                    <h6>Or</h6>
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
                        <div class="col">
                            <div class="btn btn-danger" @click="deleteOrFilter(andFilterIndex, orIndexFilter)">Del Or</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="btn btn-primary float-right" @click="addOrFilter(andFilterIndex)">Add Or</div>
                    </div>
                </div>

                And <hr>
            </div>
            <!--<hr>-->
            <div class="row">
                <div class="col">
                    <div class="btn btn-primary" @click="addAndFilter">Add And</div>
                </div>
            </div>
        </form>

    </div>
</template>


<script>
import {advertisers, defaultAnd, defaultOr} from '../defaultData';


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
            //todo
            console.log('here')
        },
        addAndFilter() {
            this.segment.andFilters.push({...defaultAnd})
        },
        addOrFilter(index) {
            this.segment.andFilters[index].orFilters.push({...defaultOr})
        },
        delAndFilter(index) {
            this.segment.andFilters.splice(index, 1);
        },
        deleteOrFilter(andIndex, orIndex) {
            console.log(andIndex, ' ... ',orIndex);
            this.segment.andFilters[andIndex].orFilters.splice(orIndex, 1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
