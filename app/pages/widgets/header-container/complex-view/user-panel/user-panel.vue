<template>
  <img src="./assets/avatar.png" class="avatar" />
  <el-dropdown @command="handleUserCommand">
    <span class="username">
      {{ userName }}
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <template #dropdown>
      <el-dropdown-item command="logout">
        <span>退出登录</span>
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from "vue";

const lsNickname = localStorage.getItem("nickname");
const userName = ref(lsNickname ?? "admin");

const handleUserCommand = (command) => {
  if (command === "logout") {
    window.location = `http://${window.location.host}/api/auth/logout`;
  }
};
</script>

<style lang="less" scoped>
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
}
.username {
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  height: 60px;
  line-height: 60px;
  outline: none;
}
</style>
