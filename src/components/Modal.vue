<template>
  <div id="overlay">
    <div id="content">
      <div class="flex">
        <h3 class="title">{{ modalContent.title }}</h3>
        <span @click="closeModal()">{{ closeButtonIcon }}</span>
      </div>
      <p>{{ modalContent.message }}</p>
      <span>レシピ名：</span>
      <TextInput v-model="recipeName" />
      <button @click="register(recipeName)">登録</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TextInput from "./TextInput.vue";
export default {
  components: {
    TextInput,
  },
  props: {
    modalContent: Object,
  },
  emits: ["register", "closeModal"],
  setup(props, context) {
    const closeButtonIcon = ref("✖️");
    const register = (recipeName) => {
      context.emit("register", recipeName);
      cleanup();
      context.emit("closeModal");
    };

    const recipeName = ref("");

    const cleanup = () => (recipeName.value = "");

    return {
      closeButtonIcon,
      recipeName,
      register,
    };
  },
};
</script>

<style>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

.flex {
  display: flex;
  justify-content: space-between;
}

#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}

.title {
  text-align: left;
  margin-top: 0px;
}
</style>
