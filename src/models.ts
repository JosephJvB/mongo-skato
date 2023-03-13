import mongoose, { Model } from "mongoose";

export type ISong = {
  title: string;
  artist: string;
};
type ISongMethods = {
  play(): void;
};
type SongModel = Model<ISong, {}, ISongMethods>;

const songSchema = new mongoose.Schema<ISong, SongModel, ISongMethods>({
  title: String,
  artist: String,
});

songSchema.method("play", function play() {
  console.log(`Now playing ${this.title} by ${this.artist}`);
});

export const Song = mongoose.model("Song", songSchema);
