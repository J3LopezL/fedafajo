const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");
const config = require("../loginData");
const { page } = require("../aprioriData");
let validU = "";

describe("Create user", () => {
  beforeEach(async () => {
    jest.setTimeout(20000);
    await navigationPage.navigate(page);
  });

  for (let i=0; i < config.length; i++) {
    if (i == config.length - 1){
      validU = "Invite staff users";
    } else {
      validU = "Last step: Invite staff users ";
    }
    try {
      identify = "Create user Admin " + config[i].user;
        it(identify, async () => {
          await userPage.createUser(page, {
            blogTitle: "Ghost Pruebas",
            blogName: "Test Ghost",
            blogEmail: config[i].user,
            blogPassword: config[i].password,
          });
        await expect(page).toMatch(`${validU}`);
        await navigationPage.logout(page);
      });
    }catch(e) { console.log(e)}
  }
});