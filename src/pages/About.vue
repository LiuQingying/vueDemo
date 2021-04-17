<template>
  <main-layout>
    <p class="abc">About page {{content}}</p>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  // import less from './style/index.less'
  export default {
    data() {
      return {
        content: "11ss111",
      }
    },
    components: {
      MainLayout
    }
  }
</script>
<style lang="less" >
 @base-color: #39c;
.abc {
  margin: 20px;
  background: @base-color;
}
</style>
  

