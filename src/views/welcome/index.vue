<!--
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-04 12:28:32
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-22 11:00:22
 * @FilePath: \event-system\src\views\welcome\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import { defineOptions } from "vue";

defineOptions({
  name: "Welcome"
});
</script>

<template>
  <div class="welcome-container">
    <h1>埋点监控系统</h1>

    <!-- 测试 --pure-border-color -->
    <div class="color-box border-color">边框颜色: var(--pure-border-color)</div>

    <!-- 测试 --pure-switch-off-color -->
    <div class="color-box switch-off-color">
      Switch 关闭颜色: var(--pure-switch-off-color)
    </div>

    <!-- 测试 --pure-theme-menu-text -->
    <div class="color-box menu-text">
      菜单文本颜色: var(--pure-theme-menu-text)
    </div>

    <!-- 测试 --pure-theme-menu-hover -->
    <div class="color-box menu-hover">
      菜单悬停背景: var(--pure-theme-menu-hover)
    </div>

    <!-- 测试 --pure-theme-sub-menu-bg -->
    <div class="color-box sub-menu-bg">
      子菜单背景: var(--pure-theme-sub-menu-bg)
    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 20px;
  color: var(--pure-theme-menu-active-before); /* 使用 Element Plus 主色 */
}

.color-box {
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
}

/* 测试 --pure-border-color */
.border-color {
  border: 2px solid var(--pure-border-color);
  color: #333;
}

/* 测试 --pure-switch-off-color */
.switch-off-color {
  background-color: var(--pure-switch-off-color);
  color: white;
}

/* 测试 --pure-theme-menu-text */
.menu-text {
  color: var(--pure-theme-menu-text);
  background-color: #f5f5f5;
}

/* 测试 --pure-theme-menu-hover */
.menu-hover {
  background-color: var(--pure-theme-menu-hover);
  color: #333;
}

/* 测试 --pure-theme-sub-menu-bg */
.sub-menu-bg {
  background-color: var(--pure-theme-sub-menu-bg);
  border: 1px dashed #ccc;
}
</style>
