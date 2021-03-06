async function navigate(page) {
  await page.goto("http://localhost:3009/ghost");
  await new Promise((r) => setTimeout(r, 2000));
}

async function login(page, email, password) {
  await page.waitForSelector('input[id="ember8"]', { visible: true });
  await page.type('input[id="ember8"]', email);
  await page.type('input[id="ember10"]', password);
  await page.click('button[id="ember12"]');
  await new Promise((r) => setTimeout(r, 5000));
}

async function logout(page) {
  await page.click('div[class="gh-nav-bottom"]');
  await page.click('a[href="#/signout"]');
  await new Promise((r) => setTimeout(r, 2000));
}

module.exports = {
  navigate,
  login,
  logout,
};
