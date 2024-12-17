import pkg from "joi";
import { Schema, model } from "mongoose";
import { emailRegexp } from "../constants/userConstats.js";
const { required, string } = pkg;
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, math: emailRegexp, unique: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const user = model("user", userSchema);

export default user;
