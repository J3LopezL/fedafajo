const navigationPage = require("../page-objects/navigation-page");
const postPage = require("../page-objects/post-page");
const faker = require("faker");
const config = require("../credentials");
const fs = require("fs");

describe("Create Post", () => {
  
    const pathImg = "../Results/Puppeteer/v3.42.5/CreatePost"; 
  
    beforeAll(async () => {
        jest.setTimeout(20000);
        await fs.promises.rmdir(pathImg, { recursive: true });
        await fs.promises.mkdir(pathImg, { recursive: true });
    });

    beforeEach(async () => {
        jest.setTimeout(50000);
        await navigationPage.navigate(page);
        await navigationPage.login(page, config.user, config.password);
        await page.screenshot({
          path: `${pathImg}/home.jpg`,
        });
    });

    afterEach(async () => {
        await navigationPage.logout(page);
    });

    it("Create and Publish a Post", async () => {
        const postTitle = faker.random.word();
        const postContent = faker.lorem.lines(2);

        let pageNumber = 1;
        const slug = "PostCreated";

        async function takeShot(slug) {
            await page.screenshot({
                path: `${pathImg}/${slug}${pageNumber++}.jpg`,
            });
        }
        
        await postPage.createPost(page, slug, takeShot);
        await postPage.contentPost(page, postTitle, postContent, slug, takeShot);
        await postPage.publishPost(page, slug, takeShot);
        await expect(page).toMatch("Published");

        await page.click('a[href="#/posts/"]');
        await new Promise((r) => setTimeout(r, 1000));
        await page.click(".gh-notification-close");
    
        await expect(page).toMatch(postTitle);
    });
});
