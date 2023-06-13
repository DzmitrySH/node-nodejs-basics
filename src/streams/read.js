import { createReadStream } from "node:fs";
import { pipeline } from "stream/promises";

const fileRead = "src/streams/files/fileToRead.txt";

const read = async () => {
  try {
    const readStream = createReadStream(fileRead);

    await pipeline(readStream, process.stdout);
  } catch (error) {
    console.log(error);
  }
};

await read();
