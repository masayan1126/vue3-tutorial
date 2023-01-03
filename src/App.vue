<script setup>
import { onMounted, ref } from 'vue'

const name = ref()

onMounted(() => {
    fetch(`http://localhost:5000/user`)
    .then((response) => response.json())
    .then((json) => {
        name.value = json.name
    });
})


</script>

<template>
  <p>{{ name }}</p>
</template>