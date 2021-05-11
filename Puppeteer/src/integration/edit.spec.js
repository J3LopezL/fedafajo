const navigationPage = require("../page-objects/navigation-page");
const editPost = require("../page-objects/edit-page");
const config = require("../credentials");

describe("Modify Post", () => {
  beforeEach(async () => {
    jest.setTimeout(20000);
  });

   it("Select Post & Edit Title", async () => {
     await navigationPage.navigate(page);
     await navigationPage.login(page, config.user, config.password);
     await expect(page).toMatch("test@ghost.com");
     await editPost.listPost(page);
     await expect(page).toMatch("Posts");

     await editPost.selectPost(page);
     await page.type("textarea", " 3.3.0, Team 4");
     await editPost.updatePost(page);
     await editPost.listPost(page);
     await expect(page).toMatch("Team 4");

     await navigationPage.navigate(page);
     await navigationPage.logout(page);
   });

  it("Select Post & Edit with empty Title", async () => {
    await navigationPage.navigate(page);
    await navigationPage.login(page, config.user, config.password);
    await expect(page).toMatch("test@ghost.com");
    await editPost.listPost(page);
    await expect(page).toMatch("Posts");

    await editPost.selectPost(page);
    await editPost.setEmptyTitle(page);
    await editPost.updatePost(page);
    await editPost.listPost(page);
    await expect(page).toMatch("(Untitled)");

    await navigationPage.navigate(page);
    await navigationPage.logout(page);
  });
});

