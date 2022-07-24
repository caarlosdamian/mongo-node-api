import formSchema from "../models/form.js";

export const createForm = (req, res) => {
  formSchema(req.body)
    .save()
    .then((data) => res.send("form created succesfuly" + JSON.stringify(data)))
    .catch((err) => res.send(err));
};
