<template>
  <el-container style="width: 100%">
    <el-header style="height: 10%;width: 100%">
        <el-button @click="updateArticle"  v-loading="updateButtonLoading">更新</el-button>
    </el-header>
    <el-container>
      <el-aside width="15%"></el-aside>
      <el-main>
        <tencent-editor ref="tencentEditor"/>
      </el-main>
      <el-aside width="15%"></el-aside>
    </el-container>
  </el-container>
</template>

<script>

import {TencentEditor} from './components'

export default {
  name: 'EditArticleLayout',
  components: {TencentEditor},
  data() {
    return {
      isCollapse: false,
      updateButtonLoading: true
    }
  },
  methods: {
    updateArticle() {
      const editor = this.$refs.tencentEditor.editor;
      if (editor === null) {
        return
      }

      this.$message({
        message: '内容发布成功',
        type: 'success'
      });
      console.log("html:" + editor.getHtml())
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>
.el-aside::-webkit-scrollbar {
  display: none;
}

</style>
