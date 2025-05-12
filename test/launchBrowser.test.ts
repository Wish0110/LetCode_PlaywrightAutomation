import {chromium} from "playwright";
jest.setTimeout(10000); // Set timeout to 10 seconds
describe('Launch Browser', () => {

xtest("Open Letcode", async () => {
        const browser = await chromium.launch({ headless: false }); // Set headless to false
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://letcode.in/");
        await page.click('text=Work-Space'); // Click on the button
        await page.waitForTimeout(5000); 

        await browser.close(); 
    })
})
