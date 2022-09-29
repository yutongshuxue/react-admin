export const ACOUNT_PATTERN = /^[a-zA-Z0-9_-]{4,16}$/  //用户名正则

export const PASSWORD_PATTERN = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/  //密码正则，（数字和字母组成的6-16位）