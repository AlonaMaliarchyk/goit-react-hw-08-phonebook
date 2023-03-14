export const userLogIn = ({ auth }) => auth.isLogin;
console.log("userLogin", userLogIn)
export const getUser = ({ auth }) => auth.user;
console.log("getUser", getUser)