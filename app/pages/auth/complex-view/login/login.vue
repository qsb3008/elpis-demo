<template>
  <el-row v-loading="loading">
    <el-row class="main-panel">
      <el-row type="flex" class="title-panel">
        <div class="logo-item">
          <img :src="icon" alt="icon" class="logo" />
        </div>
      </el-row>
      <el-row class="title">
        {{ name }}
      </el-row>
      <el-input v-model="username" class="username" placeholder="请输入账号" />
      <el-input
        v-model="password"
        class="password"
        show-password
        placeholder="请输入密码"
      />
      <el-button class="login-btn" type="primary" @click="login">
        <span>登录</span>
      </el-button>
    </el-row>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import $curl from "$elpisCurl";

const loading = ref(false);
const icon = ref(window.options.icon);
const name = ref(window.options.name);
const username = ref("");
const password = ref("");

async function login() {
  loading.value = true;
  const res = await $curl({
    method: "post",
    url: "/api/auth/login",
    data: {
      username: username.value,
      password: password.value,
    },
  });
  loading.value = false;

  if (!res || !res.success) return;

  ElMessage.success("登录成功");

  localStorage.setItem("nickname", res.data?.nickname);
  let path = "/view/project-list";
  if (location.search) {
    const { search } = location;
    path = search.substring(search.indexOf("?callback=") + 10);
  }
  window.location = `http://${window.location.host}${path}`;
}
</script>

<style scoped lang="less">
.main-panel {
  margin: 0 auto;
  margin-top: 200px;
  width: 500px;
}

.title-panel {
  text-align: left;
}

.logo-item {
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  .logo {
    width: 35px;
    height: 35px;
  }
}

.title {
  line-height: 60px;
  font-size: 22px;
  font-weight: bold;
}

.username {
  margin-bottom: 15px;
}

.password {
  margin-bottom: 15px;
}

.login-btn {
  width: 500px;
}
</style>
