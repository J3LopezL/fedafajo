const navigationPage = require("../page-objects/navigation-page");
const tagPage = require("../page-objects/tag-page");
const faker = require("faker");
const config = require("../credentials");

describe("Create Tag", () => {
  beforeEach(async () => {
    jest.setTimeout(50000);
    await navigationPage.navigate(page);
    await navigationPage.login(page, config.user, config.password);
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

  it.only("Create Tag with space in the name", async () => {
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
});
