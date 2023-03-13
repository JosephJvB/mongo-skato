import * as dbClient from "./dbClient";
import { Song } from "./models";

void (async function () {
  // await dbClient.connect();
  const rattleSnake = new Song({
    title: "Rattlesnake",
    artist: "King Gizzard and the Lizard Wizard",
  });
  // rattleSnake.play();
  // await rattleSnake.save();
  const gizzardSongs = await Song.find({
    artist: "King Gizzard and the Lizard Wizard",
  });
  console.log("found Gizzard Songs", gizzardSongs);
  // await Song.deleteOne({
  //   _id: "640f0e567ba5632b8a2b1062",
  // });
  await dbClient.disconnect();
})();
