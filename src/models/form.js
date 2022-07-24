import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  attendents: {
    type: String,
    required: true,
  },
  confirm: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Form", formSchema);
