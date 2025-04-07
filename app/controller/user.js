module.exports = (app) => {
  const moment = require("moment");
  const BaseController = require("@qsb-elpis/elpis").Controller.Base(app);
  return class UserController extends BaseController {
    async create(ctx) {
      const { sex, nickname, username, info } = ctx.request.body;
      const { user: userService } = app.service;
      const userId = await userService.create({
        username,
        nickname,
        sex,
        info,
      });
      this.success(ctx, { user_id: userId });
    }
    async update(ctx) {
      const { sex, nickname, user_id: userId, info } = ctx.request.body;
      const { user: userService } = app.service;
      await userService.update(userId, {
        nickname,
        sex,
        info,
      });
      this.success(ctx, { user_id: userId });
    }
    async delete(ctx) {
      const { user_id: userId } = ctx.request.body;
      const { user: userService } = app.service;
      await userService.delete(userId);
      this.success(ctx, { user_id: userId });
    }
    async get(ctx) {
      const { user_id: userId } = ctx.request.query;
      const { user: userService } = app.service;
      const userItem = await userService.get(userId);

      userItem.create_time = moment(userItem.create_time).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      this.success(ctx, userItem);
    }
    async getList(ctx) {
      const {
        username,
        nickname,
        create_time_start: createTimeStart,
        create_time_end: createTimeEnd,
        page,
        size,
        sex,
      } = ctx.request.query;
      const { user: userService } = app.service;

      const jobs = [];
      // 获取列表
      jobs.push(
        userService.getList({
          createTimeStart,
          createTimeEnd,
          nickname,
          page: Number(page),
          size: Number(size),
          sex: Number(sex),
          username,
        })
      );
      // 获取总数
      jobs.push(
        userService.getListTotal({
          createTimeStart,
          createTimeEnd,
          nickname,
          sex: Number(sex),
          username,
        })
      );

      const res = await Promise.all(jobs);

      if (!res[0] || res[0].length <= 0) {
        return this.success(ctx, [], {
          total: 0,
        });
      }
      // 展示数据
      const resList = res[0];
      resList.forEach((item) => {
        item.sex = item.sex === 1 ? "男" : "女";
        item.create_time = moment(item.create_time).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      });
      const total = res[1];
      this.success(ctx, resList, { total });
    }
  };
};
