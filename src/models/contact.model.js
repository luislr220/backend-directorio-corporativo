const db = require("../config/db");

const ContactModel = {
  // Obtener todos
  getAll: async () => {
    const query = "SELECT * FROM contacts ORDER BY created_at DESC";
    const { rows } = await db.query(query);
    return rows;
  },

  // Crear uno nuevo
  create: async (contact) => {
    const query = `
      INSERT INTO contacts (full_name, email, phone, department)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [
      contact.full_name,
      contact.email,
      contact.phone,
      contact.department,
    ];

    const { rows } = await db.query(query, values);
    return rows[0];
  },

  // Eliminar
  delete: async (id) => {
    const query = "DELETE FROM contacts WHERE id = $1 RETURNING *";
    const { rows } = await db.query(query, [id]);
    return rows[0];
  },
};

module.exports = ContactModel;
