const navigationPage = require("../page-objects/navigation-page");
const editPost = require("../page-objects/edit-page");
const config = require("../credentials");
const info = require("../aprioriData");
// se puede usan el json de más o menos de la estructura?

describe("Modify Post", () => {
  beforeEach(async () => {
    await navigationPage.navigate(page);
    jest.setTimeout(20000);
  });

  afterEach(async () => {
    await navigationPage.logout(page);
    jest.setTimeout(20000);
  });

   it("Select Post & Edit Title", async () => {
     await navigationPage.login(page, config.user, config.password);
     await expect(page).toMatch("test@ghost.com");
     await editPost.listPost(page);
     await expect(page).toMatch("Posts");

     await editPost.selectPost(page);
     await page.type("textarea", "Usar json aquí");
     await editPost.updatePost(page);
     await editPost.listPost(page);
     await expect(page).toMatch("Usar json aquí");
    });

  // it("Select Post & Edit with empty Title", async () => {
  //   await navigationPage.login(page, config.user, config.password);
  //   await expect(page).toMatch("test@ghost.com");
  //   await editPost.listPost(page);
  //   await expect(page).toMatch("Posts");

  //   await editPost.selectPost(page);
  //   await editPost.setEmptyTitle(page);
  //   await editPost.updatePost(page);
  //   await editPost.listPost(page);
  //   await expect(page).toMatch("(Untitled)");
  // });
});

