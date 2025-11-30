const path = require("node:path");

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Directorio de Contactos API",
      version: "1.0.0",
      description: "API para la gestión de contactos corporativos",
      contact: {
        name: "Soporte TI",
        email: "soporte@tuempresa.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de Desarrollo",
      },
    ],
  },
  apis: [`${path.join(__dirname, "../routes/*.js")}`],
};

module.exports = swaggerSpec;
