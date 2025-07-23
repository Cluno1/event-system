<!--
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-19 09:30:56
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-23 14:52:53
 * @FilePath: \event-system\src\views\system\user\user.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="container mx-auto p-4">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h2 class="text-xl font-semibold">用户列表</h2>
        </div>
      </template>

      <!-- 表格 -->
      <el-table
        v-loading="loading"
        :data="tableData"
        stripe
        style="width: 100%"
      >
        <el-table-column prop="id" label="ID" width="50" />
        <el-table-column label="头像" width="100">
          <template #default="{ row }">
            <el-avatar :size="50" :src="row.avatar" />
          </template>
        </el-table-column>
        <el-table-column prop="account" label="账号" width="120" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column label="角色" width="150">
          <template #default="{ row }">
            <el-dropdown>
              <div class="flex items-center">
                <el-tag
                  v-if="row.roles.length > 0"
                  :type="row.roles[0] === 'admin' ? 'danger' : 'primary'"
                  class="mr-1"
                >
                  {{ row.roles[0] }}
                </el-tag>
                <el-tag v-if="row.roles.length > 1"
                  >+{{ row.roles.length - 1 }}</el-tag
                >
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="(role, index) in row.roles"
                    :key="index"
                  >
                    {{ role }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="100">
          <template #default="{ row }">
            <el-tag v-if="row.isDelete === 1" type="danger"> 删除 </el-tag>
            <el-tag v-else :type="row.disable === 1 ? 'success' : 'danger'">
              {{ row.disable === 1 ? "启用" : "禁用" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          prop="description"
          label="描述"
          width="120"
        />
        <el-table-column label="独有权限" width="200">
          <template #default="{ row }">
            <el-dropdown
              v-if="row.uniPermissions && row.uniPermissions.length > 0"
            >
              <div class="flex items-center">
                <span class="truncate" style="max-width: 100px">
                  {{ row.uniPermissions[0] }}
                </span>
                <el-tag v-if="row.uniPermissions.length > 1" class="ml-1">
                  +{{ row.uniPermissions.length - 1 }}
                </el-tag>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="(perm, index) in row.uniPermissions"
                    :key="index"
                  >
                    {{ perm }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span v-else>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="120" />
        <el-table-column prop="deleteTime" label="删除时间" width="120" />
        <el-table-column label="菜单角色" width="80">
          <template #default="{ row }">
            <el-dropdown>
              <div class="flex items-center">
                <el-tag
                  v-if="row.menuRoles.length > 0"
                  :type="row.menuRoles[0] === 'system' ? 'danger' : 'primary'"
                  class="mr-1"
                >
                  {{ row.menuRoles[0] }}
                </el-tag>
                <el-text v-if="row.menuRoles.length <= 0">-</el-text>
                <el-tag v-if="row.menuRoles.length > 1"
                  >+{{ row.menuRoles.length - 1 }}</el-tag
                >
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="(mrole, index) in row.menuRoles"
                    :key="index"
                  >
                    {{ mrole }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="{ row }">
            <el-button size="small" @click="handleEdit(row)">修改</el-button>
            <el-button size="small" type="danger" @click="handleDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="mt-4 flex justify-center">
        <el-pagination
          :current-page="currentPage"
          :page-size="pageSize"
          :page-sizes="[10, 20, 30, 50]"
          :small="false"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>
<script setup lang="tsx">
import { getUsersAll, updateUserByPermi } from "@/api/users";
import { addDialog } from "@/components/ReDialog";
import { message } from "@/utils/message";
import { onMounted, ref } from "vue";
interface UserListParams {
  page: number;
  limit: number;
}

const loading = ref(false);
const tableData = ref<User[]>([]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);

// 获取用户列表
const fetchUserList = async () => {
  try {
    loading.value = true;
    const params: UserListParams = {
      page: currentPage.value,
      limit: pageSize.value
    };
    const res = await getUsersAll(params);
    if (res.success) {
      console.log("res:", res);
      tableData.value = res.data?.users as User[];

      total.value = res.data?.meta?.total || res?.data?.users.length || 0;
    }
  } catch (error) {
    console.error("获取用户列表失败:", error);
  } finally {
    loading.value = false;
  }
};

// 分页大小改变
const handleSizeChange = (val: number) => {
  pageSize.value = val;
  fetchUserList();
};

// 当前页改变
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  fetchUserList();
};

// 编辑用户
const handleEdit = (row: User) => {
  console.log("编辑用户:", row);
  // 这里可以打开编辑对话框
};

// 删除用户
const handleDelete = (row: User) => {
  console.log("删除用户:", row);
  // 这里可以弹出确认对话框
  addDialog({
    title: row.account,
    contentRenderer: () => <p>是否删除(逻辑)用户?</p>, // jsx 语法 （注意在.vue文件启用jsx语法，需要在script开启lang="tsx"）
    beforeSure: async (done: () => void, { closeLoading }: any) => {
      // closeLoading() // 关闭确定按钮动画，不关闭弹框
      // done() // 关闭确定按钮动画并关闭弹框
      const res = await updateUserByPermi({
        account: row.account,
        isDelete: 1,
        deleteTime: new Date()
      });
      if (res.success) {
        tableData.value = tableData.value.map((_: User) => {
          if (_.account === res.data?.account) {
            return res.data;
          } else {
            return _;
          }
        });
        message("删除成功", { type: "success" });
      } else {
        message("操作失败", { type: "error" });
      }
      done();
    }
  });
};

onMounted(() => {
  fetchUserList();
});
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
