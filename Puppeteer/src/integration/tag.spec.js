const navigationPage = require("../page-objects/navigation-page");
const tagPage = require("../page-objects/tag-page");
const faker = require("faker");

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
      tagSlug: "tagCompleto",
      tagDescription: "Descripción de un tag completo",
    });
    await expect(page).toMatch("Saved");
  });

  it("Create Tag with space in the name", async () => {
    await tagPage.createTag(page, {
      tagName: "     ",
      tagSlug: "tagConEspacios",
      tagDescription: "Descripción de un tag con espacios en el nombre",
    });
    await expect(page).toMatch("You must specify a name for the tag.");
    await tagPage.discardChanges(page);
  });

  it("Create Tag with empty name", async () => {
    await tagPage.createTag(page, {
      tagName: "",
      tagSlug: "",
      tagDescription: "Descripción de un tag vacío",
    });
    await expect(page).toMatch("You must specify a name for the tag.");
    await tagPage.discardChanges(page);
  });

  it("Create Tag with invalid description", async () => {
    await tagPage.createTag(page, {
      tagName: "Tag con descripción inválida",
      tagSlug: "tagDescripcionInvalida",
      tagDescription: faker.lorem.paragraph(20),
    });
    await expect(page).toMatch(
      "Description cannot be longer than 500 characters."
    );
    await tagPage.discardChanges(page);
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
