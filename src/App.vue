<script setup>
import { onMounted, ref } from 'vue'

// const todos = ref([])
const name = ref()


const params = {method : "GET", body : JSON.stringify({shippingAddressId : "1"})};
onMounted(() => {
    // fetch(`http://localhost:80/tsukurioki/api/delivery-time/candidates?shippingAddressId=${25}`)
    fetch(`http://localhost:5000/user`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        name.value = json.name
        // todos.value.push(data)
    });
})


</script>

<template>
  <p>{{ name }}</p>
  <ul>
    <li v-for="todo in todos">{{ todo.title }}</li>
  </ul>
</template>