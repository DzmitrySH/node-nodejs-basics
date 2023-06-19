import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const fileCalculate = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  try {
    const dataBuffer = await readFile(fileCalculate);
    const hashSumma = createHash("sha256");

    hashSumma.update(dataBuffer);
    const outHex = hashSumma.digest("hex");

    console.log("hex: " + outHex);
  } catch (error) {
    console.log(error);
  }
};

await calculateHash();
