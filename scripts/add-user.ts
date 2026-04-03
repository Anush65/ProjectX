import mongoose from "mongoose";
import User from "../models/User.js";
import { connectDB } from "../config/db.js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const email = process.argv[2];
const role = process.argv[3];

if (!email || !["admin", "judge", "team"].includes(role)) {
  console.error("Please provide a valid email and role (admin/judge/team).");
  console.error("Usage: npx tsx scripts/add-user.ts <email> <role>");
  process.exit(1);
}

async function main() {
  await connectDB();
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    existingUser.role = role;
    await existingUser.save();
    console.log(`Updated user ${email} to role: ${role}.`);
  } else {
    await User.create({ email, role });
    console.log(`Created new user with email ${email} and role: ${role}.`);
  }
  process.exit(0);
}

main().catch(console.error);
