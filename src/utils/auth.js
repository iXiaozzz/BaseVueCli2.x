import Cookies from "js-cookie";

const TokenKey = "servToken";
const AccountKey = "accountKey";

export function getLanguage() {
  return Cookies.get("language");
}

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getIsEditPwd() {
  return Cookies.get("isEditPwd");
}

export function setIsEditPwd(isEditPwd) {
  return Cookies.set("isEditPwd", isEditPwd);
}

export function getAccountKey() {
  return Cookies.get(AccountKey);
}

export function setAccountKey(key) {
  return Cookies.set(AccountKey, key);
}

export function removeAccountKey() {
  return Cookies.remove(AccountKey);
}
