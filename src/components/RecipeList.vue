<!-- scriptとtemplateが逆 -->
<script setup>
import { ref } from "vue";

// 他にも、defineEmitsやdefineExposeなど
const props = defineProps({
  recipeList: Array,
});

// return不要
const recipes = ref(props.recipeList);
</script>

<template>
  <ul>
    <!-- 本来はidなどをkeyに指定する -->
    <li v-for="(recipe, index) in recipes" :key="index">{{ recipe }}</li>
  </ul>
</template>

<style>
ul {
  text-align: left;
}
</style>
