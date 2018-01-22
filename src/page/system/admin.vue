<template>
  <div class="privileges-table">
    <div class="table-hd">
      <el-row :gutter="20">
        <el-col :span="2">
          <Addbtn @addData="add"></Addbtn>
        </el-col>
        <el-col :span="4" :offset="18">
          <Search @changeSearch="updateSearch"></Search>
        </el-col>
      </el-row>
    </div>
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column prop="type" label="类型名称" sortable>
      </el-table-column>
      <el-table-column prop="department" label="简要">
      </el-table-column>
      <el-table-column prop="remarks" label="备注">
      </el-table-column>
      <el-table-column prop="status" label="状态">
      </el-table-column>
      <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '运营部', value: '运营部' }, { text: '技术部', value: '技术部' }]"
        :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.tag === '运营部' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <Dialog :edit-data="rowList" @change="changeStatus" @upData="updata"></Dialog>
    </el-dialog>
    <div class="pagination">
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
  import Dialog from '@/page/system/dialog'
  import Search from '@/page/system/search'
  import Addbtn from '@/page/system/addBtn'
  import Pagination from '@/page/system/pagination'

  export default {
    data() {
      return {
        tableData: [],
        rowList: {},
        dialogFormVisible: false,
        currIndex: null,
        title: '',
        addStatus: false,
        search: ''
      }
    },
    methods: {
      formatter(row, column) {
        return row.type;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      handleEdit(index, row) {
        this.dialogFormVisible = true
        this.rowList = { ...row
        }
        this.currIndex = index
        this.title = '编辑管理员类型'
      },
      handleDelete(index, row) {
        this.$delete(this.tableData, index, this.tableData[index])
      },
      changeStatus(data) {
        this.dialogFormVisible = data
        this.addStatus = false
      },
      updata(msg) {
        if (this.addStatus) {
          this.tableData.push(msg)
          this.addStatus = false
        } else {
          this.$set(this.tableData, this.currIndex, msg)
        }
      },
      _getData: function () {
        this.myAxios.get('/admin').then(it => {
          this.tableData = it.data.tableData
        }).catch(e => {
          console.log(e)
        })
      },
      add(msg) {
        this.dialogFormVisible = msg
        this.rowList = {}
        this.title = '添加管理员'
        this.addStatus = true
      },
      updateSearch(msg) {
        this.search = msg
      }
    },
    computed: {
      filterTableData() {
        if (this.search.length > 0) {
          return this.tableData.filter(it => {
            return it.type.indexOf(this.search) !== -1 || it.department.indexOf(this.search) !== -1 
          })
        } else {
          return this.tableData
        }
      }
    },
    created: function () {
      this._getData()
    },
    components: {
      Dialog,
      Search,
      Addbtn,
      Pagination
    }
  };

</script>

<style lang='scss' scoped>
  .privileges-table {
    .table-hd {
      padding: 15px;
    }
    .pagination {
      background-color: #fff;
      padding: 15px;
      text-align: right;
    }
  }

</style>
