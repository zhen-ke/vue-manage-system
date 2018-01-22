<template>
  <div class="dialog">
    <el-form :model="editData">
      <el-form-item label="类型名称" :label-width="formLabelWidth">
        <el-input v-model="editData.type" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="简要" :label-width="formLabelWidth">
        <el-input v-model="editData.department" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="注备" :label-width="formLabelWidth">
        <el-input v-model="editData.remarks" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="标签" :label-width="formLabelWidth">
        <el-input v-model="editData.tag" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth">
        <el-select v-model="editData.status" placeholder="请选择该用户的帐户状态">
          <el-option label="开通" value="开通"></el-option>
          <el-option label="关闭" value="关闭"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel({type: 'off'})">取 消</el-button>
      <el-button type="primary" @click="cancel({type:'on',data:{}})">确 定</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      editData: {
        type: Object
      }
    },
    data() {
      return {
        formLabelWidth: '120px',
      }
    },
    methods: {
      cancel(msg) {
        let type = msg.type
        switch (type) {
          case 'on': {
            this.$emit('upData', {...this.editData})
            break;
          }
          case 'off': {
            break;
          }
        }
        this.$emit('change', false)
      }
    },
  }
</script>

<style lang='scss' scoped>
.dialog {
  .dialog-footer {
    text-align: right;
  }
}

</style>
