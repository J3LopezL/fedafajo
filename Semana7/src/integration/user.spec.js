const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");
const config = require("../loginData");

describe("Manger user Ghost", () => {
  beforeEach(async () => {
    await navigationPage.navigate(page);
    jest.setTimeout(20000);
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
      });
    }catch(e) {}
  }
});
