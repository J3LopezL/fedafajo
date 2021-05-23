const navigationPage = require("../page-objects/navigation-page");
const post = require("../page-objects/post-page");
const config = require("../credentials");
const { getPostTestData, TYPE_DATA } = require("../test-data");

describe("Post", () => {
  beforeAll(async () => {
    // Jest config
    jest.setTimeout(50000);
    await navigationPage.navigate(page);
    await navigationPage.login(page, config.user, config.password);
  });

  afterEach(async () => {
    jest.setTimeout(20000);
    await navigationPage.navigate(page);
  });

  describe("Random data", () => {
    let posts = [];
    const number = 2;

    beforeAll(async () => {
      await navigationPage.navigate(page);
      posts = await getPostTestData(TYPE_DATA.RANDOM, number);
    });

    for (let index = 0; index < number; index++) {
      it(`Create Post - Random Data #${index}`, async () => {
        const postData = posts[index];
        await post.listPost(page);
        await expect(page).toMatch("Posts");
        await post.createPost(page, postData);
        await post.savePost(page);
        await post.listPost(page);
        await expect(page).toMatch(postData.titulo);
      });
    }
  });

  describe("A priori", () => {
    let posts = [];
    const number = 5;

    beforeAll(async () => {
      await navigationPage.navigate(page);
      posts = await getPostTestData(TYPE_DATA.APRIORI, number);
    });

    for (let index = 0; index < number; index++) {
      it(`Create Post - Random Data #${index}`, async () => {
        const postData = posts[index];
        await post.listPost(page);
        await expect(page).toMatch("Posts");
        await post.createPost(page, postData);
        await post.savePost(page);
        await post.listPost(page);
        await expect(page).toMatch(postData.titulo);
      });
    }
  });
});
