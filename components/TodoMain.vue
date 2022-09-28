<template>
  <div>
    <section>
      <div class="w-full h-full">
        <div class="max-w-screen-md mx-auto p-8 sm:p-4">
          <div class="w-full flex items-center justify-between mt-6">
            <PageHeading /><StatsText />
          </div>
          <div class="w-full mt-4 flex justify-between space-x-2">
            <input
              v-model="search"
              type="search"
              class="px-3 py-2 border border-gray-200 flex-1 rounded-md text-sm font-normal text-gray-700 w-full"
              placeholder="search task"
              @change="updateSearch(search)"
            >
            <NuxtLink
              to="/additem"
              class="w-fit px-5 py-2 bg-blue-600 rounded-md text-white font-semibold tracking-tight"
            >
              Add new task
            </NuxtLink>
          </div>
          <div class="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="w-full">
              <p class="text-gray-900 font-semibold text-xl tracking-normal">
                To Do
              </p>
              <div class="bg-red-200 w-full p-4 mt-4 rounded-lg space-y-4">
                <TaskCard v-for="item in todo" :key="item.index" v-bind="{item:item, deleteItem: deleteItem, completedTask:completedTask}" />
              </div>
            </div>
            <div class="w-full">
              <p class="text-gray-900 font-semibold text-xl tracking-normal">
                Completed
              </p>
              <div class="bg-green-200 w-full p-4 mt-4 rounded-lg space-y-4">
                <TaskCard v-for="item in completed" :key="item.index" v-bind="{item:item, deleteItem: deleteItem, completedTask:completedTask}" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useTasksStore } from '../store/TasksStore'
import taskCard from './TaskCard.vue'
import PageHeading from './PageHeading.vue'

export default {
  components: {
    taskCard,
    PageHeading
  },
  data () {
    return {
      tasks: [],
      search: null
    }
  },
  computed: {
    ...mapState(useTasksStore, ['completed', 'todo'])
  },
  watch: {
    // whenever value changes, this function will run
    search (newValue, oldValue) {
      this.updateSearch(newValue)
    }
  },
  mounted () {
    this.loadtasks()
  },
  methods: {
    ...mapActions(useTasksStore, ['deleteItem', 'completedTask', 'loadtasks', 'updateSearch'])
  }
}
</script>
