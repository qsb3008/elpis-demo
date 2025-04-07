const dotenv = require("dotenv");
const { serverStart } = require("@qsb-elpis/elpis");

// 根据当前环境加载不同的 .env 文件
dotenv.config({ path: `.env.${process.env._ENV}` });

// 启动 elpis 服务
const app = serverStart({
  name: "ElpisDemo",
  icon: "/static/logo.png",
  homePage: "/view/project-list",
});
