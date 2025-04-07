module.exports = {
  "/api/service/user/list": {
    get: {
      query: {
        type: "object",
        properties: {
          username: {
            type: "string",
          },
          nickname: {
            type: "string",
          },
          sex: {
            type: "string",
          },
          create_time_start: {
            type: "string",
          },
          create_time_end: {
            type: "string",
          },
          page: {
            type: "string",
          },
          size: {
            type: "string",
          },
        },
        required: ["page", "size"],
      },
    },
  },
  "/api/proj/user": {
    post: {
      body: {
        type: "object",
        properties: {
          username: {
            type: "string",
          },
          nickname: {
            type: "string",
          },
          sex: {
            type: "number",
          },
          info: {
            type: "string",
          },
        },
      },
    },
    put: {
      body: {
        type: "object",
        properties: {
          user_id: {
            type: "string",
          },
          nickname: {
            type: "string",
          },
          sex: {
            type: "number",
          },
          info: {
            type: "string",
          },
        },
        required: ["user_id"],
      },
    },
    delete: {
      body: {
        type: "object",
        properties: {
          user_id: {
            type: "string",
          },
        },
        required: ["user_id"],
      },
    },
    get: {
      query: {
        type: "object",
        properties: {
          user_id: {
            type: "string",
          },
        },
        required: ["user_id"],
      },
    },
  },
};
