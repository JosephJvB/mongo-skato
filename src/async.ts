import * as dbClient from "./dbClient";
import { Callback, Context } from "aws-lambda";
import { Song } from "./models";

type ICBEvent = {
  wait: boolean;
};

export async function handler(event: ICBEvent, context: Context) {
  try {
    context.callbackWaitsForEmptyEventLoop = event.wait;
    const newConnection = await dbClient.connect();
    const rattlesnake = await Song.find({
      title: "Rattlesnake",
    });
    console.log("found rattlesnake", rattlesnake);
    return { newConnection };
  } catch (e) {
    console.error(e);
    console.error("failed");
  }
}
