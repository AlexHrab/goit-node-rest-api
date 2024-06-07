import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
import Contact from "../models/Contacts.js";

export const getContacts = () => Contact.find();

export const getContact = (id) => Contact.findById(id);

export const addContact = (data) => Contact.create(data);

export const deleteContact = (id) => Contact.findByIdAndDelete(id);

export const updateContactById = (id, data) =>
  Contact.findByIdAndUpdate(id, data, { new: true });
