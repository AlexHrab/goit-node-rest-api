import user from "../models/User.js";

export const signup = (data) => user.create(data);
