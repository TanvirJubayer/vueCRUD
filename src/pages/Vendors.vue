<template>
  <div>
    <h3>Vendors Dtail</h3>
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Address</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="vendor in vendors" :key="vendor.id">
                <td>{{ vendor.id }}</td>
                <td>{{ vendor.name }}</td>
                <td>{{ vendor.email }}</td>
                <td>{{ vendor.phone }}</td>
                <td>{{ vendor.address }}</td>
                <td>
                    <router-link :to="`/vendor/edit/${vendor.id}`">Edit</router-link>
                    <button @click="deleteVendor(vendor.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';

    let vendors = ref([]);
    
    const getVendors = () => {
    axios.get(`http://127.0.0.1:8000/api/vendor`)
    .then(res =>{
        console.log(res.data)
        vendors.value = res.data
    })
    .catch(err =>{
        console.log(err)
    })
}

const deleteVendor = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/vendor/${id}`)
    .then(res =>{
        console.log(res.data)
        getVendors()
    })
    .catch(err =>{
        console.log(err)
    })
}

onMounted(()=>{
    getVendors()
})
</script>

<style>

</style>