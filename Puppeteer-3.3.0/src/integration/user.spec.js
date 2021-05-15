const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");
const config = require("../credentials");

describe("Manager user", () => {
  var id = 0;
  beforeEach(async () => {
    jest.setTimeout(20000);
    await navigationPage.navigate(page);
    id += 1;
  });

  it("Login blanck User", async () => {
    await navigationPage.login(page, "", "Miso2021!");
    await expect(page).toMatch(/Please.*/);
    await page.screenshot({ path: `../Results/Puppeteer/v3.3.0/Login/user${id}.jpg`});
  });

  it("Login blanck password", async () => {
    await navigationPage.login(page, "jose@ghost.com", "");
    await expect(page).toMatch(/Please.*/);
    await page.screenshot({ path: `../Results/Puppeteer/v3.3.0/Login/user${id}.jpg`});
  });

  it("Login Invalid Password and User", async () => {
    await navigationPage.login(page, "jose@ghost.com", "Miso2021!");
    await expect(page).toMatch(/Acces.*/);
    await page.screenshot({ path: `../Results/Puppeteer/v3.3.0/Login/user${id}.jpg`});
  });

  it("Login Invalid Insist Click", async () => {
    await navigationPage.login(page, "jose@ghost.com", "Miso2021!");
    await userPage.clicsLogin(page);
    await expect(page).toMatch(/Too.*/);
    await page.screenshot({ path: `../Results/Puppeteer/v3.3.0/Login/user${id}.jpg`});
  });

  it("Login Valid", async () => {
    await navigationPage.login(page, config.user, config.password);
    await userPage.homePage(page);
    await expect(page).toMatch("test@ghost.com");
    await page.screenshot({ path: `../Results/Puppeteer/v3.3.0/Login/user${id}.jpg`});
  });
});
