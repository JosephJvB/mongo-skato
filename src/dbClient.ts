import mongoose, { Mongoose } from "mongoose";

let client: Mongoose = null;

export async function connect(): Promise<boolean> {
  let newConnection = false;
  if (!client) {
    console.log("connecting to", process.env.DATABASE_URL);
    client = await mongoose.connect(process.env.DATABASE_URL);
    newConnection = true;
  }
  return newConnection;
}

export async function disconnect() {
  if (client) {
    console.log("disconnecting from", process.env.DATABASE_URL);
    await client.disconnect();
    client = null;
  }
}
