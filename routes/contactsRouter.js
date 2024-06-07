import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatus,
} from "../controllers/contactsControllers.js";
import emptyBody from "../helpers/emptyBody.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", emptyBody, createContact);

contactsRouter.put("/:id", emptyBody, updateContact);

contactsRouter.patch("/:id/favorite", updateStatus);

export default contactsRouter;
