const { Pool } = require("pg");
require("dotenv").config();

// Configuración de la conexión
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Listener opcional para verificar conexión exitosa
pool.on("connect", () => {
  console.log("Base de Datos conectada exitosamente");
});

// Manejo de errores del pool
pool.on("error", (err) => {
  console.error("Error inesperado en el cliente inactivo", err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
