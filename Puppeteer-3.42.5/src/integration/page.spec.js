const navigationPage = require("../page-objects/navigation-page");
const pagePageObject = require("../page-objects/page-page");
const faker = require("faker");
const config = require("../credentials");

describe("Create Page", () => {
  beforeEach(async () => {
    jest.setTimeout(50000);
    await navigationPage.navigate(page);
    await navigationPage.login(page, config.user, config.password);
  });

  afterEach(async () => {
    await navigationPage.logout(page);
  });

  it("Create Page and publish it successfully", async () => {
    const pageTitle = faker.random.word();
    const pageContent = faker.lorem.lines(1);

    await pagePageObject.createPage(page);
    await pagePageObject.addContent(page, pageTitle, pageContent);
    await pagePageObject.publishPage(page);

    await expect(page).toMatch("Published");

    await page.goBack();
    await new Promise((r) => setTimeout(r, 1000));
    await page.click(".gh-notification-close");

    await expect(page).toMatch(pageTitle);
  });

  it("Create Page and schedule it successfully", async () => {
    const pageTitle = faker.random.word();
    const pageContent = faker.lorem.lines(1);

    await pagePageObject.createPage(page);
    await pagePageObject.addContent(page, pageTitle, pageContent);
    await pagePageObject.schedulePage(page);

    await expect(page).toMatch("Scheduled");

    await page.goBack();
    await new Promise((r) => setTimeout(r, 1000));
    await page.click(".gh-notification-close");

    await expect(page).toMatch(pageTitle);
  });

  it("Create draft Page", async () => {
    const pageTitle = faker.random.word();
    const pageContent = faker.lorem.lines(1);

    await pagePageObject.createPage(page);
    await pagePageObject.addContent(page, pageTitle, pageContent);

    await page.goBack();
    await new Promise((r) => setTimeout(r, 1000));

    await expect(page).toMatch(pageTitle);
  });

  it("Create Page, try to edit the first page but discard changes", async () => {
    const pageTitle = faker.random.word();
    const pageContent = faker.lorem.lines(1);

    const pageTitleEdit = faker.random.word();

    await pagePageObject.createPage(page);
    await pagePageObject.addContent(page, pageTitle, pageContent);
    await pagePageObject.publishPage(page);

    await expect(page).toMatch("Published");

    await page.goBack();
    await new Promise((r) => setTimeout(r, 1000));
    await page.click(".gh-notification-close");

    await expect(page).toMatch(pageTitle);

    await pagePageObject.selectFirstPageFromList(page);

    await pagePageObject.addContent(page, pageTitleEdit);
    await pagePageObject.discardChanges(page);
  });
});
