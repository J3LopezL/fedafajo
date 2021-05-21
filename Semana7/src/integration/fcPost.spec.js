const navigationPage = require("../page-objects/navigation-page");
const post = require("../page-objects/post-page");
const config = require("../credentials");
const faker = require("faker");

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

  for (let i=0; i < 10; i++) {
    const myTitle = faker.random.word();
    const myDescription = faker.random.words();
    let identify = "Create post " + myTitle;
    it(identify, async () => {
      await post.listPost(page);
      await expect(page).toMatch("Posts");
      await post.createPost(page, myTitle, myDescription);
      await post.savePost(page);
      await post.listPost(page);
      await expect(page).toMatch(myTitle);
      jest.setTimeout(20000);
    });
  }
});

