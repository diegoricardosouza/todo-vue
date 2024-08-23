<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner v-if="loading" />

      <template v-else>
        <TodoFormAdd />

        <TodoItems
          v-if="$store.state.todos.length"
        />

        <TodoEmpty v-else />
      </template>
    </div>
  </div>
  <!--/ Content -->

  <!-- <RouterView /> -->
</template>

<script>
import TodoEmpty from './components/TodoEmpty.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoItems from './components/TodoItems.vue';
import TodoSpinner from './components/TodoSpinner.vue';

export default {
  name: 'App',
  components: {TodoEmpty, TodoFormAdd, TodoItems, TodoSpinner},
  data() {
    return {
      loading: false
    }
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch('getTodos')
    this.loading = false;
  }
}

// import { RouterView } from 'vue-router'
</script>
