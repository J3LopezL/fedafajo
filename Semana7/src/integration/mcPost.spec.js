const navigationPage = require("../page-objects/navigation-page");
const post = require("../page-objects/post-page");
const config = require("../credentials");
const info = require("../Mock_Data");

describe("Modify post positive stage", () => {

  afterEach(async () => {
    jest.setTimeout(20000);
  });

  it("Start section with Admin", async () => {
    await navigationPage.navigate(page);
    jest.setTimeout(20000);
    await navigationPage.login(page, config.user, config.password);
    await expect(page).toMatch("test@ghost.com");
  });

  for (let i=0; i < info.length; i++) {
    let identify = "Create post " + info[i].Name
    it(identify, async () => {
      await post.listPost(page);
      await expect(page).toMatch("Posts");
      await post.createPost(page, info[i].Name, info[i].Description);
      await post.savePost(page);
      await post.listPost(page);
      await expect(page).toMatch(info[i].Name);
      jest.setTimeout(20000);
    });
  }
});

