const contactModel = require("../models/contact.model");

const getAllContacts = async () => {
  return await contactModel.getAll();
};

const createContact = async (data) => {
  return await contactModel.create(data);
};

const deleteContact = async (id) => {
  return await contactModel.delete(id);
};

module.exports = {
  getAllContacts,
  createContact,
  deleteContact,
};
