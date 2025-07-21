export type Result<T> = {
  code: number;
  message?: string;
  success: boolean;
  data?: T;
};
