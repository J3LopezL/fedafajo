const navigationPage = require("../page-objects/navigation-page");
const tagPage = require("../page-objects/tag-page");
const faker = require("faker");

describe("create User", () => {
  beforeEach(async () => {
    jest.setTimeout(20000);
    await navigationPage.navigate(page);
  });

  it("Create User Admin", async () => {
    await tagPage.createUser(page, {
      blogTitle: "Ghost Pruebas",
      blogName: "Test Ghost",
      blogEmail: "test@ghost.com",
      blogPassword:  "123456abc*",
    });
    await expect(page).toMatch("test@ghost.com");
    await navigationPage.logout(page);
  });

  it("Login Invalid User", async () => {
    await navigationPage.login(page, "jose","Miso2021!");
    await expect(page).toMatch(/Please.*/);
  });

  it("Login Invalid Password and User", async () => {
    await navigationPage.login(page, "jose@ghost.com", "Miso2021!");
    await expect(page).not.toMatch("jose@ghost");
    await expect(page).toMatch(/Acces.*/);
  });

  it("Login blanck User", async () => {
    await navigationPage.login(page, "", "Miso2021!");
    await expect(page).toMatch(/Please.*/);
  });

  it("Login blanck password", async () => {
    await navigationPage.login(page, "jose@ghost.com", "");
    await expect(page).toMatch(/Please.*/);
  });

  it("Login Valid", async () => {
    await navigationPage.login(page, "test@ghost.com", "123456abc*");
    await tagPage.homePage(page);
    await expect(page).toMatch("test@ghost.com");
    await navigationPage.logout(page);
  });
});

describe("Create Tag", () => {
  beforeEach(async () => {
    jest.setTimeout(20000);
    await navigationPage.navigate(page);
    await navigationPage.login(page, "test@ghost.com", "123456abc*");
  });

  afterEach(async () => {
    await navigationPage.logout(page);
  });

  it("Create Valid Tag", async () => {
    await tagPage.createTag(page, {
      tagName: "Tag completo",
      tagSlug: "tag-completo",
      tagDescription: "Descripción de un tag completo",
    });
    await expect(page).toMatch("Saved");
    await tagPage.listTags(page);
    await expect(page).toMatch("tag-completo");
  });

  it("Create Tag with space in the name", async () => {
    await tagPage.createTag(page, {
      tagName: "     ",
      tagSlug: "tag-con-espacios",
      tagDescription: "Descripción de un tag con espacios en el nombre",
    });
    await expect(page).toMatch("You must specify a name for the tag.");
    await tagPage.discardChanges(page);
    await tagPage.listTags(page);
    await expect(page).not.toMatch("tag-con-espacios");
  });

  it("Create Tag with empty name", async () => {
    await tagPage.createTag(page, {
      tagName: "",
      tagSlug: "tag-vacio",
      tagDescription: "",
    });
    await expect(page).toMatch("You must specify a name for the tag.");
    await tagPage.discardChanges(page);
    await tagPage.listTags(page);
    await expect(page).not.toMatch("tag-vacio");
  });

  it("Create Tag with invalid description", async () => {
    await tagPage.createTag(page, {
      tagName: "Tag con descripción inválida",
      tagSlug: "tag-descripcion-invalida",
      tagDescription: faker.lorem.paragraph(30),
    });
    await expect(page).toMatch(
      "Description cannot be longer than 500 characters."
    );
    await tagPage.discardChanges(page);
    await tagPage.listTags(page);
    await expect(page).not.toMatch("tag-descripcion-invalida");
  });

  // describe('onboarding', () => {
  //     const formSelector = 'form[action^="/"]';
  //     const submitSelector = 'input[name="commit"]';
  //     const reasonSelector = 'input[name="reason"]';
  //     const feedbackSelector = 'textarea[name="feedback"]';
  //     const passwordSelector = 'input[name="password"]';

  //     const firstName = faker.name.firstName();
  //     const lastName = faker.name.lastName();
  //     const fullName = `${firstName} ${lastName}`;
  //     const email = faker.internet.email();
  //     const pass = faker.internet.password();

  //     it('should click "Find a Startup Job" link', async () => {
  //         await expect(page).toClick('a', { text: 'Find a Startup Job', waitUntil: 'domcontentloaded' });
  //         await page.waitFor(500); // allow enough time for new page to load
  //         await expect(page).toMatch('Email Sign Up');
  //     });

  //     it('should fail with too short of password', async () => {
  //         const formSelector = 'form[action^="/"]';
  //         const submitSelector = 'input[name="commit"]';

  //         await expect(page).toFillForm(formSelector, {
  //             ['user[name]']: faker.name.findName(),
  //             ['user[email]']: faker.internet.email(),
  //             ['user[password]']: 'oops'
  //         });
  //         await page.click(submitSelector);
  //         await page.waitFor(500);
  //         await expect(page).toMatch('Password is too short (minimum is 8 characters)');
  //         await util.timeout(1000); // just so you can see if in voyeur mode
  //     });

  //     it('should create a new account and greet by first name', async () => {
  //         await page.reload();
  //         await expect(page).toFillForm(formSelector, {
  //             ['user[name]']: fullName,
  //             ['user[email]']: email,
  //             ['user[password]']: pass
  //         });
  //         await page.click(submitSelector);
  //         await page.waitForNavigation();
  //         await expect(page).toMatch(`Profile`);
  //         await util.timeout(1000); // just so you can see it if in voyeur mode
  //     });

  //     it('should delete fake account', async () => {
  //         await page.goto('https://angel.co/settings');
  //         await expect(page).toClick('a', { text: 'Delete account' });
  //         await page.waitForNavigation();
  //         // give a reason
  //         await expect(page).toSelect(reasonSelector, 'other');
  //         await expect(page).toFill(feedbackSelector, 'I was just testing this out but have another account. Sorry for trouble.');
  //         await expect(page).toClick('a', { text: 'Continue' });
  //         await page.waitForNavigation();
  //         // confirm credentials
  //         await expect(page).toMatch('Last step before you delete your account..');
  //         await expect(page).toFill(passwordSelector, pass);
  //         await page.click(submitSelector);
  //         await util.timeout(1000); // just so you can see it if in voyeur mode
  //     });
  // });
});
