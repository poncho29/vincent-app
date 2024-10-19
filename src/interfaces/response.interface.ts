export interface IResponse<T> {
  ok: boolean;
  data?: T | null;
  error?: string | null;
}