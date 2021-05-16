const navigationPage = require("../page-objects/navigation-page");
const pagePageObject = require("../page-objects/page-page");
const faker = require("faker");
const config = require("../credentials");
const fs = require("fs");

describe("Create Page", () => {
  const pathImages = "../Results/Puppeteer/v3.3.0/CreatePage";

  beforeAll(async () => {
    await fs.promises.rmdir(pathImages, { recursive: true });
    await fs.promises.mkdir(pathImages, { recursive: true });
  });

  beforeEach(async () => {
    jest.setTimeout(50000);
    await navigationPage.navigate(page);
    await navigationPage.login(page, config.user, config.password);
    await page.screenshot({
      path: `${pathImages}/homepage.jpg`,
    });
  });

  afterEach(async () => {
    await navigationPage.logout(page);
    await page.screenshot({
      path: `${pathImages}/logout.jpg`,
    });
  });

  it("Create Page and publish it successfully", async () => {
    const pageTitle = faker.random.word();
    const pageContent = faker.lorem.lines(1);

    let counter = 0;
    const slug = "PageCreated";

    async function takeScreenshot(slug) {
      await page.screenshot({
        path: `${pathImages}/${slug}${counter++}.jpg`,
      });
    }

    await pagePageObject.createPage(page, slug, takeScreenshot);
    await pagePageObject.addContent(
      page,
      pageTitle,
      pageContent,
      slug,
      takeScreenshot
    );
    await pagePageObject.publishPage(page, slug, takeScreenshot);

    await expect(page).toMatch("Published");

    await page.click('a[href="#/pages/"]');
    await new Promise((r) => setTimeout(r, 1000));
    await page.click(".gh-notification-close");

    await expect(page).toMatch(pageTitle);
  });

  it("Create Page and schedule it successfully", async () => {
    const pageTitle = faker.random.word();
    const pageContent = faker.lorem.lines(1);

    let counter = 0;
    const slug = "PageScheduled";

    async function takeScreenshot(slug) {
      await page.screenshot({
        path: `${pathImages}/${slug}${counter++}.jpg`,
      });
    }

    await pagePageObject.createPage(page, slug, takeScreenshot);
    await pagePageObject.addContent(
      page,
      pageTitle,
      pageContent,
      slug,
      takeScreenshot
    );
    await pagePageObject.schedulePage(page, slug, takeScreenshot);

    await expect(page).toMatch("Scheduled");

    await page.click('a[href="#/pages/"]');
    await new Promise((r) => setTimeout(r, 1000));
    await page.click(".gh-notification-close");

    await expect(page).toMatch(pageTitle);
  });

  it("Create draft Page", async () => {
    const pageTitle = faker.random.word();
    const pageContent = faker.lorem.lines(1);

    let counter = 0;
    const slug = "PageDraft";

    async function takeScreenshot(slug) {
      await page.screenshot({
        path: `${pathImages}/${slug}${counter++}.jpg`,
      });
    }

    await pagePageObject.createPage(page, slug, takeScreenshot);
    await pagePageObject.addContent(
      page,
      pageTitle,
      pageContent,
      slug,
      takeScreenshot
    );

    await page.click('a[href="#/pages/"]');
    await new Promise((r) => setTimeout(r, 1000));

    await expect(page).toMatch(pageTitle);
  });

  it("Create Page, try to edit the first page but discard changes", async () => {
    const pageTitle = faker.random.word();
    const pageContent = faker.lorem.lines(1);

    const pageTitleEdit = faker.random.word();

    let counter = 0;
    const slug = "PageDiscardChanges";

    async function takeScreenshot(slug) {
      await page.screenshot({
        path: `${pathImages}/${slug}${counter++}.jpg`,
      });
    }

    await pagePageObject.createPage(page, slug, takeScreenshot);
    await pagePageObject.addContent(
      page,
      pageTitle,
      pageContent,
      slug,
      takeScreenshot
    );
    await pagePageObject.publishPage(page, slug, takeScreenshot);

    await expect(page).toMatch("Published");

    await page.click('a[href="#/pages/"]');
    await new Promise((r) => setTimeout(r, 1000));
    await page.click(".gh-notification-close");

    await expect(page).toMatch(pageTitle);

    await pagePageObject.selectFirstPageFromList(page, slug, takeScreenshot);

    await pagePageObject.addContent(
      page,
      pageTitleEdit,
      null,
      slug,
      takeScreenshot
    );
    await pagePageObject.discardChanges(page, slug, takeScreenshot);
  });
});
