import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    message:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
