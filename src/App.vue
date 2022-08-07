<template>
  <p>{{ reactiveHuman.name }}</p>
  <p>{{ reactiveHuman.age }}</p>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";

export default {
  setup() {
    const human = {
      name: "masayan",
      age: 28,
    };
    const reactiveHuman = reactive(human);

    console.log(reactiveHuman); // Proxy {name: 'masayan', age: 28}
    console.log(reactiveHuman.age); // 28

    reactiveHuman.age = 25; // OK(.valueは不要)

    console.log(reactiveHuman); // Proxy {name: 'masayan', age: 25}

    // reactiveHuman = {
    //   name: "hogemaru",
    //   age: 35,
    // }; // Uncaught TypeError: Assignment to constant variable.(再代入不可。refなら可)

    // const { name, age } = reactiveHuman; // NG(name, ageはリアクティブではなくなる)
    // const name = toRef(reactiveHuman, "name"); // 単一(toRef(オブジェクト, 対象のキー))
    const { name, age } = toRefs(reactiveHuman); // 複数

    return { reactiveHuman, name, age };
  },
};
</script>
