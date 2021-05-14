createPost = async (post, postTitle, postContent) => {
  await post.click('a[href="#/posts/"]');
  await new Promise((r) => setTimeout(r, 1000));
  await post.click('a[href="#/editor/post/"]');
  await new Promise((r) => setTimeout(r, 1000));

  await page.type(
    'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]',
    postTitle
  );

  await new Promise((r) => setTimeout(r, 1000));

  await page.click(
    "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']"
  );
  await new Promise((r) => setTimeout(r, 1000));

  if (postContent) {
    await page.type(
      "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']",
      postContent
    );
    await new Promise((r) => setTimeout(r, 1000));
  }
};

cancelPost = async (page) => {
  await page.click(
    "div[class='gh-btn gh-btn-outline gh-publishmenu-trigger ember-basic-dropdown-trigger ember-view']"
  );
  await new Promise((r) => setTimeout(r, 1000));
  await page.click("button[class='gh-btn gh-btn-outline gh-btn-link']");
  await new Promise((r) => setTimeout(r, 2000));
};

publishPost = async (page) => {
  await page.click(
    "div[class='gh-btn gh-btn-outline gh-publishmenu-trigger ember-basic-dropdown-trigger ember-view']"
  );
  await new Promise((r) => setTimeout(r, 1000));
  await page.click(
    "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']"
  );
  await new Promise((r) => setTimeout(r, 2000));
};

schedulePost = async (page) => {
  await page.click(
    "div[class='gh-btn gh-btn-outline gh-publishmenu-trigger ember-basic-dropdown-trigger ember-view']"
  );
  await new Promise((r) => setTimeout(r, 1000));

  await page.click("div[class='gh-date-time-picker-time ']");
  await new Promise((r) => setTimeout(r, 1000));

  await page.click(
    "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']"
  );
  await new Promise((r) => setTimeout(r, 2000));
};

discardChanges = async (page) => {
  await page.click('a[href="#/posts/"]');
  await new Promise((r) => setTimeout(r, 2000));

  await page.click('button[class="gh-btn gh-btn-red"]');
  await new Promise((r) => setTimeout(r, 2000));
};

module.exports = {
  createPost,
  cancelPost,
  publishPost,
  schedulePost,
  discardChanges,
};
