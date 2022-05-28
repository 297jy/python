<template>
  <el-container style="height: 100%;">
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

      <el-container style="background-color: #F4F5F5;min-height: 1000px;width: 100%;">
        <el-aside width="20%"></el-aside>
        <div style="width: 60%;">
          <el-main>
            <div id="article-container">
              <div
                style="height: 30px;margin: 0;border-bottom: 1px solid #E6DFDC;padding-left: 25px;font-size: 13px;color: grey;font-weight: 500;">
                <span>推荐</span>
                <el-divider direction="vertical"></el-divider>
                <span>最新</span>
                <el-divider direction="vertical"></el-divider>
                <span>热榜</span>
              </div>
              <ul style="list-style:none;margin: 0;padding: 0;">
                <li style="height: 122px;padding: 0;margin: 0;width: 100%;" class="article-li">
                  <div style="padding-left: 20px;padding-right: 20px;">
                    <div style="padding-top: 10px; font-size: 13px;color: grey;">
                      <span class="author-span">297</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>1天前</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>java</span>
                    </div>
                    <div style="border-bottom: 1px solid #E6DFDC;">
                      <div style="font-weight: bolder;margin-top: 10px;">看看别人家的接口</div>
                      <div style="margin-top: 10px;font-size: 13px;color: grey;">接口性能优化对于后端同学而言</div>
                      <div style="margin-top: 10px;margin-bottom: 5px;">
                        <i class="el-icon-view"><span
                            style="font-size: 13px;color: grey;margin-left: 5px;">2.7w</span></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li style="height: 122px;padding: 0;margin: 0;width: 100%;" class="article-li">
                  <div style="padding-left: 20px;padding-right: 20px;">
                    <div style="padding-top: 10px; font-size: 13px;color: grey;">
                      <span class="author-span"><i style="font-style:normal">297</i></span>
                      <el-divider direction="vertical"></el-divider>
                      <span>1天前</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>java</span>
                    </div>
                    <div style="border-bottom: 1px solid #E6DFDC;">
                      <div style="font-weight: bolder;margin-top: 10px;">看看别人家的接口</div>
                      <div style="margin-top: 10px;font-size: 13px;color: grey;">接口性能优化对于后端同学而言</div>
                      <div style="margin-top: 10px;margin-bottom: 5px;">
                        <i class="el-icon-view"><span
                            style="font-size: 13px;color: grey;margin-left: 5px;">2.7w</span></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li style="height: 122px;padding: 0;margin: 0;width: 100%;" class="article-li">
                  <div style="padding-left: 20px;padding-right: 20px;">
                    <div style="padding-top: 10px; font-size: 13px;color: grey;">
                      <span class="author-span">297</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>1天前</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>java</span>
                    </div>
                    <div style="border-bottom: 1px solid #E6DFDC;">
                      <div style="font-weight: bolder;margin-top: 10px;">看看别人家的接口</div>
                      <div style="margin-top: 10px;font-size: 13px;color: grey;">接口性能优化对于后端同学而言</div>
                      <div style="margin-top: 10px;margin-bottom: 5px;">
                        <i class="el-icon-view"><span
                            style="font-size: 13px;color: grey;margin-left: 5px;">2.7w</span></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li style="height: 122px;padding: 0;margin: 0;width: 100%;" class="article-li">
                  <div style="padding-left: 20px;padding-right: 20px;">
                    <div style="padding-top: 10px; font-size: 13px;color: grey;">
                      <span class="author-span">297</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>1天前</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>java</span>
                    </div>
                    <div style="border-bottom: 1px solid #E6DFDC;">
                      <div style="font-weight: bolder;margin-top: 10px;">看看别人家的接口</div>
                      <div style="margin-top: 10px;font-size: 13px;color: grey;">接口性能优化对于后端同学而言</div>
                      <div style="margin-top: 10px;margin-bottom: 5px;">
                        <i class="el-icon-view"><span
                            style="font-size: 13px;color: grey;margin-left: 5px;">2.7w</span></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li style="height: 122px;padding: 0;margin: 0;width: 100%;" class="article-li">
                  <div style="padding-left: 20px;padding-right: 20px;">
                    <div style="padding-top: 10px; font-size: 13px;color: grey;">
                      <span class="author-span">297</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>1天前</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>java</span>
                    </div>
                    <div style="border-bottom: 1px solid #E6DFDC;">
                      <div style="font-weight: bolder;margin-top: 10px;">看看别人家的接口</div>
                      <div style="margin-top: 10px;font-size: 13px;color: grey;">接口性能优化对于后端同学而言</div>
                      <div style="margin-top: 10px;margin-bottom: 5px;">
                        <i class="el-icon-view"><span
                            style="font-size: 13px;color: grey;margin-left: 5px;">2.7w</span></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li style="height: 122px;padding: 0;margin: 0;width: 100%;" class="article-li">
                  <div style="padding-left: 20px;padding-right: 20px;">
                    <div style="padding-top: 10px; font-size: 13px;color: grey;">
                      <span class="author-span">297</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>1天前</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>java</span>
                    </div>
                    <div style="border-bottom: 1px solid #E6DFDC;">
                      <div style="font-weight: bolder;margin-top: 10px;">看看别人家的接口</div>
                      <div style="margin-top: 10px;font-size: 13px;color: grey;">接口性能优化对于后端同学而言</div>
                      <div style="margin-top: 10px;margin-bottom: 5px;">
                        <i class="el-icon-view"><span
                            style="font-size: 13px;color: grey;margin-left: 5px;">2.7w</span></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li style="height: 122px;padding: 0;margin: 0;width: 100%;" class="article-li">
                  <div style="padding-left: 20px;padding-right: 20px;">
                    <div style="padding-top: 10px; font-size: 13px;color: grey;">
                      <span class="author-span">297</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>1天前</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>java</span>
                    </div>
                    <div style="border-bottom: 1px solid #E6DFDC;">
                      <div style="font-weight: bolder;margin-top: 10px;">看看别人家的接口</div>
                      <div style="margin-top: 10px;font-size: 13px;color: grey;">接口性能优化对于后端同学而言</div>
                      <div style="margin-top: 10px;margin-bottom: 5px;">
                        <i class="el-icon-view"><span
                            style="font-size: 13px;color: grey;margin-left: 5px;">2.7w</span></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li style="height: 122px;padding: 0;margin: 0;width: 100%;" class="article-li">
                  <div style="padding-left: 20px;padding-right: 20px;">
                    <div style="padding-top: 10px; font-size: 13px;color: grey;">
                      <span class="author-span">297</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>1天前</span>
                      <el-divider direction="vertical"></el-divider>
                      <span>java</span>
                    </div>
                    <div style="border-bottom: 1px solid #E6DFDC;">
                      <div style="font-weight: bolder;margin-top: 10px;">看看别人家的接口</div>
                      <div style="margin-top: 10px;font-size: 13px;color: grey;">接口性能优化对于后端同学而言</div>
                      <div style="margin-top: 10px;margin-bottom: 5px;">
                        <i class="el-icon-view"><span
                            style="font-size: 13px;color: grey;margin-left: 5px;">2.7w</span></i>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </el-main>
        </div>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>


  export default {
    name: 'ArticleLayout',
    components: {},
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .author-span :hover {
    color: red;
    cursor: pointer;
  }

  .article-li :hover {
    background-color: #fafafa;
  }

  #article-container {
    width: 80%;
    margin: 10px auto 150px auto;
    background-color: #fff;
    padding: 20px 0px 50px 0px;
    border: 1px solid #e8e8e8;
    box-shadow: 0 2px 10px rgb(0 0 0 /12%);
  }
</style>