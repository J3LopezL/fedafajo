async function createTag(page, { tagName, tagSlug, tagDescription, tagColor }) {
  await page.click('a[href="#/tags/"]');
  await new Promise((r) => setTimeout(r, 1000));
  await page.click(".ember-view.gh-btn.gh-btn-green");
  await page.type('input[id="tag-name"]', tagName);
  await page.type('input[id="tag-slug"]', tagSlug);
  await page.type('input[name="accent-color"]', tagColor);
  await page.type('textarea[id="tag-description"]', tagDescription);
  await page.click(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
  await new Promise((r) => setTimeout(r, 2000));
}

async function discardChanges(page) {
  await page.reload();
  await new Promise((r) => setTimeout(r, 2000));
}

async function listTags(page) {
  await page.click('a[href="#/tags/"]');
  await new Promise((r) => setTimeout(r, 2000));
}

module.exports = {
  createTag,
  discardChanges,
  listTags,
};
