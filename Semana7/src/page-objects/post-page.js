async function listPost(page) {
  await page.click('a[href="#/posts/"]');
  await new Promise((r) => setTimeout(r, 2000));
}

async function createPost(page, { titulo, contenido }) {
  await page.click('a[href="#/editor/post/"]');
  await new Promise((r) => setTimeout(r, 500));
  await page.click("textarea", { clickCount: 3 });
  await new Promise((r) => setTimeout(r, 500));
  await page.type("textarea", titulo);
  await page.waitFor(2000);
  await page.keyboard.press("Enter");
  await new Promise((r) => setTimeout(r, 500));
  await page.type("p", contenido);
  await page.waitFor(2000);
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
  if (await page.waitForSelector("button.gh-btn-red")) {
    await page.click("button.gh-btn-red");
  }
  await new Promise((r) => setTimeout(r, 2000));
}

async function savePost(page) {
  await page.click("div.gh-publishmenu.ember-view");
  await page.click("button.gh-btn-blue");
  await new Promise((r) => setTimeout(r, 2000));
}

async function emptyTitle(page) {
  await page.click("textarea", { clickCount: 3 });
  await page.type("textarea", " ");
}

async function discardChanges(page) {
  await page.reload();
  await new Promise((r) => setTimeout(r, 2000));
}

module.exports = {
  listPost,
  selectPost,
  updatePost,
  createPost,
  emptyTitle,
  savePost,
  discardChanges,
};
