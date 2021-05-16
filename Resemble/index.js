const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");
const util = require("util");

const readdir = util.promisify(fs.readdir);
const { viewportHeight, viewportWidth, browsers, options } = config;

const resultInfo = {};
const herramientas = ["Puppeteer"];
const versiones = ["v3.3.0", "v3.42.5"];
const funcionalidades = ["CreateTag", "Login", "CreatePage"];

const executeTest = async () => {
  for (let h of herramientas) {
    resultInfo[h] = {};
    for (let f of funcionalidades) {
      resultInfo[h][f] = [];
    }
  }

  await Promise.all(
    herramientas.map(async (h) => {
      await Promise.all(
        funcionalidades.map(async (f) => {
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

          try {
            const files = await readdir(
              `../Results/${h}/${largest_version}/${f}`
            );
            await Promise.all(
              files.map(async (file, index) => {
                const version_1_filePath = `../Results/${h}/${largest_version}/${f}/${file}`;
                const version_2_filePath = fs.existsSync(
                  `../Results/${h}/${longest_version}/${f}/${file}`
                )
                  ? `../Results/${h}/${longest_version}/${f}/${file}`
                  : null; //Fallback

                const data = await compareImages(
                  fs.readFileSync(version_1_filePath),
                  fs.readFileSync(version_2_filePath),
                  options
                );

                const comparisonPath = `../Results/Comparison/${h}-${f}-compare-${file.slice(
                  0,
                  file.length - 4
                )}-${version_1}-${version_2}.png`;
                fs.writeFileSync(comparisonPath, data.getBuffer());

                resultInfo[h][f].push({
                  isSameDimensions: data.isSameDimensions,
                  dimensionDifference: data.dimensionDifference,
                  rawMisMatchPercentage: data.rawMisMatchPercentage,
                  misMatchPercentage: data.misMatchPercentage,
                  diffBounds: data.diffBounds,
                  analysisTime: data.analysisTime,
                  baseImagePath: version_1_filePath,
                  secondVersionImagePath: version_2_filePath,
                  comparisonResultImagePath: comparisonPath,
                });
              })
            );
          } catch (err) {
            return console.log("Unable to scan directory: " + err);
          }
        })
      );
    })
  );
};

const createReport = async () => {
  await executeTest();
  const datetime = new Date().toISOString().replace(/:/g, ".");

  const reportContent = `
      <html>
          <head>
              <title> VRT Report </title>
              <link href="index.css" type="text/css" rel="stylesheet">
          </head>
          <body>
              <h1>Report for ${config.ABP} </h1>
              <p>Executed: ${datetime}</p>
              <div id="visualizer">
                  ${herramientas.map((h) =>
                    detalleHerramienta(h, resultInfo[h])
                  )}
              </div>
          </body>
      </html>`;

  if (!fs.existsSync(`./reports/${datetime}`)) {
    fs.mkdirSync(`./reports/${datetime}`, { recursive: true });
  }
  fs.writeFileSync(`./reports/${datetime}/report.html`, reportContent);
  fs.copyFileSync("./index.css", `./reports/${datetime}/index.css`);
};

const detalleHerramienta = (h, info) => {
  return `<div class="browser" id="test0">
      <div class="btitle">
          <h2>Tool: ${h}</h2>
      </div>
      <div>
      ${funcionalidades.map((f) => detalleFuncionalidad(f, info))}
      </div>
      `;
};

const detalleFuncionalidad = (f, info) => {
  return `
          <h3>Feature: ${f}</h3>
          <div>
              ${info[f].map((escenario, index) =>
                detalleStep(escenario, index)
              )}
          </div>
        `;
};

const detalleStep = (escenario, index) => {
  return `
        <p>Step #${index}</p>
        <div class="imgline">
        <div class="imgcontainer">
            <span class="imgname">Reference</span>
            <img class="img2" src="../../${escenario.baseImagePath}" id="refImage" label="Reference">
        </div>
        <div class="imgcontainer">
            <span class="imgname">Test</span>
            <img class="img2" src="../../${escenario.secondVersionImagePath}" id="testImage" label="Test">
        </div>
        </div>
        <div class="imgline">
        <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="../../${escenario.comparisonResultImagePath}" id="diffImage" label="Diff">
        </div>
        </div>
        `;
};

createReport();
