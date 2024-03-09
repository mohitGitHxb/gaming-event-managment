import { Schema, model, models } from "mongoose";

export interface IUser {
  _id: string;
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  role: "admin" | "user";
}
const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: [true, "Clerk ID is required and must be unique"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required and must be unique"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Username is required and must be unique"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
  photo: {
    type: String,
    required: [true, "Photo is required"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ["admin", "user"],
    default: "user",
  },
});

const User = models.User || model("User", UserSchema);

export default User;
