<template></template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const a = 15;
    const b = ref(a);

    console.log(a === b); // false
    console.log(a === b.value); // true

    b.value = 16;
    console.log(a, b.value); // 15, 16

    return {};
  },
};
</script>
