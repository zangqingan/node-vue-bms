<!--
 * @Date: 2020-08-06 10:11:48
 * @LastEditors: wg
 * @LastEditTime: 2020-08-10 17:26:38
 * @FilePath: \node-vue-bms\admin\src\views\Agentmsg.vue
-->
<template>
  <div>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination 
      background 
      layout="prev, pager, next" 
      :total="totalPage"
      @prev-click="prevPage"
      @current-change="currentPage"
      @next-click="nextPage"></el-pagination>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        totalPage:100,
        tableData: [
          {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods:{
      // 切换前一页分页
      prevPage(){
        console.log('上一页')
      },
      // 切换前一页分页
      nextPage(){
        console.log('下一页')
      },
      // 当前点击页
      currentPage(current){
        console.log(`当前点击的是第几${current}页`)
      }
    }
  }
</script>
<style scoped lang="scss">
.el-pagination {
  margin-top:10px;
}
</style>
