module.exports = (app) => {
  const sleep = async (time = 200) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  const QsbElpis = require("@qsb-elpis/elpis");

  const BaseController = QsbElpis.Controller.Base(app);
  return class ProjectController extends BaseController {
    async create(ctx) {
      await sleep();
      const { product_name: productName, price, inventory } = ctx.request.body;
      this.success(ctx, {
        product_name: productName,
        product_id: Date.now(),
        price,
        inventory,
      });
    }
    async update(ctx) {
      await sleep();
      const {
        product_id: productId,
        product_name: productName,
        price,
        inventory,
      } = ctx.request.body;
      this.success(ctx, {
        product_name: productName,
        product_id: productId,
        price,
        inventory,
      });
    }
    async remove(ctx) {
      await sleep();
      const { product_id: productId } = ctx.request.body;
      this.success(ctx, {
        product_id: productId,
        projKey: ctx.projKey,
      });
    }
    async get(ctx) {
      await sleep();
      const { product_id: productId } = ctx.request.query;

      const productList = this.getProductList(ctx);
      const productItem = productList.find(
        (item) => item.product_id === productId
      );

      this.success(ctx, productItem);
    }

    getProductList(ctx) {
      const productList = [
        {
          product_id: "1",
          price: 10,
          product_name: `${ctx.projKey}-苹果`,
          inventory: 9999,
          create_time: "2023-03-28 16:20:00",
        },
        {
          product_id: "2",
          price: 90,
          product_name: `${ctx.projKey}-橘子`,
          inventory: 990,
          create_time: "2023-03-28 15:20:00",
        },
        {
          product_id: "3",
          price: 190,
          product_name: `${ctx.projKey}-香蕉`,
          inventory: 8888,
          create_time: "2023-03-28 15:20:00",
        },
      ];
      return productList;
    }

    /**
     * 获取表格列表数据
     * @@param {object} ctx 上下文
     */
    async getList(ctx) {
      await sleep();
      const { page, size, product_name: productName } = ctx.request.query;
      const productList = this.getProductList(ctx);

      // 模拟搜索
      let list = [...productList];
      if (productName) {
        list = productList.filter((item) => {
          return item.product_name.indexOf(productName) > -1;
        });
      }

      this.success(ctx, list, {
        total: 2,
        page,
        size,
      });
    }
    /**
     * 获取枚举列表数据
     * @@param {object} ctx 上下文
     */
    async getProductEnumList(ctx) {
      this.success(ctx, [
        { value: `${ctx.projKey}-苹果`, label: `${ctx.projKey}-苹果` },
        { value: `${ctx.projKey}-橘子`, label: `${ctx.projKey}-橘子` },
        { value: `${ctx.projKey}-香蕉`, label: `${ctx.projKey}-香蕉` },
      ]);
    }
  };
};
