module.exports = {
  name: "elpis-demo-beta",
  // 数据库配置
  db: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    },
    pool: {
      min: 5,
      max: 20,
    },
  },
};
