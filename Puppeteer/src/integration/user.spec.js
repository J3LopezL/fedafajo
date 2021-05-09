const navigationPage = require("../page-objects/navigation-page");
const userPage = require("../page-objects/user-page");

describe("Manager user", () => {
    beforeEach(async () => {
      jest.setTimeout(20000);
      await navigationPage.navigate(page);
    });

    it("Login blanck User", async () => {
      await navigationPage.login(page, "", "Miso2021!");
      await expect(page).toMatch(/Please.*/);
    });
  
    it("Login blanck password", async () => {
      await navigationPage.login(page, "jose@ghost.com", "");
      await expect(page).toMatch(/Please.*/);
    });
      
    it("Login Invalid Password and User", async () => {
      await navigationPage.login(page, "jose@ghost.com", "Miso2021!");
      await expect(page).not.toMatch("jose@ghost");
      await expect(page).toMatch(/Acces.*/);
    });
  
    it("Login Valid", async () => {
      await navigationPage.login(page, "test@ghost.com", "123456abc*");
      await userPage.homePage(page);
      await expect(page).toMatch("test@ghost.com");
      await navigationPage.logout(page);
    });
  });
 
