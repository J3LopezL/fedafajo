async function createTag(page, { tagName, tagSlug, tagDescription }) {
  await page.click('a[href="#/tags/"]');
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: `../Results/Puppeteer/v3.3.0/CreateTag/${tagSlug}1.jpg`,
  });
  await page.click(".ember-view.gh-btn.gh-btn-green");
  await page.screenshot({
    path: `../Results/Puppeteer/v3.3.0/CreateTag/${tagSlug}2.jpg`,
  });
  await page.type('input[id="tag-name"]', tagName);
  await page.screenshot({
    path: `../Results/Puppeteer/v3.3.0/CreateTag/${tagSlug}3.jpg`,
  });
  await page.type('input[id="tag-slug"]', tagSlug);
  await page.screenshot({
    path: `../Results/Puppeteer/v3.3.0/CreateTag/${tagSlug}4.jpg`,
  });
  await page.type('textarea[id="tag-description"]', tagDescription);
  await page.screenshot({
    path: `../Results/Puppeteer/v3.3.0/CreateTag/${tagSlug}5.jpg`,
  });
  await page.click(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({
    path: `../Results/Puppeteer/v3.3.0/CreateTag/${tagSlug}6.jpg`,
  });
}

async function discardChanges(page, tagSlug) {
  await page.reload();
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({
    path: `../Results/Puppeteer/v3.3.0/CreateTag/${tagSlug}-discardChanges.jpg`,
  });
}

async function listTags(page, tagSlug) {
  await page.click('a[href="#/tags/"]');
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({
    path: `../Results/Puppeteer/v3.3.0/CreateTag/${tagSlug}-listTags.jpg`,
  });
}

module.exports = {
  createTag,
  discardChanges,
  listTags,
};
