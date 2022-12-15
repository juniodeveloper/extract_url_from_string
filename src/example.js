const extractUrl = require("./index.js");

const text =
  "Here is my text with some urls to test the first url is example.com but it also has url example.com/login or example.com?id=extractUrl";

(async () => {
  try {
    const urls = await extractUrl(text);
    /*
     URLs will return [
       "example.com",
       "example.com/login",
       "example.com?id=extractUrl"
     ]
     */
    console.log(urls);
  } catch (error) {
    console.log(error);
  }
})();
