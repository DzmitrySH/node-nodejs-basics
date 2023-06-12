import { access, constants, readdir } from "node:fs/promises";
const fsFailed = "FS operation failed";
const inFolder = "src/fs/files/";

const list = async () => {
  let flagDir;
  try {
    try {
      await access(inFolder, constants.F_OK);
      flagDir = true;
    } catch {
      flagDir = false;
    }
    if (!flagDir) throw new Error(fsFailed);

    const files = await readdir(inFolder);
    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    console.log(error);
  }
};

await list();
