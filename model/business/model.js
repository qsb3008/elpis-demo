module.exports = {
  model: "dashboard",
  name: "电商系统",
  menu: [
    // {
    //   key: "product",
    //   name: "商品管理",
    //   menuType: "module",
    //   moduleType: "custom",
    //   customConfig: {
    //     path: "/todo",
    //   },
    // },
    {
      key: "product",
      name: "商品管理",
      menuType: "module",
      moduleType: "schema",
      schemaConfig: {
        api: "/api/proj/product",
        schema: {
          type: "object",
          properties: {
            product_id: {
              type: "string",
              label: "商品ID",
              tableOption: {
                width: 300,
                "show-overflow-tooltip": true,
              },
              editFormOption: {
                comType: "input",
                // visible: false,
                disabled: true,
              },
              detailPanelOption: {}
            },
            product_name: {
              type: "string",
              label: "商品名称",
              maxLength: 8,
              minLength: 4,
              tableOption: {
                width: 200,
              },
              searchOption: {
                comType: "dynamicSelect",
                api: "/api/proj/product_enum/list",
              },
              createFormOption: {
                comType: "input",
              },
              editFormOption: {
                comType: "input",
                default: "前端进阶",
              },
              detailPanelOption: {}
            },
            price: {
              type: "number",
              label: "价格",
              minimum: 1,
              maximum: 1000,
              tableOption: {
                width: 200,
              },
              searchOption: {
                comType: "select",
                enumList: [
                  {
                    label: "￥39.9",
                    value: 39.9,
                  },
                  {
                    label: "￥19.9",
                    value: 19.9,
                  },
                ],
              },
              createFormOption: {
                comType: "inputNumber",
              },
              editFormOption: {
                comType: "inputNumber",
              },
              detailPanelOption: {}
            },
            inventory: {
              type: "number",
              label: "库存",
              tableOption: {
                width: 200,
              },
              searchOption: {
                comType: "input",
              },
              createFormOption: {
                comType: "select",
                enumList: [
                  {
                    label: "100",
                    value: 100,
                  },
                  {
                    label: "500",
                    value: 500,
                  },
                  {
                    label: "1000",
                    value: 1000,
                  },
                ],
              },
              editFormOption: {
                comType: "select",
                enumList: [
                  {
                    label: "100",
                    value: 100,
                  },
                  {
                    label: "500",
                    value: 500,
                  },
                  {
                    label: "1000",
                    value: 1000,
                  },
                ],
              },
              detailPanelOption: {}
            },
            create_time: {
              type: "string",
              label: "创建时间",
              tableOption: {},
              searchOption: {
                comType: "dateRange",
              },
              detailPanelOption: {}
            },
          },
          required: ["product_name"],
        },
        tableConfig: {
          headerButtons: [
            {
              label: "新增",
              eventKey: "showComponent",
              type: "primary",
              plain: true,
              eventOption: {
                comName: "createForm",
              },
            },
          ],
          rowButtons: [
            {
              label: "查看",
              eventKey: "showComponent",
              type: "primary",
              plain: true,
              eventOption: {
                comName: "detailPanel",
              },
            },
            {
              label: "修改",
              eventKey: "showComponent",
              type: "primary",
              plain: true,
              eventOption: {
                comName: "editForm",
              },
            },
            {
              label: "删除",
              eventKey: "remove",
              type: "danger",
              eventOption: {
                params: {
                  product_id: "schema::product_id",
                },
              },
            },
          ],
        },
        componentConfig: {
          createForm: {
            title: "新增商品",
            saveBtnText: "确定",
          },
          editForm: {
            title: "修改商品",
            saveBtnText: "确定",
            mainKey: "product_id",
          },
          detailPanel: {
            mainKey: 'product_id',
            title: '详情'
          }
        },
      },
    },
    {
      key: "order",
      name: "订单管理",
      menuType: "module",
      moduleType: "custom",
      customConfig: {
        path: "/todo",
      },
    },
    {
      key: "client",
      name: "客户管理",
      menuType: "module",
      moduleType: "custom",
      customConfig: {
        path: "/todo",
      },
    },
  ],
};
