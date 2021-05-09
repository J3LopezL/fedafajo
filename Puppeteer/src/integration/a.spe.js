const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");

describe("Create user", () => {
  beforeEach(async () => {
    jest.setTimeout(20000);
    await navigationPage.navigate(page);
  });

  it("Create User Admin", async () => {
    await userPage.createUser(page, {
      blogTitle: "Ghost Pruebas",
      blogName: "Test Ghost",
      blogEmail: "test@ghost.com",
      blogPassword: "123456abc*",
    });
    await expect(page).toMatch("test@ghost.com");
    await navigationPage.logout(page);
  });
});