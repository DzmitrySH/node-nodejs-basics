import { createWriteStream } from "node:fs";
import { pipeline } from "stream/promises";

const fileWrite = "src/streams/files/fileToWrite.txt";

const write = async () => {
  try {
    const writableStream = createWriteStream(fileWrite);
    await pipeline(process.stdin, writableStream);
  } catch (error) {
    console.log(error);
  }
};

await write();
