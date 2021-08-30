<template>
  <div>
    <div>
      购物车
    </div>
    <tabbar :select-tab="1" />
  </div>
</template>

<script>
import Tabbar from '../components/Tabbar.vue'
export default {
  name: 'ShoppingCart',
  components: {
    Tabbar
  }
}
</script>

