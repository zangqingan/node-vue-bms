<!--
 * @Date: 2020-08-06 10:11:48
 * @LastEditors: wg
 * @LastEditTime: 2020-08-10 16:23:23
 * @FilePath: \admin\src\components\ComAside.vue
-->
<template>
  <el-aside  :width="isCollapse ? '64px' : '200px'" style="background-color: #2f4050;">
    <div class="user-avatar" v-if="!isCollapse">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <div class="user-text">
        <el-dropdown trigger="click" >
          <span class="el-dropdown-link">
            管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="changePassword">修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </div>  
    <div v-else class="collapse-avatar">
      <span>QA</span>
    </div>
    <el-menu 
      :default-openeds="['1']" 
      :collapse="isCollapse" 
      class="el-menu-vertical-demo" 
      collapse-transition
      unique-opened
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">客户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="agentmsg">
            <span slot="title">客户信息管理</span>
          </el-menu-item>
          <el-menu-item index="updatemsg"> 
            <span slot="title">客户信息修改</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="addUser">
             <span slot="title">增加用户</span>
          </el-menu-item>
          <el-menu-item index="updateUser">
            <span slot="title">修改密码</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'comaside',
  props:{
    isCollapse:{type:Boolean,default:false}
  },
  data() {
    return {
      
    }
  },
  methods:{
    // 修改用户密码
    changePassword(){
      console.log('修改密码')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-aside,.el-menu--vertical {
  .user-avatar{
    display: flex;
    width: 200px;
    height: 150px;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start ;
    background-image:url(../assets/header-profile.png);
    .el-avatar{
      margin-left: 30px;
    }
    .user-text{
      margin-left: 25px;
      .el-dropdown {
        color: #DFE4ED;
      }
      .el-dropdown-link {
        cursor: pointer;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
  }
  .collapse-avatar{
    color:#fff;
    text-align: center;
    font-weight: 600;
    height: 60px;
    line-height: 60px;
    background-color: #2f3a46;
  }
  .el-menu{
    background-color: #2f4050;
    border:none;
    .el-submenu{
      .el-submenu__title{
        font-weight: 600;
        color: #a2a2bb;
      }
      .el-submenu__title:hover{
        background-color: #2f3a46;
        color:#fff;
        i{
          color:#fff;
        }
      } 
    }
    .el-menu-item{
      padding-left: 55px!important;
      color:#fff!important;
      height: 40px;
      line-height: 40px;
    }
    .el-menu-item:focus, .el-menu-item:hover {
      outline: 0;
      background-color: #2f3a46;
      color:#fff;
      i{
        color:#fff;
      }
    }
    .el-menu-item-group__title{
      display: none;
    }
    
  }
}
// 折叠
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu--vertical {
  left: 59px !important;
} 
</style>
