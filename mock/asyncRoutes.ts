/*
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-04 12:28:32
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-21 00:29:31
 * @FilePath: \pure-admin-thin\mock\asyncRoutes.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
// 模拟后端动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */
const permissionRouter = {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: "ep:lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "页面权限",
        rank: 10
      }
    },
    {
      path: "/permission/button",
      meta: {
        title: "按钮权限"
      },
      children: [
        {
          path: "/permission/button/router",
          component: "permission/button/index",
          name: "PermissionButtonRouter",
          meta: {
            title: "路由返回按钮权限",
            rank: 100
          }
        },
        {
          path: "/permission/button/login",
          component: "permission/button/perms",
          name: "PermissionButtonLogin",
          meta: {
            title: "登录接口返回按钮权限"
          }
        }
      ]
    }
  ]
};

const permissionRouter2 = {
  path: "/system",
  meta: {
    title: "系统管理",
    rank: 4
  },
  children: [
    {
      path: "/system/permission",

      name: "Permission",
      meta: {
        title: "权限管理",
        rank: 67
      }
    },
    {
      path: "/system/menuRole",
      name: "MenuRole",
      meta: {
        title: "菜角管理",
        rank: 1
      }
    },
    {
      path: "/system/user",

      name: "User",
      meta: {
        title: "用户管理",
        rank: 10
      }
    }
  ]
};

export default defineFakeRoute([
  {
    url: "/get-async-routes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [permissionRouter2, permissionRouter]
      };
    }
  }
]);
