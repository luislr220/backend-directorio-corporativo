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

  //Actualizar
  update: async (id, contact) => {
    const query = `
      UPDATE contacts
      SET full_name = $1, email = $2, phone = $3, department = $4
      WHERE id = $5
      RETURNING *
    `;
    const values = [
      contact.full_name,
      contact.email,
      contact.phone,
      contact.department,
      id,
    ];

    const { rows } = await db.query(query, values);
    return rows[0]; // Devuelve el contacto actualizado o undefined si no existe
  },

  // Eliminar
  delete: async (id) => {
    const query = "DELETE FROM contacts WHERE id = $1 RETURNING *";
    const { rows } = await db.query(query, [id]);
    return rows[0];
  },
};

module.exports = ContactModel;
