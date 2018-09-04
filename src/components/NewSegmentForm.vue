<template>
    <div>
        <h5>{{this.formTitle}}</h5>
        <form @submit.prevent="save">
            <div class="row">
                <div class="col">
                    <input v-model="segment.name" type="text" class="form-control" placeholder="Segment name" required>
                </div>
            </div>

            <div v-for="(and, andFilterIndex) in segment.andFilters">
                <div class="row my-3">
                    <div class="col">
                        <select v-model="and.include" class="form-control">
                            <option :value="true">Include</option>
                            <option :value="false">Exclude</option>
                        </select>
                    </div>
                    <div class="col">
                        <select v-model="and.type" class="form-control">
                            <option selected>Type </option>
                            <option value="vid">Vid</option>
                        </select>
                    </div>
                    <div class="col">
                        <select v-model="and.advertiserId" class="form-control">
                            <option :value="null" selected>Choose Advertiser</option>
                            <option v-for="advertiser in advertisers" value="advertiser.id">{{advertiser.name}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select v-model="and.conversionType"  class="form-control">
                            <option selected>Choose Conversion Type</option>
                            <option value="sale">Sale</option>
                        </select>
                    </div>
                    <div class="col">
                        <input v-model="and.dates.from" type="date" class="form-control">
                    </div>
                    <div class="col">
                        <input v-model="and.dates.to" type="date" class="form-control">
                    </div>
                    <div v-if="1 < segment.andFilters.length" class="col">
                        <div class="btn btn-warning" @click="delAndFilter(andFilterIndex)">Del And</div>
                    </div>
                </div>
                <div v-for="(or, orIndexFilter) in and.orFilters">
                    <h6>Or</h6>
                    <div class="row my-3">
                        <div class="col">
                            <select v-model="or.include" class="form-control">
                                <option :value="true">Include</option>
                                <option :value="false">Exclude</option>
                            </select>
                        </div>
                        <div class="col">
                            <select v-model="or.type" class="form-control">
                                <option selected>Type </option>
                                <option value="vid">Vid</option>
                            </select>
                        </div>
                        <div class="col">
                            <select v-model="or.advertiserId" class="form-control">
                                <option :value="null" selected>Choose Advertiser</option>
                                <option v-for="advertiser in advertisers" value="advertiser.id">{{advertiser.name}}</option>
                            </select>
                        </div>
                        <div class="col">
                            <select v-model="or.conversionType"  class="form-control">
                                <option selected>Choose Conversion Type</option>
                                <option value="sale">Sale</option>
                            </select>
                        </div>
                        <div class="col">
                            <input v-model="or.dates.from" type="date" class="form-control">
                        </div>
                        <div class="col">
                            <input v-model="or.dates.to" type="date" class="form-control">
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
            <div class="row my-3">
                <div class="col">
                    <button class="btn btn-success">Save</button>
                    <div class="btn btn-danger mx-3" @click="clearForm">Clear</div>
                </div>
            </div>
        </form>

    </div>
</template>


<script>
import {advertisers, defaultSegment, defaultAnd, defaultOr} from '../defaultData';
import uuid from 'uuid/v4';

export default {
    name: 'NewSegmentForm',
    props: {
    },
    data() {
        return {
            segment: this.getDefaultSegment(),
            advertisers,
            formTitle: 'Create Segment',
        }
    },
    methods: {
        getDefaultSegment() {
            return {
                name: '',
                andFilters: [ //array of filters
                    {
                        include: true, //true or false
                        type: 'vid', //vid
                        advertiserId: null, //1,2,3
                        conversionType: 'sale', //sale
                        dates: {
                            from: '',
                            to: '',
                        },
                        orFilters: []
                    }
                ],
            };
        },
        clearForm() {
            // console.log( {...defaultSegment});
            this.segment = this.getDefaultSegment();
            this.formTitle = 'Create Segment';
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
            this.segment.andFilters[andIndex].orFilters.splice(orIndex, 1);
        },
        save() {
            if (!this.segment.id) {
                this.createSegment();
                return;
            }
            this.updateSegment();
        },
        createSegment() {
            this.segment.id = uuid();
            this.$emit('createSegment', {segment: this.segment});
            this.clearForm();
        },
        updateSegment() {
            this.$emit('updateSegment', {segment: this.segment});
            this.clearForm();
        },
        prepareUpdate(segment) {
            this.segment = {...segment};
            this.formTitle = `Update Segment ${this.segment.name}`
            // console.log('in child component: ', segment);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
