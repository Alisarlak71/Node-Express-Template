const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    restapi: "3.0.0",
    info: {
      title: "My NodeJs REST API",
      version: "1.0.0",
      description: "My NodeJs REST API",
    },
    servers: [
      {
        url: "http://localhost:8087",
        description: "dev server",
      },
    ],
    tags: [
      {
        name: "Users",
        description: "مدیریت کاربران",
      },
    ]
  },
  apis: ["./routes/*.js", "./routes/**/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
