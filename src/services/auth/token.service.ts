import Cookies from "js-cookie";

export function setAccessToken(token: string) {
  Cookies.set("access_token", token, { expires: 1, path: "/" });
}

export function getAccessToken() {
  return Cookies.get("access_token");
}

export function removeAccessToken() {
  Cookies.remove("access_token", { path: "/" });
}