<!--
 * @Date: 2020-08-06 10:11:48
 * @LastEditors: wg
 * @LastEditTime: 2020-08-10 16:43:20
 * @FilePath: \node-vue-bms\admin\src\views\Main.vue
-->
<template>
<el-container style="height: 100vh;">    
  <com-aside :isCollapse="isCollapse"></com-aside>
  <el-container style="background-color: #f3f3f4;">
    <el-header>
      <div class="left-header">
        <!-- 折叠按钮 -->
        <el-button type="primary" icon="el-icon-s-fold" @click="changeCollapse"></el-button>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 用户中心 -->
      <div class="right-header">
        <span style="color: #999c9e;margin-right:20px;">欢迎来到QA管理系统</span>
        <a @click="signout">
          <i class="el-icon-switch-button" style="margin-right: 7px;color: #303133;"></i>
          <span style=" letter-spacing: 3px;color: #303133;font-weight:600;">注销</span>
        </a>
      </div>
    </el-header>
    <el-main>
      <router-view :key="$route.path"></router-view>
    </el-main>
  </el-container>
</el-container>  
</template>

<script>
// @ is an alias to /src
import ComAside from '@/components/ComAside.vue'

export default {
  name: 'Main',
  components: {
    ComAside
  },
  data(){
    return{
      isCollapse: false
    }
  },
  methods:{
    // 侧边栏显示隐藏切换
    changeCollapse(){
      this.isCollapse = !this.isCollapse
    },
    // 注销
    signout(){
      // 清除token，跳转到登录页
      console.log('hello')
    }
  }
}
</script>
<style scoped lang="scss">
.el-header {
  display: flex;
  justify-content:space-between;
  background-color: #ffffff;
  color: #333;
  line-height: 60px;
  .left-header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    .el-button{
      padding:10px;
      margin-right: 10px ;
    }
  }
}
.el-main{
  padding: 20px 0;
}
</style>
