<template>
  <div class="side-bar">
    <div class="side-bar-top">
      <div>
        <div style="display: inline;float: left;margin-top:10px;"
             :style="{'display': showSearchFlag? 'none': 'inline'}">
        <span id="published-label"
              class="blog-side-span"
              :style="{'font-weight': publishedLabelFlag?'bold':'normal',
              'border-bottom': publishedLabelFlag?'2px solid black':'0'}"
              @click="showPublished">
          目录
        </span>
          <span id="draft-label"
                class="blog-side-span"
                :style="{'font-weight': draftLabelFlag?'bold':'normal',
              'border-bottom': draftLabelFlag?'2px solid black':'0'}"
                @click="showDraft">
          暂存箱
        </span>
        </div>
        <div style="float: left"
          :style="{'display': showSearchFlag? 'inline': 'none'}" v-click-outside="handleSearchBlur">
          <el-select
            v-model="value"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            ref="fuzzySearch"
            :loading="loading">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div style="display: inline;float: right">
          <i class="el-icon-search blog-side-icon" title="搜索文章" @click="showSearch"></i>
          <el-dropdown>
          <span class="el-dropdown-link">
          <i class="el-icon-plus blog-side-icon"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>新建文章</el-dropdown-item>
              <el-dropdown-item>新建目录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-more blog-side-icon"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>网站设置</el-dropdown-item>
              <el-dropdown-item>回收站</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <el-scrollbar
        class="side-bar-scrollbar"
        wrap-style="overflow-x:hidden;"
        :style="{'display': publishedLabelFlag?'block':'none'}">
      <el-aside style="width: 100%">
        <el-menu
            style="border: none"
            class="el-menu-vertical-demo"
            :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i :class="[this.isRightArrow ? 'el-icon-arrow-right': 'el-icon-arrow-down']" style="width: 20px"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item index="2" style="left: 20px;position: relative;">
              <span slot="title" style="width: 70%;overflow:hidden;white-space:nowrap;text-overflow: ellipsis;display: block">
                导航二
              </span>
              <el-dropdown style="float: right;width: 10%">
                <span class="el-dropdown-link">
                  <i class="el-icon-more blog-side-icon"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>网站设置</el-dropdown-item>
                  <el-dropdown-item>回收站</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown style="float: right;display: inline;width: 10%">
                <span class="el-dropdown-link">
                  <i class="el-icon-plus blog-side-icon"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>新建文章</el-dropdown-item>
                  <el-dropdown-item>新建目录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

            </el-menu-item>
            <el-submenu index="3">
              <span slot="title">选项4</span>
              <el-menu-item>选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item>
            <span slot="title" style="left: 20px;position: relative">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-scrollbar>
    <el-scrollbar
      class="side-bar-scrollbar"
      wrap-style="overflow-x:hidden;"
      :style="{'display': draftLabelFlag?'block':'none'}"
    >
      <el-aside style="width: 100%">
        <el-menu
          style="border: none;"
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-scrollbar>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'Sidebar',
  data () {
    return {
      isRightArrow: true,
      isShowSearchClick: false,
      showSearchFlag: false,
      publishedLabelFlag: true,
      draftLabelFlag: false,
      isCollapse: false,
      options: [],
      value: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona',
        'Alabama', 'Alaska', 'Arizona',
        'Alabama', 'Alaska', 'Arizona',
        'Alabama', 'Alaska', 'Arizona',
        'Alabama', 'Alaska', 'Arizona']
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` }
    })

    let arrows = document.getElementsByClassName("el-submenu__icon-arrow")
    for(let i = 0;i<arrows.length;i++){
      arrows[i].style.display = "none"
    }

    let submenus = document.getElementsByClassName("el-submenu")
    for(let i = 0;i<submenus.length;i++){
      submenus[i].addEventListener('click',  this.rotationArrow)
    }

    let menuItems = document.getElementsByClassName("el-menu-item")
    for(let i = 0;i<menuItems.length;i++){
      menuItems[i].addEventListener('click',  this.rotationArrow)
    }

  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    rotationArrow () {
      this.isRightArrow = !this.isRightArrow
    },
    showPublished () {
      this.publishedLabelFlag = true
      this.draftLabelFlag = false
    },
    showDraft () {
      this.publishedLabelFlag = false
      this.draftLabelFlag = true
    },
    handleSearchBlur () {
      if (this.isShowSearchClick) {
        this.isShowSearchClick = false
        return
      }
      this.showSearchFlag = false
    },
    showSearch () {
      this.showSearchFlag = true
      this.isShowSearchClick = true
    },
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    }
  }
}
</script>

<style>
.side-bar {
  height: 100%;
  position: fixed;
  border-right: 2px solid #C0C0C0;
}
.side-bar-scrollbar{
  height: 95%;
  width: 100%;
  overflow-x:hidden;
}
.side-bar-top{
  padding-top: 2%;
  height: 5%;
}
.blog-side-icon{
  color:black;
  font-size: 25px;
  margin-right: 10px;
  margin-top: 10px
}
.blog-side-icon:hover{
  background-color: #EEEEEE;
}
.blog-side-span{
  margin-left:15px;
  padding-bottom:10px
}

</style>
