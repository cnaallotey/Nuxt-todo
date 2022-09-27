<template>
  <Todo />
</template>

<script>
import Todo from '../components/TodoMain.vue'
import {useTasksStore} from '@/store/TasksStore.js'
import { mapActions } from 'pinia';

export default {
  name: 'Home',
  components: { Todo },
  methods: {
      ...mapActions(useTasksStore, ['loadtask'])
  },
  mounted() {
  }
}
</script>
