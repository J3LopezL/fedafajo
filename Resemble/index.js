const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { viewportHeight, viewportWidth, browsers, options } = config;

const resultInfo = {};
const herramientas = ["Puppeteer"];
const versiones = ["v3.3.0", "v3.42.5"];
const funcionalidades = ["CreateTag"];

async function executeTest() {
  for (let h of herramientas) {
    resultInfo[h] = {};
    for (let f of funcionalidades) {
      resultInfo[h][f] = {};
    }
  }

  for (let h of herramientas) {
    for (let f of funcionalidades) {
      const version_1 = versiones[0];
      const version_2 = versiones[1];
      const version_1_length = fs.readdirSync(
        `../Results/${h}/${version_1}/${f}`
      ).length;
      const version_2_length = fs.readdirSync(
        `../Results/${h}/${version_2}/${f}`
      ).length;
      const largest_version =
        version_1_length > version_2_length ? version_1 : version_2;
      const longest_version =
        version_1_length > version_2_length ? version_2 : version_1;

      fs.readdir(
        `../Results/${h}/${largest_version}/${f}`,
        function (err, files) {
          if (err) {
            return console.log("Unable to scan directory: " + err);
          }
          files.forEach(async function (file, index) {
            const version_1_file = fs.readFileSync(
              `../Results/${h}/${largest_version}/${f}/${file}`
            );
            const version_2_file = fs.existsSync(
              `../Results/${h}/${longest_version}/${f}/${file}`
            )
              ? fs.readFileSync(
                  `../Results/${h}/${longest_version}/${f}/${file}`
                )
              : null; //Fallback

            const data = await compareImages(
              version_1_file,
              version_2_file,
              options
            );

            resultInfo[h][f][`step${index}`] = {
              isSameDimensions: data.isSameDimensions,
              dimensionDifference: data.dimensionDifference,
              rawMisMatchPercentage: data.rawMisMatchPercentage,
              misMatchPercentage: data.misMatchPercentage,
              diffBounds: data.diffBounds,
              analysisTime: data.analysisTime,
            };

            console.log(resultInfo);
          });
        }
      );
    }
  }
}

async function createReport() {
  await executeTest();
  //   fs.writeFileSync(
  //     `./results/${datetime}/report.html`,
  //     createReport(datetime, resultInfo)
  //   );
  //   fs.copyFileSync("./index.css", `./results/${datetime}/index.css`);
  console.log(resultInfo);
  //   return `
  //     <html>
  //         <head>
  //             <title> VRT Report </title>
  //             <link href="index.css" type="text/css" rel="stylesheet">
  //         </head>
  //         <body>
  //             <h1>Report for
  //                  <a href="${config.url}"> ${config.url}</a>
  //             </h1>
  //             <p>Executed: ${datetime}</p>
  //             <div id="visualizer">
  //                 ${config.browsers.map((b) => browser(b, resInfo[b]))}
  //             </div>
  //         </body>
  //     </html>`;
}

createReport();
