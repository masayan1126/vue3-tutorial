<template>
  <Modal
    :modal-content="modalContent"
    @close-modal="closeModal"
    v-show="isOpen"
    @register="registerRecipe"
  />
  <!-- <Modal2
    :modal-content="modalContent"
    @close-modal="closeModal"
    v-show="isOpen"
    @register="registerRecipe"
  /> -->
  <RecipeList :recipe-list="recipeList" />
  <p>合計レシピ数: {{ recipeListCount }}</p>
  <button @click="openModal()">レシピを追加する</button>
</template>

<script>
import Modal from "./components/Modal.vue";
import Modal2 from "./components/Modal2.vue";
import RecipeList from "./components/RecipeList.vue";
import { reactive, ref, computed, watch } from "vue";

export default {
  components: {
    Modal,
    Modal2,
    RecipeList,
  },
  setup() {
    //   モーダル関連のロジック
    const modalContent = reactive({
      title: "レシピの登録",
      message: "これはレシピの登録を行うフォームです",
    });
    const isOpen = ref(false);
    const openModal = () => (isOpen.value = true);
    const closeModal = () => (isOpen.value = false);

    // レシピリスト関連のロジック
    const recipeList = ref(["ハンバーグ", "オムライス", "スパゲティ"]);

    const recipeListCount = computed({
      get: () => recipeList.value.length,
      set: (val) => {
        // something set
      },
    });

    watch(recipeListCount, (count, prevCount) => {
      console.log(count);
    });

    const registerRecipe = (recipe) => recipeList.value.push(recipe);

    return {
      modalContent,
      isOpen,
      openModal,
      closeModal,
      recipeListCount,
      recipeList,
      registerRecipe,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
