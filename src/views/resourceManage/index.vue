<template>
  <div>
    <div class="header">
      <span class="title">设备详情</span>
    </div>
    <div>
      <input type="file" ref="input" @change="selectedFile" />
      <button @click="upload">上传</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
/* eslint-disable*/
export default {
  data() {
    return {
    };
  },
  components: {},
  computed: {},
  methods: {
    formatParams(params) {
      return (
        "?" +
        Object.keys(params)
          .map(function(key) {
            return key + "=" + encodeURIComponent(params[key]);
          })
          .join("&")
      );
    },
    selectedFile(e) {
      console.log(e.target.files[0]);
      //根据项目需求做具体处理，比如说获取文件名
    },
    get_suffix(filename) {
      let pos = filename.lastIndexOf(".");
      let suffix = "";
      if (pos != -1) {
        suffix = filename.substring(pos);
      }
      return suffix;
    },

    async upload() {
      let files = this.$refs.input.files;
      let file;
      if(files.length > 0){
        file = files[0];
      }else{
        return;
      }
      var params = {
        resourceType: "material-image", //此参数为上传的文件业务类型，可选的值为    资源包：resource-pack ，    素材-图片： material-image ，   素材-视频：material-video,   素材-pdf:material-pdf,    素材-ppt： material-ppt
        originFilename: file.name //原始文件名， 此处应该修改为变量
      };
      let res= await axios({
        method: "get",
        url:
          "http://192.168.100.160:8080/api/upload" + this.formatParams(params)
      });
      let policyRes = res.data;
      console.log(policyRes)

      //如果不需要用到上传后的返回值可以把 async...await 语法去掉
      
      if (files.length > 0) {
        let form = new FormData();
        
        let name = file.name;
        let key = policyRes.dir + policyRes.fileId + this.get_suffix(file.name);
        let policy = policyRes.policy;
        let OSSAccessKeyId = policyRes.accessid;
        let success_action_status = "200"; ////让服务端返回200,不然，默认会返回204
        let callback = policyRes.callback;
        let signature = policyRes.signature;

        form.append("name", name);
        form.append("key", key);
        form.append("policy", policy);
        form.append("OSSAccessKeyId", OSSAccessKeyId);
        form.append("success_action_status", success_action_status);
        form.append("callback", callback);
        form.append("signature", signature);
        form.append("file", file);

        let data = await new Promise((resolve, reject) => {
          axios({
            url: policyRes.host,
            method: "POST",
            data: form
          })
            .then(res => {
              console.log(res);
              resolve(res);
            })
            .catch(err => {
              console.log(err);
              reject(err);
            });
        });
        console.log(data)
      }
    }
  },
  created() {}
};
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .el-input {
    width: 200px;
  }
}
.add-btn {
  width: 100%;
  border: 1px #0f0909 dashed;
  margin: 20px 0;
}
</style>
