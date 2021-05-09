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
  async function homePage(page) {
    await page.click('a[href="#/site/"]');
    await new Promise((r) => setTimeout(r, 2000));
  }

  async function clicsLogin(page) {
    for(let i = 0; i < 10; i++ ) {
      await page.click('button[id="ember12"]');
    };
    await new Promise((r) => setTimeout(r, 2000));
  }

  module.exports = {
    createUser,
    homePage,
    clicsLogin,
  };
