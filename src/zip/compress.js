import { pipeline } from "stream/promises";
import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const fileOriginal = "src/zip/files/fileToCompress.txt";
const fileToGzip ="src/zip/files/archive.gz";

const compress = async () => {
    try {
        const readStreamOriginal = createReadStream(fileOriginal);
        const writeStreamGzip = createWriteStream(fileToGzip);
        const gZip = createGzip();

        await pipeline(readStreamOriginal, gZip, writeStreamGzip);
    } catch (error) {
       console.log(error); 
    }
};

await compress();