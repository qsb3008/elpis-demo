module.exports = {
  apiSignVerify: {
    whiteList: ["/api/auth/logout"],
  },
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  // 数据库配置
  name: "elpis-demo-local",
  // 数据库配置
  db: {
    client: "mysql",
    connection: {
      host: "", // 例如：'rds-xxxxxx.cn-hangzhou.pvdb.rds.aliyuncs.com'
      user: "",
      password: "",
      database: "",
      port: "",
    },
    pool: {
      min: 5,
      max: 20,
    },
  },
};
