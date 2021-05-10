const navigationPage = require("../page-objects/navigation-page");
const editPost = require("../page-objects/edit-page");
const config = require("../credentials");

describe("Modify Post", () => {
  beforeEach(async () => {
    jest.setTimeout(20000);
  });

  it("Login user Admin", async () => {
    await navigationPage.navigate(page);
    await navigationPage.login(page, config.user, config.password);
    await expect(page).toMatch("test@ghost.com");
    await editPost.listPost(page);
    await expect(page).toMatch("Posts");
  });

  it("Select Post Edit Title", async () => {
    await editPost.selectPost(page);
    await page.type("textarea", " 3.3.0, Team 4");
    await editPost.updatePost(page);
    await editPost.listPost(page);
    await expect(page).toMatch(/Welcome.*4/);
  });

  it("Exit application", async () => {
    await navigationPage.navigate(page);
    await navigationPage.logout(page);
  });
});
