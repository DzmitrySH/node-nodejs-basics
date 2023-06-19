const parseEnv = () => {
    const rssResult = Object.entries(process.env).reduce((acc, [key, value]) =>
    key.startsWith("RSS_") ? [...acc, `${key}=${value}`] : acc, []).join("; ");

  console.log(rssResult);
};

parseEnv();