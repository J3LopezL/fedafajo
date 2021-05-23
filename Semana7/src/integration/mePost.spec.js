const navigationPage = require("../page-objects/navigation-page");
const post = require("../page-objects/post-page");
const config = require("../credentials");
const info = require("../Mock_Data");

describe("Modify post apriori stage", () => {
  beforeEach(async () => {
    await navigationPage.navigate(page);
    jest.setTimeout(20000);
  });

  afterEach(async () => {
    await navigationPage.logout(page);
    jest.setTimeout(20000);
  });

  it("Start section with Admin", async () => {
    await navigationPage.login(page, config.user, config.password);
    await expect(page).toMatch("test@ghost.com");
  });

  for (let i=0; i < info.length; i++) {
    let identify = "Select Post & Edit Title " + info[i].Name;
    it(identify, async () => {
      await post.listPost(page);
      await expect(page).toMatch("Posts");
      await post.selectPost(page);
      await page.type("textarea", info[i].Name);
      await post.updatePost(page);
      await post.listPost(page);
      await expect(page).toMatch(info[i].Name);
    });
  }
});
