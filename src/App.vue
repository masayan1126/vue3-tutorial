<template>
  <button @click="add">TODOを追加する</button>
  <p>TODOの全件数：{{ notWorkingCount }}</p>
  <!-- ただ要素数を返すだけのシンプルなものであれば、これでもOK(もちろん、対象がリアクティブな値であることが前提) -->
  <!-- <p>{{ todoList.length }}</p> -->
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

    const notWorkingCount = todoList.value.length;
    // const notWorkingCount = ref(todoList.value.length); // こちらもnot working

    const workingCount1 = () => {
      return todoList.value.length;
    };
    const workingCount2 = computed(() => {
      return todoList.value.length;
    });

    return {
      todoList,
      add,
      notWorkingCount,
      workingCount1,
      workingCount2,
    };
  },
};
</script>
