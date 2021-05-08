async function navigate(page) {
  await page.goto("http://localhost:2368/ghost");
  await new Promise((r) => setTimeout(r, 2000));
}

async function login(page, email, password) {
  await page.type('input[id="ember8"]', email);
  await page.type('input[id="ember10"]', password);
  await page.click('button[id="ember12"]');
  await new Promise((r) => setTimeout(r, 2000));
}

async function logout(page) {
  await page.click(".gh-user-name.mb1");
  await page.click(".dropdown-item.user-menu-signout.ember-view");
  await new Promise((r) => setTimeout(r, 2000));
}

module.exports = {
  navigate,
  login,
  logout,
};
