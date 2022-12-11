// const puppeteer = require("puppeteer");
const { chromium } = require("playwright");

async function startAutomation() {
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   args: ["--start-fullscreen"],
  // });

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.saucedemo.com/");

  // await page.setViewport({ width: 1536, height: 722 });

  await page.waitForSelector("#user-name");
  await page.click("#user-name");
  await page.keyboard.type("standard_user");
  await page.waitForTimeout(4000);

  await page.waitForSelector("#password");
  await page.click("#password");
  await page.keyboard.type("secret_sauce");
  await page.waitForTimeout(4000);

  await page.waitForSelector("#login-button");
  await page.click("#login-button");
  await page.waitForTimeout(4000);

  await page.waitForSelector("#add-to-cart-sauce-labs-backpack");
  await page.click("#add-to-cart-sauce-labs-backpack");
  await page.waitForTimeout(4000);

  await page.waitForSelector(
    "#contents_wrapper > #header_container > .primary_header > #shopping_cart_container > .shopping_cart_link"
  );
  await page.click(
    "#contents_wrapper > #header_container > .primary_header > #shopping_cart_container > .shopping_cart_link"
  );
  await page.waitForTimeout(4000);

  await page.waitForSelector("#checkout");
  await page.click("#checkout");
  page.waitForTimeout(4000);

  await page.waitForSelector("#first-name");
  await page.click("#first-name");
  await page.keyboard.type("Bhagya");
  await page.waitForTimeout(4000);

  await page.waitForSelector("#last-name");
  await page.click("#last-name");
  await page.keyboard.type("Abewardhana");
  await page.waitForTimeout(4000);

  await page.waitForSelector("#postal-code");
  await page.click("#postal-code");
  await page.keyboard.type("1234");
  await page.waitForTimeout(4000);

  await page.waitForSelector("#continue");
  await page.click("#continue");
  await page.waitForTimeout(4000);

  await page.waitForSelector("#finish");
  await page.click("#finish");
  await page.waitForTimeout(4000);

  await browser.close();
}
startAutomation();
