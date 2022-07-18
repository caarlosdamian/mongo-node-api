import userSchema from "../models/user.js";

export const createUser = (req, res) => {
  userSchema(req.body)
    .save()
    .then((data) => res.send("user created succesfuly" + JSON.stringify(data)))
    .catch((err) => res.send(err));
};

export const getAllusers = (req, res) => {
  userSchema
    .find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
