module.exports = {
  name: "淘宝",
  desc: "淘宝电商系统",
  homePage: "/view/dashboard/iframe?proj_key=taobao&key=order",
  menu: [
    {
      key: "order",
      moduleType: "iframe",
      iframeConfig: {
        path: "http://www.163.com",
      },
    },
    {
      key: "operating",
      name: "运营活动",
      menuType: "module",
      moduleType: "sider",
      siderConfig: {
        menu: [
          {
            key: "coupon",
            name: "优惠券",
            menuType: "module",
            moduleType: "custom",
            customConfig: {
              path: "/todo",
            },
          },
          {
            key: "limited",
            name: "限量购",
            menuType: "module",
            moduleType: "custom",
            customConfig: {
              path: "/todo",
            },
          },
          {
            key: "festival",
            name: "节日活动",
            menuType: "module",
            moduleType: "custom",
            customConfig: {
              path: "/todo",
            },
          },
        ],
      },
    },
    {
      key: "order",
      name: "订单管理",
      menuType: "module",
      customConfig: {
        path: "/todo",
      },
    },
    {
      key: "client",
      name: "客户管理",
      menuType: "module",
      customConfig: {
        path: "/todo",
      },
    },
  ],
};
