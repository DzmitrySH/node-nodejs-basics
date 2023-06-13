import { pipeline } from "stream/promises";
import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const originalGzip = "src/zip/files/archive.gz";
const fileDecompress = "src/zip/files/fileToCompress.txt";

const decompress = async () => {
  try {
    const readStreamGzip = createReadStream(originalGzip);
    const writeStreamOriginal = createWriteStream(fileDecompress);
    const gunZip = createGunzip();

    await pipeline(readStreamGzip, gunZip, writeStreamOriginal);
  } catch (error) {
    console.log(error);
  }
};

await decompress();
