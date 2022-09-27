import { defineStore } from 'pinia'

export const useTasksStore = defineStore('Tasks', {
  state: () => {
    return {
      tasks: [],
      search: ''
    }
  },
  getters: {
    completed (state) {
      return state.tasks.filter(id => id.completed === true && id.title.toLowerCase().match(this.search.toLowerCase()))
    },
    todo (state) {
      return state.tasks.filter(id => id.completed !== true && id.title.toLowerCase().match(this.search.toLowerCase()))
    }
  },
  actions: {
    updateSearch (phrase) {
      this.search = phrase
    },
    loadtasks () {
      if (!localStorage.getItem('tasks')) { return }
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    },
    deleteItem (item) {
      this.tasks = this.tasks.filter(id => id !== item)
      localStorage.removeItem('tasks')
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    completedTask (item) {
      const index = this.tasks.findIndex(element => element === item)
      this.tasks[index].completed = !this.tasks[index].completed
      localStorage.removeItem('tasks')
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
})
