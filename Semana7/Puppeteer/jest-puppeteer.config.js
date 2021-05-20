module.exports = {
  launch: {
    dumpio: false,
    headless: false, //process.env.HEADLESS !== "false", // export HEADLESS=false to launch Chromium
    devtools: false, // optionally display devtools in non-headless mode
    // slowMo: 100, // optionally slow down typing
    defaultViewport: {
      // override default 800x600 pixel browser setting
      width: 1024,
      height: 768,
    },
  },
};
