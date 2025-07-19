/*
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-04 12:28:32
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-18 11:56:30
 * @FilePath: \event-system\mock\login.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
// 根据角色动态生成路由
// import { defineFakeRoute } from "vite-plugin-fake-server/client";

// export default defineFakeRoute([
//   {
//     url: "/login",
//     method: "post",
//     response: ({ body }) => {
//       if (body.username === "admin") {
//         return {
//           success: true,
//           data: {
//             avatar: "https://avatars.githubusercontent.com/u/44761321",
//             username: "admin",
//             nickname: "小铭",
//             // 一个用户可能有多个角色
//             roles: ["admin"],
//             // 按钮级别权限
//             permissions: ["*:*:*"],
//             accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
//             refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
//             expires: "2030/10/30 00:00:00"
//           }
//         };
//       } else {
//         return {
//           success: true,
//           data: {
//             avatar: "https://avatars.githubusercontent.com/u/52823142",
//             username: "common",
//             nickname: "小林",
//             roles: ["common"],
//             permissions: ["permission:btn:add", "permission:btn:edit"],
//             accessToken: "eyJhbGciOiJIUzUxMiJ9.common",
//             refreshToken: "eyJhbGciOiJIUzUxMiJ9.commonRefresh",
//             expires: "2030/10/30 00:00:00"
//           }
//         };
//       }
//     }
//   }
// ]);
