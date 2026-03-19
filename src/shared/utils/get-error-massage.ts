import { AxiosError } from "axios";

export function getErrorMessage(
  error: unknown,
  fallback = "Terjadi kesalahan"
) {
  if (error instanceof AxiosError) {
    if (!error.response) return "Koneksi bermasalah";
    return error.response.data?.message ?? fallback;
  }

  return fallback;
}