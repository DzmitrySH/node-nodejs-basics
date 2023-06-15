const parseArgs = () => {
    const arsResult = process.argv.reduce((acc,value, index, array) =>
    value.startsWith("--") ? [...acc, `${value.replace("--", "")} is ${array[index + 1]}`] : acc, []).join(", ");

  console.log(arsResult);
};

parseArgs();