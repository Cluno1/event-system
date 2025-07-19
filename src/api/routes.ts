/*
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-04 12:28:32
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-18 15:44:47
 * @FilePath: \event-system\src\api\routes.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { http } from "@/utils/http";
import type { Result } from "./api";

export const getAsyncRoutes = () => {
  return http.request<Result<any>>("get", "/menu/async_menu");
};
