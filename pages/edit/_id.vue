<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <PageHeading :title="$route.params.id" />
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="submit" method="POST" @submit.prevent="editTask()">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700"> Task title </label>
            <div class="mt-1">
              <input
                id="title"
                v-model="task.title"
                name="title"
                type="text"
                autocomplete="title"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
            </div>
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-700"> Description </label>
            <div class="mt-1">
              <textarea
                id="description"
                v-model="task.description"
                name="deescription"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import PageHeading from '@/components/PageHeading.vue'
export default {
  name: 'EditTask',
  components: { PageHeading },
  data () {
    return {
      title: '',
      description: '',
      task: {},
      tasks: []
    }
  },
  mounted () {
    this.tasks = JSON.parse(localStorage.getItem('tasks'))
    this.task = this.tasks.find(element => element.title === this.$route.params.id)
  },
  methods: {
    editTask () {
      const index = this.tasks.findIndex(element => element === this.task)
      this.tasks[index] = this.task
      localStorage.removeItem('tasks')
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
      this.$router.push('/')
    }
  }
}
</script>
