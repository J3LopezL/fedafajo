addContent = async (page, pageTitle, pageContent) => {
  if (pageTitle) {
    await page.click(
      'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]'
    );
    await new Promise((r) => setTimeout(r, 1000));

    await page.type(
      'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]',
      pageTitle
    );
    await new Promise((r) => setTimeout(r, 1000));
  }

  if (pageContent) {
    await page.click(
      "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']"
    );
    await new Promise((r) => setTimeout(r, 1000));

    await page.type(
      "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']",
      pageContent
    );
    await new Promise((r) => setTimeout(r, 1000));
  }
};

createPage = async (page) => {
  await page.click('a[href="#/pages/"]');
  await new Promise((r) => setTimeout(r, 1000));
  await page.click('a[href="#/editor/page/"]');
  await new Promise((r) => setTimeout(r, 1000));

  // await page.type(
  //   'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]',
  //   pageTitle
  // );
  // await new Promise((r) => setTimeout(r, 1000));

  // await page.click(
  //   "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']"
  // );
  // await new Promise((r) => setTimeout(r, 1000));

  // if (pageContent) {
  //   await page.type(
  //     "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']",
  //     pageContent
  //   );
  //   await new Promise((r) => setTimeout(r, 1000));
  // }
};

publishPage = async (page) => {
  await page.click(
    "div[class='gh-btn gh-btn-outline gh-publishmenu-trigger ember-basic-dropdown-trigger ember-view']"
  );
  await new Promise((r) => setTimeout(r, 1000));
  await page.click(
    "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']"
  );
  await new Promise((r) => setTimeout(r, 2000));
};

schedulePage = async (page) => {
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

selectFirstPageFromList = async (page) => {
  await page.click(
    'li[class="gh-list-row gh-posts-list-item ember-view"]:nth-child(2)'
  );
  await new Promise((r) => setTimeout(r, 2000));
};

discardChanges = async (page) => {
  await page.click('a[href="#/pages/"]');
  await new Promise((r) => setTimeout(r, 2000));

  await page.click('button[class="gh-btn gh-btn-red"]');
  await new Promise((r) => setTimeout(r, 2000));
};

module.exports = {
  addContent,
  createPage,
  publishPage,
  schedulePage,
  discardChanges,
  selectFirstPageFromList,
};
