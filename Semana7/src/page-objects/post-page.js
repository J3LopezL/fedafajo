async function listPost(page) {
  await page.click('a[href="#/posts/"]');
  await new Promise((r) => setTimeout(r, 2000));
}

async function createPost(page, title, content) {
  await page.click('a[href="#/editor/post/"]');
  await page.click("textarea", { clickCount: 3 });
  await page.type("textarea", title);
  await page.keyboard.press("Enter");
  await page.type("p", content);
  await page.keyboard.press("Enter");
  await new Promise((r) => setTimeout(r, 2000));
}

async function selectPost(page) {
  await page.click("h3.gh-content-entry-title");
  await new Promise((r) => setTimeout(r, 2000));
}

async function updatePost(page) {
  await page.click("div.gh-publishmenu.ember-view");
  await page.click("button.gh-btn-blue");
  await new Promise((r) => setTimeout(r, 2000));
}

async function savePost(page) {
  await page.click('div.gh-publishmenu.ember-view');
  await page.click('button.gh-btn-blue');
  await new Promise((r) => setTimeout(r, 2000));
}

async function emptyTitle(page) {
  await page.click("textarea", { clickCount: 3 });
  await page.type("textarea", " ");
}

module.exports = {
  listPost,
  selectPost,
  updatePost,
  createPost,
  emptyTitle,
  savePost,
};