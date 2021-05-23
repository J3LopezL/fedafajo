const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");
const config = require("../loginData");
let limite = config.length -1;
const faker = require("faker");
const numFaker = 5;

describe("Login user Ghost", () => {
  beforeEach(async () => {
    await navigationPage.navigate(page);
    jest.setTimeout(20000);
  });

  for (let i=0; i < limite; i++) {
    try {
      let identify = "Login loginData " + config[i].user;
      it(identify, async () => {
        await navigationPage.login(page, config[i].user, config[i].password);
        await expect(page).toMatch("Please fill out the form to sign in. ");
      });
    }catch(e) {}
  }

  for (let i=0; i < numFaker; i++) {
    let nUser = faker.internet.email();
  try {
    let identify = "Login faker random " + nUser
    it(identify, async () => {
      await navigationPage.login(page, `${nUser}`, faker.internet.password());
      await expect(page).toMatch("There is no user with that email address. ");
      });      
    }catch(e) {}
  }
  
  for (let i=0; i < numFaker - 1; i++) {
    let uUser = "test@ghost.com";
  try {
    let identify = "Login faker only " + uUser
    it(identify, async () => {
      await navigationPage.login(page, `${uUser}`, faker.internet.password());
      await expect(page).toMatch(/Your password.*/);
      });      
    }catch(e) {}
  }
});