const express = require("express");
const cors = require("cors");
const path = require("path");

// Importaciones de Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerConfig = require("./config/swagger");

const contactRoutes = require("./routes/contact.routes");

require('dotenv').config(); 

const app = express();

app.use(cors());
app.use(express.json());

// Configuración de Swagger
const specs = swaggerJsdoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Rutas de la API
app.use("/api/contacts", contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});

module.exports = app;