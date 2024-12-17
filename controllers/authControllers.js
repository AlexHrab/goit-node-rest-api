import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import * as authServices from "../services/authServices.js";

const signup = async (req, res) => {
  const newUser = await authServices.signup(req.body);
  res.status(201).json({
    username: newUser.username,
    email: newUser.email,
  });
};

export default signup;
