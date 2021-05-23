const navigationPage = require("../page-objects/navigation-page");
const tagPage = require("../page-objects/tag-page");
const config = require("../credentials");
const { getTagTestData, TYPE_DATA } = require("../test-data");

describe("Tag", () => {
  beforeAll(async () => {
    // Jest config
    jest.setTimeout(50000);
    await navigationPage.navigate(page);
    await navigationPage.login(page, config.user, config.password);
  });

  describe("a priori", () => {
    let tags = [];
    const number = 10;

    beforeAll(async () => {
      await navigationPage.navigate(page);
      tags = await getTagTestData(TYPE_DATA.APRIORI, number);
    });

    for (let index = 0; index < number; index++) {
      it(`Create Tag - A Priori Data #${index}`, async () => {
        const tagData = tags[index];
        await tagPage.createTag(page, tagData);

        if (tagData.isValid) {
          await expect(page).toMatch("Saved");
          await tagPage.listTags(page);
          await expect(page).toMatch(tagData.tagSlug);
        } else {
          await tagPage.discardChanges(page);
          await tagPage.listTags(page);
          await expect(page).not.toMatch(tagData.tagSlug);
        }
      });
    }
  });

  describe("mock", () => {
    let tags = [];
    const number = 10;

    beforeAll(async () => {
      await navigationPage.navigate(page);
      tags = await getTagTestData(TYPE_DATA.SEMI, number);
    });

    for (let index = 0; index < number; index++) {
      it(`Create Tag - Mocked Data #${index}`, async () => {
        const tagData = tags[index];
        await tagPage.createTag(page, tagData);

        if (tagData.isValid) {
          await expect(page).toMatch("Saved");
          await tagPage.listTags(page);
          await expect(page).toMatch(tagData.tagSlug);
        } else {
          await tagPage.discardChanges(page);
          await tagPage.listTags(page);
          await expect(page).not.toMatch(tagData.tagSlug);
        }
      });
    }
  });

  describe("random data", () => {
    let tags = [];
    const number = 10;

    beforeAll(async () => {
      await navigationPage.navigate(page);
      tags = await getTagTestData(TYPE_DATA.RANDOM, number);
    });

    for (let index = 0; index < number; index++) {
      it(`Create Tag - Random Data #${index}`, async () => {
        const tagData = tags[index];
        await tagPage.createTag(page, tagData);

        if (tagData.isValid) {
          await expect(page).toMatch("Saved");
          await tagPage.listTags(page);
          await expect(page).toMatch(tagData.tagSlug);
        } else {
          await tagPage.discardChanges(page);
          await tagPage.listTags(page);
          await expect(page).not.toMatch(tagData.tagSlug);
        }
      });
    }
  });
});
