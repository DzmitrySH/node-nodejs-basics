import { access, constants, readFile } from "node:fs/promises";
const fsFailed = "FS operation failed";
const inFile = "src/fs/files/fileToRead.txt";

const read = async () => {
  let flagFile;
  try {
    try {
      await access(inFile, constants.F_OK);
      flagFile = true;
    } catch {
      flagFile = false;
    }
    if (!flagFile) throw new Error(fsFailed);

    const file = await readFile(inFile, { encoding: "utf8" });
    console.log(file);
  } catch (error) {
    console.log(error);
  }
};

await read();
