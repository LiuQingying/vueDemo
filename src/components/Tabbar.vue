<template>
  <div class="tabbar">
    <div class="tab" :class="{ active: selectedTab === 0}" @click="onClickTab(0)">
      首页
    </div>
    <div class="tab" :class="{ active: selectedTab === 1}" @click="onClickTab(1)">
      购物车
    </div>
    <div class="tab" :class="{ active: selectedTab === 2}" @click="onClickTab(2)">
      我的
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
export function loginByUsername(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/user',
    method: 'get',
    data
  })
}
export default {
  name: 'Tabbar',
  props: {
    clickTab: {
      type: Function,
      default: function() {}
    },
    selectTab: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      selectedTab: this.selectTab
    }
  },
  setup: {
    setup() { console.log('1111111') }

  },

  methods: {
    onClickTab(index) {
      this.clickTab(index)
      this.selectedTab = index
      switch (index) {
        case 0:
          this.$router.push('homepage')

          break
        case 1:
          this.$router.push('shopping')

          break
        default:
          this.$router.push('my')
          break
      }
      loginByUsername(1, 1, 1, 1).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

</script>

<style lang="scss" scoped>
  .tabbar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0px;
    height: 40px;
    width: 100vw;
    background-color: aquamarine;
    .tab {
      width: calc(100vw / 3);
    }
    .active {
      color: red;
    }
  }
</style>
