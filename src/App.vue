<template>
  <TodoList :todo-list="todoList" :add="add" />
</template>

<script>
import { ref, onMounted } from "vue";
import TodoList from "./components/Todo/TodoList.vue";
export default {
  components: {
    TodoList,
  },
  setup() {
    const todoList = ref([]);

    const add = (todo) => {
      todoList.value.push(todo);
    };

    // fetch todos
    onMounted(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const todos = await response.json();

      todos.forEach((todo, index) => {
        if (index >= 15) {
          return;
        }
        todoList.value.push(todo);
      });
    });

    return {
      todoList,
      add,
    };
  },
};
</script>
