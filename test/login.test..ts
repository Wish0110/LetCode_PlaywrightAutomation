import {chromium} from "playwright";
describe("launchBrowser", () => {
  jest.setTimeout(10000); // Set timeout to 10 seconds
  
test("Open Letcode", async () => {
        const browser = await chromium.launch({ headless: false }); // Set headless to false
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://letcode.in/");
        await page.waitForTimeout(5000); 
        await page.click('text=Work-Space'); // Click on the Login button
        await browser.close(); 
    });
});