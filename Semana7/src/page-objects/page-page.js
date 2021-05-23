addContent = async (page, title, content) => {
  await page.click("textarea", { clickCount: 3 });
  await new Promise((r) => setTimeout(r, 500));
  await page.type("textarea", title);
  await new Promise((r) => setTimeout(r, 500));
  await page.keyboard.press("Enter");
  await new Promise((r) => setTimeout(r, 500));
  await page.type(
    "div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']",
    content
  );
  await new Promise((r) => setTimeout(r, 500));
  await page.keyboard.press("Enter");
  await new Promise((r) => setTimeout(r, 2000));
};

createPage = async (page) => {
  await page.waitForSelector('a[href="#/pages/"]', { visible: true });
  await page.click('a[href="#/pages/"]', { delay: 500 });
  await page.waitForTimeout(1000);
  await page.waitForSelector('a[href="#/editor/page/"]', { visible: true });
  await page.click('a[href="#/editor/page/"]', { delay: 500 });
  await page.waitForTimeout(1000);
};

publishPage = async (page) => {
  await page.waitForSelector(
    'div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]',
    { visible: true }
  );
  await page.click(
    'div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]',
    { delay: 500 }
  );

  await page.click(
    "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']",
    { delay: 500 }
  );
  await page.waitForTimeout(500);
};

schedulePage = async (page) => {
  await page.waitForSelector(
    'div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]',
    { visible: true }
  );

  await page.click(
    'div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]',
    { delay: 500 }
  );
  await page.waitForTimeout(500);

  await page.waitForSelector("div[class='gh-date-time-picker-time ']", {
    visible: true,
  });

  await page.click("div[class='gh-date-time-picker-time ']", { delay: 500 });
  await page.waitForTimeout(500);

  await page.waitForSelector(
    "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']",
    { visible: true }
  );

  await page.click(
    "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']",
    { delay: 500 }
  );
  await page.waitForTimeout(500);
};

selectFirstPageFromList = async (page) => {
  await page.waitForSelector(
    'li[class="gh-list-row gh-posts-list-item"]:nth-child(2)',
    { visible: true }
  );

  await page.click('li[class="gh-list-row gh-posts-list-item"]:nth-child(2)', {
    delay: 500,
  });
  await page.waitForTimeout(500);
};

discardChanges = async (page) => {
  await page.waitForSelector('a[href="#/pages/"]', { visible: true });

  await page.click('a[href="#/pages/"]', { delay: 500 });
  await page.waitForTimeout(500);

  await page.waitForSelector('button[class="gh-btn gh-btn-red"]', {
    visible: true,
  });
  await page.click('button[class="gh-btn gh-btn-red"]', { delay: 500 });
  await page.waitForTimeout(500);
};

module.exports = {
  addContent,
  createPage,
  publishPage,
  schedulePage,
  discardChanges,
  selectFirstPageFromList,
};
