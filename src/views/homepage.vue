<template>
  <div>
    <tabbar :click-tab="onClickTab" :select-tab="0" />
    <h1>{{ title }}</h1>
    <button :class="{active: isActive}" :style="styleObject" @click="reverseMessage">
      反转消息
    </button>
    <input v-model="question" class="input-test">
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
        fonSize: '13px'
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
  created() {
    console.log('Component is mounted!', this.title)
  },
  methods: {
    reverseMessage() {
      this.question = this.question.split('').reverse().join('')
    },

    onClickTab(index) {
      console.log('点击', index)
    }
  }
}
</script>
<style scoped>
  .active {
    height: 40px;
  }
  .input-test {
    height: 35px;
  }
</style>
