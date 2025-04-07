module.exports = {
  name: "B站课堂",
  desc: "B站课程管理系统",
  homePage: "/view/dashboard/schema?proj_key=bilibili&key=video",
  menu: [
    {
      name: "视频管理(B站)",
      key: "video",
    },
    {
      name: "用户管理(B站)",
      key: "user",
    },
    {
      name: "课程资料",
      key: "resource",
      menuType: "module",
      moduleType: "sider",
      siderConfig: {
        menu: [
          {
            key: "pdf",
            name: "PDF",
            menuType: "module",
            moduleType: "custom",
            customConfig: {
              path: "/todo",
            },
          },
          {
            key: "excel",
            name: "EXCEL",
            menuType: "module",
            moduleType: "custom",
            customConfig: {
              path: "/todo",
            },
          },
          {
            key: "ppt",
            name: "PPT",
            menuType: "module",
            moduleType: "custom",
            customConfig: {
              path: "/todo",
            },
          },
        ],
      },
    },
  ],
};
