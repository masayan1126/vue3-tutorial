<template>
  <p>現在のカウント数:{{ current }}</p>
  <div>
    <button @click="current++">カウントアップ</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // const current = 0; //　not reactive
    const current = ref(0); // reactive

    return {
      current,
    };
  },
};
</script>
