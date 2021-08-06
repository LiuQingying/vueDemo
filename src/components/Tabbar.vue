<template>
  <div class="tabbar">
    <div class="tab" :class="{ active: selectTab === 0}" @click="onClickTab(0)">
      首页
    </div>
    <div class="tab" :class="{ active: selectTab === 1}" @click="onClickTab(1)">
      购物车
    </div>
    <div class="tab" :class="{ active: selectTab === 2}" @click="onClickTab(2)">
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
  data: function() {
    return {
      selectTab: 0

    }
  },
  setup: {
    setup() { console.log('1111111') }

  },

  methods: {
    onClickTab(index) {
      this.selectTab = index
      loginByUsername(1, 1, 1, 1).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

</script>

<style lang="less" scoped>
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
