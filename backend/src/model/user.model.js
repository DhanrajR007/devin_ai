import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 6,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.__v;
    return ret;
  },
});

userSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  try {
    return await jwt.sign({ email: this.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  } catch (err) {
    console.log(err);
    throw new Error("Token generation failed");
  }
};

const User = mongoose.model("User", userSchema);
export default User;
