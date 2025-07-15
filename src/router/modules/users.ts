/*
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-15 09:15:46
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-15 09:18:54
 * @FilePath: \pure-admin-thin\src\router\modules\users.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */

const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Users",
  component: Layout,
  redirect: "/users",
  meta: {
    icon: "ep/avatar",
    title: "",
    rank: 1
  },
  children: [
    {
      path: "/users",
      name: "Users",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "用户管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
