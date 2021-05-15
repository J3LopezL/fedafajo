const navigationPage = require("../page-objects/navigation-page");
const postPage = require("../page-objects/post-page");
const faker = require("faker");
const config = require("../credentials");

describe("Create Post", () => {
  beforeEach(async () => {
    jest.setTimeout(50000);
    await navigationPage.navigate(page);
    await navigationPage.login(page, config.user, config.password);
  });

  afterEach(async () => {
    await navigationPage.logout(page);
  });

  it("Create and Publish a Post", async () => {
    const postTitle = faker.random.word();
    const postContent = faker.lorem.lines(2);

    await postPage.createPost(page, postTitle, postContent);
    await postPage.publishPost(page);
    await expect(page).toMatch("Published");

    await page.goBack();
    await new Promise((r) => setTimeout(r, 1000));
    await page.click(".gh-notification-close");

    await expect(page).toMatch(postTitle);
  });

  it("Create and Cancel a Post Publishing attempt", async () => {
    const postTitle = faker.random.word();
    const postContent = faker.lorem.lines(2);

    await postPage.createPost(page, postTitle, postContent);
    await postPage.cancelPost(page);

    await postPage.discardChanges(page);

    await expect(page).toMatch(postTitle);
  });

  it("Create and Publish a Post Scheduled", async () => {
    const postTitle = faker.random.word();
    const postContent = faker.lorem.lines(2);

    await postPage.createPost(page, postTitle, postContent);
    await postPage.schedulePost(page);

    await expect(page).toMatch("Scheduled");

    await page.goBack();
    await new Promise((r) => setTimeout(r, 1000));
    await page.click(".gh-notification-close");

    await expect(page).toMatch(postTitle);
  });

  it("Create draft Post", async () => {
    const postTitle = faker.random.word();
    const postContent = faker.lorem.lines(1);

    await postPage.createPost(page, postTitle, postContent);
    await page.goBack();
    await new Promise((r) => setTimeout(r, 1000));

    await expect(page).toMatch(postTitle);
  });
});
