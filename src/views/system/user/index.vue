<!--
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-19 09:30:56
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-20 18:07:51
 * @FilePath: \event-system\src\views\system\user\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import { defineOptions, onMounted } from "vue";

defineOptions({
  name: "user"
});

onMounted(() => {
  getalluser;
});
</script>

<template>
  <div>
    <h1>name</h1>
  </div>
</template>

<style lang="scss" scoped></style>
