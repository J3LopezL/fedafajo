const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");
const config = require("../credentials");
const faker = require("faker");

describe("Manager user", () => {
  var id = 0;
  beforeEach(async () => {
    await page.waitFor(1000);
    await navigationPage.navigate(page);
    id += 1;
  });

  it("Login blanck User", async () => {
    const npass = faker.random.word();
    await navigationPage.login(page, "", npass);
    await expect(page).toMatch(/Please.*/);
    await page.screenshot({ path: `../Results/Puppeteer/v3.42.5/Login/user${id}.jpg`});
  });

  it("Login blanck password", async () => {
    const nuser = faker.random.word();
    await navigationPage.login(page, `${nuser}@ghost.com`, "");
    await expect(page).toMatch(/Please.*/);
    await page.screenshot({ path: `../Results/Puppeteer/v3.42.5/Login/user${id}.jpg`});
  });

  it("Login Invalid Password and User", async () => {
    const ouser = faker.random.word();
    const opass = faker.random.word();
    await navigationPage.login(page, `${ouser}@ghost.com`, opass);
    await expect(page).not.toMatch("jose@ghost");
    await expect(page).toMatch(/There.*/);
    await page.screenshot({ path: `../Results/Puppeteer/v3.42.5/Login/user${id}.jpg`});
  });

  it("Login Invalid Insist Click", async () => {
    const suser = faker.random.word();
    const spass = faker.random.word();
    await navigationPage.login(page, `${suser}@ghost.com`, spass);
    await expect(page).not.toMatch("jose@ghost");
    await userPage.clicsLogin(page);
    await expect(page).toMatch(/Too.*/);
    await page.screenshot({ path: `../Results/Puppeteer/v3.42.5/Login/user${id}.jpg`});
  });

  it("Login Valid", async () => {
    await navigationPage.login(page, config.user, config.password);
    await expect(page).toMatch("Ghost Pruebas");
    await page.screenshot({ path: `../Results/Puppeteer/v3.42.5/Login/user${id}.jpg`});
  });
});
