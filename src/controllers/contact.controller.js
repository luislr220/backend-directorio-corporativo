const contactService = require("../services/contact.service");

//Obtener todos los contactos
const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los contactos" });
  }
};

//Crear un contacto
const createContact = async (req, res) => {
  try {
    const newContact = await contactService.createContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el contacto" });
  }
};

// Eliminar un contacto
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await contactService.deleteContact(id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contacto no encontrado" });
    }

    res
      .status(200)
      .json({ message: "Contacto eliminado", data: deletedContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el contacto" });
  }
};

module.exports = {
  getAllContacts,
  createContact,
  deleteContact,
};
