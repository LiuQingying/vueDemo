<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="reverseMessage">
      反转消息
    </button>
  </div>
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
  },
  methods: {
    reverseMessage() {
      this.title = this.title.split('').reverse().join('')
    }
  }
}
</script>
