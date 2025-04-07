module.exports = (app) => {
  const jwt = require("jsonwebtoken");
  const BaseController = require("@qsb-elpis/elpis").Controller.Base(app);
  return class AuthController extends BaseController {
    async login(ctx) {
      const { username, password } = ctx.request.body;
      const { user: userService } = app.service;
      const userItem = await userService.getByUsernameAndPassword({
        username,
        password,
      });
      if (!userItem) {
        return this.fail(ctx, "账号或密码错误", 50000);
      }

      const payload = { userId: userItem.user_id };
      const { jwtSecretKey } = app.config;
      const token = jwt.sign(payload, jwtSecretKey, {
        expiresIn: 60 * 60 * 24, // 一天有效
      });

      const expires = new Date();
      expires.setTime(expires.getTime() + 1000 * 60 * 60 * 24);
      ctx.cookies.set("token", token, {
        expires,
        httpOnly: true,
      });

      // 利用 jwt 生成一个 token，挂载到 cookie 上
      this.success(ctx, {
        nickname: userItem.nickname,
      });
    }
    async logout(ctx) {
      // 清空cookie
      ctx.cookies.set("token", "", {
        expires: new Date(0), // 立马过期失效
      });
      ctx.status = 302; // 临时重定向
      ctx.redirect("/view/auth/login");
      return;
    }
  };
};
