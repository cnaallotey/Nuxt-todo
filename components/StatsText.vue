<template>
  <div>
    <div class="text-base font-normal text-gray-500 leading-5">
      {{ tasks.length }} Task{{tasks.length !== 1 ? 's' : '' }} ({{ completed.length }} completed)
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useTasksStore } from '../store/TasksStore'
export default {
  computed: {
    ...mapState(useTasksStore, ['completed', 'tasks'])
  }

}
</script>
