const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerConfig = require("./config/swagger");

const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(cors());
app.use(express.json());

const specs = swaggerJsdoc(swaggerConfig);

// ruta de documentación
// http://localhost:3000/api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Rutas de la API
app.use("/api/contacts", contactRoutes);

module.exports = app;
