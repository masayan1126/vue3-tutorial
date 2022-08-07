<template>
  <p>TODOリストとは無関係のリアクティブな値：{{ other }}</p>
  <button @click="updateOther">
    TODOリストとは無関係のリアクティブな値を更新する
  </button>
  <button @click="add">TODOを追加する</button>
  <p>TODOの全件数：{{ workingCount1() }}</p>
  <p>TODOの全件数：{{ workingCount2 }}</p>
  <ul>
    <li v-for="(todo, index) in todoList" :key="index.toString()">
      {{ todo.title }}【{{ todo.isComplete ? "完了" : "未完了" }}】
    </li>
  </ul>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const todoList = ref([]);

    const add = () => {
      const todo = {
        title: "洗濯",
        isComplete: false,
      };
      todoList.value.push(todo);
    };

    const other = ref("other value");
    const updateOther = () => (other.value = "updated other value");

    const workingCount1 = () => {
      console.log("reassessmente method !!");
      return todoList.value.length;
    };
    const workingCount2 = computed(() => {
      console.log("reassessmente computed !!");
      return todoList.value.length;
    });

    return {
      todoList,
      add,
      other,
      updateOther,
      workingCount1,
      workingCount2,
    };
  },
};
</script>
