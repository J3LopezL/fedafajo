addContent = async (page, pageTitle, pageContent, slug, screenshot) => {
  if (pageTitle) {
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
      pageTitle,
      { delay: 100 }
    );
    await page.waitForTimeout(2000);
    await screenshot(slug);
  }

  if (pageContent) {
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
      pageContent,
      { delay: 100 }
    );
    await page.waitForTimeout(2000);
    await screenshot(slug);
  }
};

createPage = async (page, slug, screenshot) => {
  // await screenshot(slug);
  await page.waitForSelector('a[href="#/pages/"]', { visible: true });
  await page.click('a[href="#/pages/"]', { delay: 1000 });
  await page.waitForTimeout(2000);
  await screenshot(slug);
  await page.waitForSelector('a[href="#/editor/page/"]', { visible: true });
  await page.click('a[href="#/editor/page/"]', { delay: 1000 });
  await page.waitForTimeout(2000);
  await screenshot(slug);
};

publishPage = async (page, slug, screenshot) => {
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

schedulePage = async (page, slug, screenshot) => {
  await page.waitForSelector(
    "div[class='gh-btn gh-btn-outline gh-publishmenu-trigger ember-basic-dropdown-trigger ember-view']",
    { visible: true }
  );

  await page.click(
    "div[class='gh-btn gh-btn-outline gh-publishmenu-trigger ember-basic-dropdown-trigger ember-view']",
    { delay: 1000 }
  );
  await page.waitForTimeout(2000);

  await screenshot(slug);
  await page.waitForSelector("div[class='gh-date-time-picker-time ']", {
    visible: true,
  });

  await page.click("div[class='gh-date-time-picker-time ']", { delay: 1000 });
  await page.waitForTimeout(2000);

  // await screenshot(slug);
  await page.waitForSelector(
    "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']",
    { visible: true }
  );

  await page.click(
    "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']",
    { delay: 1000 }
  );
  await page.waitForTimeout(2000);
  await screenshot(slug);
};

selectFirstPageFromList = async (page, slug, screenshot) => {
  await page.waitForSelector(
    'li[class="gh-list-row gh-posts-list-item ember-view"]:nth-child(2)',
    { visible: true }
  );

  await page.click(
    'li[class="gh-list-row gh-posts-list-item ember-view"]:nth-child(2)',
    { delay: 1000 }
  );
  await page.waitForTimeout(2000);
  await screenshot(slug);
};

discardChanges = async (page, slug, screenshot) => {
  await page.waitForSelector('a[href="#/pages/"]', { visible: true });

  await page.click('a[href="#/pages/"]', { delay: 1000 });
  await page.waitForTimeout(2000);
  await screenshot(slug);

  await page.waitForSelector('button[class="gh-btn gh-btn-red"]', {
    visible: true,
  });
  await page.click('button[class="gh-btn gh-btn-red"]', { delay: 1000 });
  await page.waitForTimeout(2000);

  await screenshot(slug);
};

module.exports = {
  addContent,
  createPage,
  publishPage,
  schedulePage,
  discardChanges,
  selectFirstPageFromList,
};
