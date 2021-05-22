const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");
const config = require("../loginData");
let validM = "Ghost Pruebas";
let limite = config.length -1;

describe("Manager user seudo aleatorio", () => {
  beforeEach(async () => {
    await page.waitFor(1000);
    await navigationPage.navigate(page);
  });

  for (let i=0; i < limite; i++) {
    try {
      let identify = "Start user " + config[i].user;
      it(identify, async () => {
        await navigationPage.login(page, config[i].user, config[i].password);
        await expect(page).toMatch("Please fill out the form to sign in. ");
      });
    }catch(e) {}
  }
});
