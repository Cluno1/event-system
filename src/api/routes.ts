/*
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-04 12:28:32
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-15 09:55:27
 * @FilePath: \pure-admin-thin\src\api\routes.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { http } from "@/utils/http";
import type { Result } from "./api";

export const getAsyncRoutes = () => {
  return http.request<Result<any>>("get", "/get-async-routes");
};
