import mongoose, { Mongoose } from "mongoose";

let client: Mongoose = null;

export async function connect() {
  if (!client) {
    console.log("connecting to", process.env.DATABASE_URL);
    client = await mongoose.connect(process.env.DATABASE_URL);
  }
  return client;
}

export async function disconnect() {
  if (client) {
    console.log("disconnecting from", process.env.DATABASE_URL);
    await client.disconnect();
    client = null;
  }
}
