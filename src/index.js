const extractUrl = (textString) => {
  return new Promise((resolve, reject) => {
    if (typeof textString !== "string") {
      reject("You need to provide a string as a parameter");
    }

    const textToArray = textString.split(/\s/g);
    const urlList = [];

    textToArray.forEach((text) => {
      if (isUrl(text)) {
        urlList.push(text);
      }
    });

    resolve(urlList);
  });
};

const isUrl = (url) => {
  if (typeof url !== "string") {
    throw new Error("The url parameter needs to be a string");
  }

  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!urlPattern.test(url);
};

module.exports = extractUrl;
