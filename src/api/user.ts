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

/** 登录 */
export const getLogin = (data?: { account: string; password: string }) => {
  return http.request<Result<UserResult>>("post", "auth/login", { data });
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
