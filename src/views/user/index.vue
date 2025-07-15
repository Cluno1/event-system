<!--
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-14 16:28:29
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-15 09:47:57
 * @FilePath: \pure-admin-thin\src\views\user\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <!-- <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="'success-row'"
  >
    <el-table-column prop="id" label="ID" width="50" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="account" label="Account" width="180" />
    <el-table-column prop="description" label="Description" width="250" />
    <el-table-column prop="disable" label="Description" width="50" />
    <el-table-column prop="createTime" label="CreateTime" width="50" />
  </el-table> -->
  <div>
    <h1>用户管理</h1>
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
import { getUsersAll, User } from "@/api/users";
import { onMounted, ref } from "vue";

const data = ref<User[]>([]);
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
];

onMounted(async () => {
  const res = await getUsersAll();
  console.log(res, "res");
  if (res.code != 200) {
    console.log(res.message);
  } else {
    data.value = res.data || [];
  }
});
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
