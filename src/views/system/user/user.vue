<!--
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-19 09:30:56
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-21 00:02:02
 * @FilePath: \event-system\src\views\system\user\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import { defineOptions, onMounted } from "vue";

defineOptions({
  name: "User"
});
console.log("....user");
onMounted(() => {
  // getalluser;
});
</script>

<template>
  <div>
    <p class="mb-2!">
      模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单）
    </p>
    <p class="mb-2!">
      模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单）
    </p>
    <p class="mb-2!">
      模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单）
    </p>
    <p class="mb-2!">
      模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单）
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
