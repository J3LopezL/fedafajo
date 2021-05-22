const navigationPage = require("../page-objects/navigation-page");
const tagPage = require("../page-objects/tag-page");
const config = require("../credentials");
const { getTagTestData, TYPE_DATA } = require("../test-data");

describe("Tag", () => {
  describe.only("random data", () => {
    let tags = [];
    const number = 3;

    beforeAll(async () => {
      // Jest config
      jest.setTimeout(50000);
      await navigationPage.navigate(page);
      await navigationPage.login(page, config.user, config.password);
      tags = await getTagTestData(TYPE_DATA.RANDOM, number);
    });

    for (let index = 0; index < number; index++) {
      it(`faker #${index}`, async () => {
        const tagData = tags[index];
        await tagPage.createTag(page, tagData);
        await expect(page).toMatch("Saved");
        await tagPage.listTags(page);
        await expect(page).toMatch(tagData.tagSlug);
      });
    }
  });

  describe.skip("a priori", () => {
    let tags = [];
    const number = 5;

    beforeAll(async () => {
      // Jest config
      jest.setTimeout(50000);
      await navigationPage.navigate(page);
      await navigationPage.login(page, config.user, config.password);
      tags = await getTagTestData(TYPE_DATA.APRIORI, number);
    });

    for (let index = 0; index < number; index++) {
      it(`faker #${index}`, async () => {
        const tagData = tags[index];
        await tagPage.createTag(page, tagData);
        await expect(page).toMatch("Saved");
        await tagPage.listTags(page);
        await expect(page).toMatch(tagData.tagSlug);
      });
    }
  });

  describe.skip("mock", () => {
    let tags = [];
    const number = 2;

    beforeAll(async () => {
      // Jest config
      jest.setTimeout(50000);
      await navigationPage.navigate(page);
      await navigationPage.login(page, config.user, config.password);
      tags = await getTagTestData(TYPE_DATA.SEMI, number);
    });

    for (let index = 0; index < number; index++) {
      it(`Create Tag - Random Data #${index}`, async () => {
        const tagData = tags[index];
        await tagPage.createTag(page, tagData);
        await expect(page).toMatch("Saved");
        await tagPage.listTags(page);
        await expect(page).toMatch(tagData.tagSlug);
      });
    }
  });

  // const tags = getTagTestData(type.RANDOM, 1);

  // beforeAll(async () => {
  //   // Jest config
  //   jest.setTimeout(50000);
  //   await navigationPage.navigate(page);
  //   await navigationPage.login(page, config.user, config.password);

  //   // dynamicEntries = await axios.get(
  //   //   "https://my.api.mockaroo.com/valid_tags.json?key=4a5d83e0"
  //   // );
  // });

  // for (let i = 0; i < aPrioriEntries.length; i++) {
  //   it(`Create Invalid Tag - A Priori Data #${i}`, async () => {
  //     const tagData = aPrioriEntries[i];
  //     await tagPage.createTag(page, tagData);
  //     await tagPage.discardChanges(page);
  //     await tagPage.listTags(page);
  //     await expect(page).not.toMatch(tagData.tagSlug);
  //   });
  // }

  // for (let i = 0; i < dynamicEntries.length; i++) {
  //   it(`Create Valid Tag - Dynamic Data #${i}`, async () => {
  //     const tagData = dynamicEntries[i];
  //     await tagPage.createTag(page, tagData);
  //     await expect(page).toMatch("Saved");
  //     await tagPage.listTags(page);
  //     await expect(page).toMatch(tagData.tagSlug);
  //   });
  // }

  // test.each(tags)(
  //   "%s", // <-- This will cause the toString method to be called.
  //   async (tag) => {
  //     await tagPage.createTag(page, tag);
  //     await expect(page).toMatch("Saved");
  //     await tagPage.listTags(page);
  //     await expect(page).toMatch(tagData.tagSlug);
  //   }
  // );

  // it("Create Tag with space in the name", async () => {
  //   await tagPage.createTag(page, {
  //     tagName: "     ",
  //     tagSlug: "tag-con-espacios",
  //     tagDescription: "Descripción de un tag con espacios en el nombre",
  //   });
  //   await expect(page).toMatch("You must specify a name for the tag.");
  //   await tagPage.discardChanges(page, "tag-con-espacios");
  //   await tagPage.listTags(page, "tag-con-espacios");
  //   await expect(page).not.toMatch("tag-con-espacios");
  // });

  // it("Create Tag with empty name", async () => {
  //   await tagPage.createTag(page, {
  //     tagName: "",
  //     tagSlug: "tag-vacio",
  //     tagDescription: "",
  //   });
  //   await expect(page).toMatch("You must specify a name for the tag.");
  //   await tagPage.discardChanges(page, "tag-vacio");
  //   await tagPage.listTags(page, "tag-vacio");
  //   await expect(page).not.toMatch("tag-vacio");
  // });

  // it("Create Tag with invalid description", async () => {
  //   await tagPage.createTag(page, {
  //     tagName: "Tag con descripción inválida",
  //     tagSlug: "tag-descripcion-invalida",
  //     tagDescription: faker.lorem.paragraph(30),
  //   });
  //   await expect(page).toMatch(
  //     "Description cannot be longer than 500 characters."
  //   );
  //   await tagPage.discardChanges(page, "tag-descripcion-invalida");
  //   await tagPage.listTags(page, "tag-descripcion-invalida");
  //   await expect(page).not.toMatch("tag-descripcion-invalida");
  // });
});
