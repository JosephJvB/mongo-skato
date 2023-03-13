import * as dbClient from "./dbClient";
import { Callback, Context } from "aws-lambda";
import { Song } from "./models";

type ICBEvent = {
  wait: boolean;
};

export function handler(event: ICBEvent, context: Context, callback: Callback) {
  void (async function () {
    try {
      context.callbackWaitsForEmptyEventLoop = event.wait;
      const newConnection = await dbClient.connect();
      const rattlesnake = await Song.find({
        title: "Rattlesnake",
      });
      console.log("found rattlesnake", rattlesnake);
      return callback(null, {
        newConnection,
      });
    } catch (e) {
      console.error(e);
      console.error("failed");
      return callback(e as string | Error, null);
    }
  })();
}
