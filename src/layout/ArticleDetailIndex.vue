<template>
  <el-container>
    <el-header style="position: sticky;top: 0;width: 100%;background-color: white;">
      <el-menu :default-active=" activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-container style="background-color: #F4F5F5;min-height: 1000px;">
        <el-aside style="width: 10%;"></el-aside>
        <el-main style="">
          <div id="article-container" style="padding: 10px;">
            <ul style="list-style:none;;margin-left: 10px;margin-top: 20px;padding: 0;padding-right: 20px;">
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list" id="test1">2级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
            </ul>


          </div>
        </el-main>
        <el-aside style="width: 35%;height: 600px;">
          <div id="category-container" style="padding: 10px;position: fixed;width: 20%;height: 500px;">
            <div
              style="border-bottom: 1px solid #E6DFDC ;height: 40px;margin-left: 10px;margin-right: 10px;margin-top: 10px;">
              目录
            </div>
            <el-scrollbar style="height:90%;" wrap-style="overflow-x:hidden;">
              <ul
                style="list-style:none;;margin-left: 10px;margin-top: 20px;padding: 0;padding-right: 20px; height: 450px;">
                <li style="height: 20px;padding: 10px;" class="category-title-list"><a href="#test1">一级标题</a></li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
                <li style="height: 20px;padding: 10px;" class="category-title-list">一级标题</li>
              </ul>
            </el-scrollbar>
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>


  export default {
    name: 'ArticleDetailLayout',
    components: {},
    data () {
      return {
        test: "<div>test</div>",
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      testClick () {
        let demoObj = document.getElementById("test1")
        window.scrollTo(0, demoObj.offsetTop)
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .category-title-list:hover {
    background-color: #FAF8F7;
  }

  .author-span :hover {
    color: red;
    cursor: pointer;
  }

  .article-li :hover {
    background-color: #fafafa;
  }

  #article-container {
    float: right;
    width: 90%;
    margin: 10px auto 150px auto;
    background-color: #fff;
    padding: 20px 0px 50px 0px;
    border: 1px solid #e8e8e8;
    box-shadow: 0 2px 10px rgb(0 0 0 /12%);
  }

  #category-container {
    float: left;
    width: 50%;
    margin: 30px auto 150px auto;
    background-color: #fff;
    padding: 20px 0px 50px 0px;
    border: 1px solid #e8e8e8;
    box-shadow: 0 2px 10px rgb(0 0 0 /12%);
  }
</style>