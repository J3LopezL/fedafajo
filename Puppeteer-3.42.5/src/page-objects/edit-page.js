async function listPost(page) {
  await page.click('a[href="#/posts/"]');
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

async function setEmptyTitle(page) {
  await page.click("textarea", { clickCount: 3 });
  await page.type("textarea", " ");
}

module.exports = {
  listPost,
  selectPost,
  updatePost,
  setEmptyTitle,
};
