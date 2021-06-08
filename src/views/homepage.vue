<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  name: 'Homepage',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      title: '标题'
    }
  }
}
</script>
