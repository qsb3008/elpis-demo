const jwt = require("jsonwebtoken");

module.exports = (app) => {
  const whiteList = ["/view/auth/login", "/api/auth/login", "/api/auth/logout"];

  return async (ctx, next) => {
    if (whiteList.includes(ctx.path)) {
      return await next();
    }
    let isLogin = true;
    ctx.token = ctx.cookies.get("token");
    if (!ctx.token) {
      // 是否有token
      isLogin = false;
    } else {
      try {
        const { jwtSecretKey } = app.config;
        const decoded = jwt.verify(ctx.token, jwtSecretKey);
        ctx.userId = decoded.userId;
      } catch (error) {
        isLogin = false;
      }
    }

    if (!isLogin) {
      ctx.cookies.set("token", "", {
        expires: new Date(0),
      });

      if (ctx.url.indexOf("api") > -1) {
        ctx.body = {
          success: false,
          code: 50000,
          message: "请重新登录",
        };
      } else {
        ctx.status = 302;
        ctx.redirect(`/view/auth/login?callback=${ctx.url}`);
      }
      return;
    }
    return await next();
  };
};
