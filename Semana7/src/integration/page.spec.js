const navigationPage = require("../page-objects/navigation-page");
const config = require("../credentials");
const pagePageObject = require("../page-objects/page-page");

const { getPageTestData, TYPE_DATA } = require("../test-data");

describe("Page", () => {
  beforeAll(async () => {
    // Jest config
    jest.setTimeout(50000);
    await navigationPage.navigate(page);
    await navigationPage.login(page, config.user, config.password);
  });

  describe("random", () => {
    let pages = [];
    const number = 10;

    beforeAll(async () => {
      await navigationPage.navigate(page);
      pages = await getPageTestData(TYPE_DATA.RANDOM, number);
    });

    beforeEach(async () => {
      await navigationPage.navigate(page);
    });

    for (let index = 0; index < number; index++) {
      it(`Create Page #${index}`, async () => {
        const pageData = pages[index];

        await pagePageObject.createPage(page);
        await pagePageObject.addContent(page, pageData.title, pageData.content);
        await pagePageObject.publishPage(page);

        await expect(page).toMatch("Published");

        await page.click('a[href="#/pages/"]');
        await new Promise((r) => setTimeout(r, 1000));
        await page.click(".gh-notification-close");

        await expect(page).toMatch(pageData.title);
      });
    }
  });

  describe("a priori", () => {
    let pages = [];
    const number = 3;

    beforeAll(async () => {
      await navigationPage.navigate(page);
      pages = await getPageTestData(TYPE_DATA.APRIORI, number);
    });

    beforeEach(async () => {
      await navigationPage.navigate(page);
    });

    for (let index = 0; index < number; index++) {
      it(`Create Page #${index}`, async () => {
        const pageData = pages[index];

        await pagePageObject.createPage(page);
        await pagePageObject.addContent(page, pageData.title, pageData.content);
        await pagePageObject.publishPage(page);

        await expect(page).toMatch("Published");

        await page.click('a[href="#/pages/"]');
        await new Promise((r) => setTimeout(r, 1000));
        await page.click(".gh-notification-close");

        await expect(page).toMatch(pageData.title);
      });
    }
  });

  describe("mock", () => {
    let pages = [];
    const number = 1;

    beforeAll(async () => {
      await navigationPage.navigate(page);
      pages = await getPageTestData(TYPE_DATA.SEMI, number);
    });

    beforeEach(async () => {
      await navigationPage.navigate(page);
    });

    for (let index = 0; index < number; index++) {
      it(`Create page #${index}`, async () => {
        const pageData = pages[index];

        await pagePageObject.createPage(page);
        await pagePageObject.addContent(page, pageData.title, pageData.content);
        await pagePageObject.publishPage(page);

        await expect(page).toMatch("Published");

        await page.click('a[href="#/pages/"]');
        await new Promise((r) => setTimeout(r, 1000));
        await page.click(".gh-notification-close");

        await expect(page).toMatch(pageData.title);
      });
    }
  });
});
