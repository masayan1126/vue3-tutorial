<template>
  <button @click="add(todo)">TODOを追加する</button>
  <p>TODOの全件数：{{ todoList.length }}</p>
  <p>TODOの全件数：{{ count }}</p>
  <p>TODOの全件数：{{ notWorkingCount }}</p>
  <ul>
    <li v-for="(todo, index) in todoList" :key="index.toString()">
      {{ todo.title }}【{{ todo.isComplete ? "完了" : "未完了" }}】
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";

export default {
  // Proxy {todoList: Proxy, add: ƒ}
  props: {
    todoList: {
      type: Array,
      required: true,
    },
    add: {
      type: Function,
      required: true,
    },
  },
  setup(props, context) {
    const todo = {
      userId: 1,
      id: 16,
      title: "cooking",
      completed: false,
    };

    // このように、TODOリストを使用してその数を計算したい場合。propsのtodoList.lengthをそのまま使うと機能しない。関数を使用する必要がある
    const count = computed(() => props.todoList.length);
    const notWorkingCount = props.todoList.length;

    return {
      todo,
      count,
      notWorkingCount,
    };
  },
};
</script>
