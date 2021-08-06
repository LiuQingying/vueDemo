<template>
  <div>
    <tabbar />
    <h1>{{ title }}</h1>
    <button :class="{active: isActive}" :style="styleObject" @click="reverseMessage">
      反转消息
    </button>
    <input v-model="question">
  </div>
</template>
<script>
import Tabbar from '../components/Tabbar.vue'
export default {
  name: 'Homepage',
  components: {
    Tabbar
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      title: '标题',
      question: '',
      isActive: true,
      styleObject: {
        color: 'red',
        fonSize: '13px',
        display: 'block'
      }
    }
  },
  watch: {
    title(value) {
      console.log('title值改变', value)
    },
    question(newQ, old) {
      console.log(newQ, old)
    }
  },
  methods: {
    reverseMessage() {
      this.title = this.title.split('').reverse().join('')
    }
  }
}
</script>
<style scoped>
  .active {
    height: 40px;
  }
</style>
