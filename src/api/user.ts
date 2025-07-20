/*
 * @Author: zld 17875477802@163.com
 * @Date: 2025-07-20 21:43:07
 * @LastEditors: zld 17875477802@163.com
 * @LastEditTime: 2025-07-20 23:33:40
 * @FilePath: \event-system\src\api\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { http } from "@/utils/http";
import type { Result } from "./api";

export interface UserResult extends User {
  /** `token` */
  accessToken: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refreshToken: string;
  /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
  expiresIn: Date;
}

export type RefreshTokenResult = {
  /** `token` */
  accessToken: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refreshToken: string;
  /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
  expiresIn: Date;
};
//auth/login
/** 登录 */
export const getLogin = (data?: { account: string; password: string }) => {
  return http.request<Result<UserResult>>("post", "/auth/login", { data });
};

/** 登出 */
export const logout = (data?: { id: number }) => {
  return http.request<Result<UserResult>>("post", "/auth/logout", { data });
};

/** 刷新`token` */
export const refreshTokenApi = (data?: { refreshToken: string }) => {
  return http.request<Result<RefreshTokenResult>>(
    "post",
    "/auth/refresh-token",
    {
      data
    }
  );
};
