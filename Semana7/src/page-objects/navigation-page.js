async function navigate(page) {
  await page.goto("http://localhost:3002/ghost");
  await new Promise((r) => setTimeout(r, 2000));
}

async function start(page) {
  await page.goto("http://localhost:3002/#/signin");
  await new Promise((r) => setTimeout(r, 2000));
}

async function login(page, email, password) {
  await page.waitForSelector('input[id="ember8"]', { visible: true });
  await page.type('input[id="ember8"]', email);
  await page.type('input[id="ember10"]', password);
  await page.click('button[id="ember12"]');
  await new Promise((r) => setTimeout(r, 2000));
}

async function logout(page) {
//  await page.click('div[class="gh-nav-bottom"]');
  await page.goto("http://localhost:3002/#/signout/");
  await new Promise((r) => setTimeout(r, 2000));
}

module.exports = {
  navigate,
  start,
  login,
  logout,
};
