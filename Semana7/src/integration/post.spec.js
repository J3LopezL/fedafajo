const navigationPage = require("../page-objects/navigation-page");
const post = require("../page-objects/post-page");
const config = require("../credentials");
const { getTagTestData, TYPE_DATA } = require("../test-data");

describe("Post", () => {
  afterEach(async () => {
    jest.setTimeout(20000);
    await navigationPage.navigate(page);
  });

  it("Start section Admin", async () => {
    await navigationPage.login(page, config.user, config.password);
    jest.setTimeout(20000);
    await expect(page).toMatch("Ghost Pruebas");
  });
});

describe("Post random data", () => {
  let tags = [];
  const number = 5;

  beforeAll(async () => {
    await navigationPage.navigate(page);
    tags = await getTagTestData(TYPE_DATA.RANDOM, number);
  });

  for (let index = 0; index < number; index++) {
    it(`Create Post - Random Data #${index}`, async () => {
      const tagData = tags[index];
      await post.listPost(page);
      await expect(page).toMatch("Posts");
      await post.createPost(page, tagData);
      await post.savePost(page);
      await post.listPost(page);
      await expect(page).toMatch(tagData.tagName);
    });
  }
});

