
contentPost = async (page, postTitle, postContent, slug, screenshot) => {
  if (postTitle) {
    await page.waitForSelector(
      'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]',
      { visible: true }
    );

    await page.click(
      'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]',
      { delay: 1000 }
    );

    await page.waitForTimeout(1000);

    await page.type(
      'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]',
      postTitle,
      { delay: 100 }
    );

    await page.waitForTimeout(2000);
    await screenshot(slug);
  }

  if (postContent) {
    await page.waitForSelector(
      "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']",
      { visible: true }
    );
    await page.click(
      "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']",
      { delay: 1000 }
    );
    await page.waitForTimeout(2000);

    await page.waitForSelector(
      "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']",
      { visible: true }
    );
    await page.type(
      "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']",
      postContent,
      { delay: 100 }
    );
    await page.waitForTimeout(2000);
    await screenshot(slug);
  }
};

createPost = async (page, slug, screenshot) => {
  await page.waitForSelector('a[href="#/posts/"]', { visible: true });
  await page.click('a[href="#/posts/"]', { delay: 1000 });
  await page.waitForTimeout(2000);
  await screenshot(slug);
  await page.waitForSelector('a[href="#/editor/post/"]', { visible: true });
  await page.click('a[href="#/editor/post/"]', { delay: 1000 });
  await page.waitForTimeout(2000);
  await screenshot(slug);
};

publishPost = async (page, slug, screenshot) => {
  await page.waitForSelector(
    "div[class='gh-btn gh-btn-outline gh-publishmenu-trigger ember-basic-dropdown-trigger ember-view']",
    { visible: true }
  );
  await page.click(
    "div[class='gh-btn gh-btn-outline gh-publishmenu-trigger ember-basic-dropdown-trigger ember-view']",
    { delay: 1000 }
  );

  await page.click(
    "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']",
    { delay: 1000 }
  );
  await screenshot(slug);
  await page.waitForTimeout(3000);
};

module.exports = {
  createPost,
  publishPost,
  contentPost,
};
