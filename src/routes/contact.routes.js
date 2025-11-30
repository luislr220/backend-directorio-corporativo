const { Router } = require("express");
const router = Router();
const contactController = require("../controllers/contact.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - full_name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del contacto
 *         full_name:
 *           type: string
 *           description: Nombre completo del empleado
 *         email:
 *           type: string
 *           description: Correo corporativo
 *         phone:
 *           type: string
 *           description: Extensión o celular
 *         department:
 *           type: string
 *           description: Área a la que pertenece
 *       example:
 *         full_name: Juan Pérez
 *         email: juan.perez@empresa.com
 *         phone: "+52 555 555 5555"
 *         department: "Ventas"
 */

/**
 * @swagger
 * tags:
 *   - name: Contacts
 *     description: API de gestión de contactos
 */

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Obtener todos los contactos
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Lista de contactos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 *   post:
 *     summary: Crear un nuevo contacto
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contacto creado exitosamente
 *       500:
 *         description: Error del servidor
 */
router.get("/", contactController.getAllContacts);
router.post("/", contactController.createContact);

/**
 * @swagger
 * /api/contacts/{id}:
 *   delete:
 *     summary: Eliminar un contacto
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del contacto
 *     responses:
 *       200:
 *         description: Contacto eliminado
 *       404:
 *         description: Contacto no encontrado
 */
router.delete("/:id", contactController.deleteContact);

module.exports = router;
