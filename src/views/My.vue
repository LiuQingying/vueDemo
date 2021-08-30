<template>
  <div>
    <div>
      我的
    </div>

    <tabbar :select-tab="2" />
  </div>
</template>

<script>
import Tabbar from '../components/Tabbar.vue'
export default {
  name: 'My',
  components: {
    Tabbar
  }
}
</script>

