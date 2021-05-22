const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");
const faker = require("faker");

describe("Manager user aleatorio", () => {
  beforeEach(async () => {
    await page.waitFor(1000);
    await navigationPage.navigate(page);
  });
  for (let i=0; i < 15; i++) {
    let nUser = faker.internet.email();
  try {
    let identify = "Start user " + nUser
    it(identify, async () => {
      await navigationPage.login(page, `${nUser}`, faker.internet.password());
      await expect(page).toMatch("There is no user with that email address. ");
      });      
    }catch(e) {}
  }
});
