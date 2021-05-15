const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");
const config = require("../credentials");

describe("Create user", () => {
  beforeEach(async () => {
    jest.setTimeout(20000);
    await navigationPage.navigate(page);
  });

  it("Create User Admin", async () => {
    await userPage.createUser(page, {
      blogTitle: "Ghost Pruebas",
      blogName: "Test Ghost",
      blogEmail: config.user,
      blogPassword: config.password,
    });
    await expect(page).toMatch("test@ghost.com");
    jest.setTimeout(20000);
    await navigationPage.logout(page);
  });
});