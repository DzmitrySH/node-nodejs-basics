import { cp, access, constants } from "node:fs/promises";

const originalFolder = "src/fs/files";
const copyFolder = "src/fs/files_copy";
const fsFailed = "FS operation failed";

const copy = async () => {
  let flagsFolderCopy;
  try {
    try {
      await access(copyFolder, constants.F_OK);
      flagsFolderCopy = true;
    } catch (error) {
      flagsFolderCopy = false;
    }
    if (flagsFolderCopy) throw new Error(fsFailed);

    await cp(originalFolder, copyFolder, { recursive: true });
  } catch (error) {
    console.log(error);
    if (error.code === "ENOENT") {
      throw new Error(fsFailed);
    }
  }
};

await copy();
