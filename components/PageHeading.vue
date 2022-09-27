<template>
  <div>
    <h2 class=" text-center text-3xl font-extrabold text-gray-900">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tasks'
    }
  }
}
</script>
