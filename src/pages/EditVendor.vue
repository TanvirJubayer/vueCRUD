<template>
    <h4>Create Vendor</h4>
    <div>
        <!-- {{ vendor }} -->
        <form @submit.prevent="upateVendor">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" v-model="vendor.name" id="name">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" v-model="vendor.email" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">phone</label>
                <input type="text" class="form-control" v-model="vendor.phone" id="phone">
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">address</label>
                <input type="text" class="form-control" v-model="vendor.address" id="address">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

let route = useRoute()
let router = useRouter()
let vendor = ref({
    name:'',
    email:'',
    phone:'',
    address:'',

})

let vendorId = route.params.id

const getVendor = () => {
    axios.get(`http://127.0.0.1:8000/api/vendor/${vendorId}`)
    .then(res =>{
        console.log(res.data)
        vendor.value = res.data
    })
    .catch(err =>{
        console.log(err)
    })
}

const upateVendor = () => {
    const id = route.params.id
    axios.put(`http://127.0.0.1:8000/api/vendor/${id}`, vendor.value)
    .then(res =>{
        console.log(res.data)
        router.push('/vendor')
    })
    .catch(err =>{
        console.log(err)
    })
}

onMounted(()=>{
    getVendor()
})
</script>

<style scoped>
    button{
        background-color: green;
    }
</style>