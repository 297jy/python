<template>
  <el-container>
    <Sidebar style="width: 20%;"/>
      <el-container style="left:20%;width: 60%;position: fixed;height: 100%;">
        <el-header style="height: 0">
          <el-button type="success" @click="editArticle">编辑</el-button>
        </el-header>
        <el-main style="margin-left: 10%;word-wrap: break-word;word-break: break-all">
          <h1 v-html="title" style="font-size: 40px"></h1>
          <div v-html="content"></div>
        </el-main>
      </el-container>
  </el-container>
</template>

<script>

import {Sidebar} from './components'

export default {
  name: 'Layout',
  components: {Sidebar},
  data () {
    return {
      title: "测试标题",
      content: "<h1>test</h1>",
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    editArticle() {
      this.$router.push({path: '/edit'})
    }
  },
  mounted() {
  }
}
</script>

<style>
.el-aside::-webkit-scrollbar {
  display: none;
}

</style>
