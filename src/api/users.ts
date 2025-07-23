/*
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-14 17:12:46
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-23 11:37:30
 * @FilePath: \event-system\src\api\users.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { http } from "@/utils/http";
import type { Result } from "./api";
import type { AxiosRequestConfig } from "axios";

export interface UsersAll {
  users: User[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface UpdateUser {
  id?: number;
  account: string;

  avatar?: string;
  name?: string;
  /**
   * 权限角色code
   */
  rolesCode?: string[];
  /**
   * 该角色独有权限
   */
  uniPermissions?: string[];

  /**
   * 描述
   */
  description?: string;
  /**
   * 禁用
   */
  disable?: number;
  isDelete?: number;
  deleteTime?: Date;
}

export const getUsersAll = (param: { page: number; limit: number }) => {
  return http.request<Result<UsersAll>>("get", "/user/all", {
    param
  } as AxiosRequestConfig<any>);
};

export const updateUserByPermi = (data: UpdateUser) => {
  return http.request<Result<User>>("post", "/user/updateByPermi", {
    data
  } as AxiosRequestConfig<any>);
};
