<template>
  <label class="avatar-bg">
    <!--默认显示的一张图片-->
    <div class="avatar" v-if="!previewAvatar"></div>
    <!--七牛回调的图片path-->
    <img :src="previewAvatar" class="real-photo" v-if="previewAvatar">
    <input ref="upload" id="upload" type="file" class="realfilebt" style="display: none;" />
  </label>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        files: [], // 文件
        uploadToken: '', // 上传文件 token
        previewAvatar: '', // 页面展示的avatar
        progress: 0, // 进度条
      };
    },
    //node版本要是8+，以上才能使用async await的方法
    async mounted() {
      let self = this;
      //页面加载 拉去token
      let tokenRes = await axios({
        url: '/api/sz/upToken',
      });
      this.uploadToken = tokenRes.data.token;
      this.$refs.upload.addEventListener('change', function () {
        //console.log(this.files)
        var data = new FormData();
        data.append('token', self.uploadToken);
        data.append('file', this.files[0]);
        axiosInstance({
            method: 'POST',
            url: 'http://up.qiniu.com',
            data: data,
            onUploadProgress: function (progressEvent) {
              var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
              //console.log(percentCompleted)
              //对应上传进度条
              self.progress = percentCompleted;
            },
          })
          .then(function (res) {
            //console.log('res',res)
            let {
              base_url,
              path
            } = res.data;
            //页面所用字段
            self.previewAvatar = `${base_url}${path}?imageView2/1/w/154/h/154`;
            //传给后台不完整
            self.formData.avatar = `${path}`;

          })
          .catch(function (err) {
            console.log('err', err);
          });
      });
    }
  }

</script>

<style>


</style>
