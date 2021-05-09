async function createUser(
  page,
  { blogTitle, blogName, blogEmail, blogPassword }
) {
  await page.click('a[href="#/setup/two/"]');
  await page.type('input[id="blog-title"]', blogTitle);
  await page.type('input[id="name"]', blogName);
  await page.type('input[id="email"]', blogEmail);
  await page.type('input[id="password"]', blogPassword);
  await page.click('button[type="submit"]');
  await new Promise((r) => setTimeout(r, 2000));
  await page.click('button[class="gh-flow-skip"]');
  await new Promise((r) => setTimeout(r, 2000));
}

async function createTag(page, { tagName, tagSlug, tagDescription }) {
  await page.click('a[href="#/tags/"]');
  await page.waitForNavigation();
  await page.click(".ember-view.gh-btn.gh-btn-green");
  await page.type('input[id="tag-name"]', tagName);
  await page.type('input[id="tag-slug"]', tagSlug);
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

async function homePage(page) {
  await page.click('a[href="#/site/"]');
  await new Promise((r) => setTimeout(r, 2000));
}

module.exports = {
  createUser,
  createTag,
  discardChanges,
  listTags,
  homePage,
};
