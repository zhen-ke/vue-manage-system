<template>
<el-upload
  class="upload-demo"
  drag
  action="http://upload.qiniup.com"
  :on-success='handleAvatarSuccess'
  :on-error="handleError"
  :before-upload="beforeAvatarUpload"
  :data="postData"
  multiple>
   <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2M</div>
</el-upload>
</template>

<script>
  export default {
    data() {
      return {
        postData: {
          token:'3sBXpWawR0hxP6Xxot3S8VaqiB43HjDP7QF3Ua_e:aM9dZ6ZGTK43h6OzCKAttEl4dBg=:eyJzY29wZSI6InhtaXQiLCJkZWFkbGluZSI6MTUyMDIyMjUyMn0='
        },
        imageUrl: ''
      }
    },
    methods: {
      handleAvatarSuccess(res, file) { //上传成功后在图片框显示图片
        this.imageUrl = 'http://xmit.qiniudn.com/' + res.key
        console.log(res)
      },
      handleError(res) { //显示错误
        console.log(res)
      },
      beforeAvatarUpload(file) { //在图片提交前进行验证
      console.log(file)
        let isJPG = file.type === "image/jpeg"
        let isPNG = file.type === "image/png"
        let isLt2M = file.size / 1024 / 1024 < 2
        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
          return false
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
          return false
        }
      }
    }
  }

</script>

<style>


</style>
