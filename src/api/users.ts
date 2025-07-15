/*
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-14 17:12:46
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-14 17:24:04
 * @FilePath: \pure-admin-thin\src\api\users.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { http } from "@/utils/http";
import type { Result } from "./api";

export interface User {
  id?: number;
  account?: string;
  name?: string;
  description?: string;
  disable?: number;
  createTime?: number;
}

export const getUsersAll = () => {
  return http.request<Result<User[]>>("get", "/user/all");
};
