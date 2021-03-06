const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");
const config = require("../loginData");
const faker = require("faker");

const { getLoginTestData, TYPE_DATA } = require("../test-data");

describe("Login", () => {
  beforeAll(async () => {
    // Jest config
    jest.setTimeout(20000);
    await navigationPage.navigate(page);
  });

  describe("a priori", () => {
    let users = [];
    const number = 5;

    beforeAll(async () => {
      users = await getLoginTestData(TYPE_DATA.APRIORI, number);
    });

    beforeEach(async () => {
      await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    });

    for (let index = 0; index < number; index++) {
      let identify = "Login loginData " + config[index].user;
      it(`Login loginData #${index}`, async () => {
        const userData = users[index];
        await navigationPage.login(page, userData.user, userData.password);
        await expect(page).toMatch("Please fill out the form to sign in. ");
      });
    }
  });

  describe("faker mock", () => {
    let users = [];
    const number = 5;

    beforeAll(async () => {
      users = await getLoginTestData(TYPE_DATA.RANDOM, number);
    });

    beforeEach(async () => {
      await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    });

    for (let index = 0; index < number; index++) {
      //   let identify = "Login faker random " + nUser;
      it(`Login faker random #${index}`, async () => {
        const userData = users[index];

        await navigationPage.login(page, userData.email, userData.password);
        await expect(page).toMatch(
          "There is no user with that email address. "
        );
      });
    }
  });

  describe('faker test@ghost.com', () => {
    let users = [];
    const number = 10;
    beforeAll(async () => {
      users = await getLoginTestData(TYPE_DATA.RANDOM, number);
    });

    beforeEach(async () => {
      await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    });

    for (let index = 0; index < number; index++) {
      it(`Login faker random #${index}`, async () => {
        const userData = users[index];
        const email = "test@ghost.com";
        await navigationPage.login(page, email, userData.password);
        let myError =  await page.evaluate(()=>{
          const p = document.querySelector('p');
          return p.innerText;
        });
        jest.setTimeout(10000);
        if (myError.length == 28) {
          await expect(page).toMatch("Your password is incorrect. ") }
        else {
          await expect(page).toMatch("Too many login attempts. ")
        }
        jest.setTimeout(10000);
      });
    }
  });
});
