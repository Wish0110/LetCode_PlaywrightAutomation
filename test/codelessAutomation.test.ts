import {chromium} from "playwright";
jest.setTimeout(10000); // Set timeout to 10 seconds
describe('Launch Browser', () => {

  test('Recorded script', async () => {
    const browser = await chromium.launch({ headless: false }); // Set headless to false
        const context = await browser.newContext();
        const page = await context.newPage();

  await page.goto('https://letcode.in/');
  await page.getByRole('link', { name: 'Work-Space' }).click();
  await page.getByRole('link', { name: 'Click' }).click();
  await page.getByRole('button', { name: 'Button Hold!' }).click();
  await page.getByRole('button', { name: 'Find Location' }).click();
  await page.getByRole('button', { name: 'Goto Home and come back here' }).click();
  await page.getByRole('link', { name: 'Work-Space' }).click();
  await page.getByRole('link', { name: 'Drop-Down' }).click();
  await page.locator('#fruits').selectOption('0');
  await page.getByText('You have selected Apple').click();
  await page.locator('#superheros').selectOption('am');
  await page.getByText('You have selected Ant-Man').click();
  await browser.close();
});
})
  
  /*
xtest("Open Letcode", async () => {
        const browser = await chromium.launch({ headless: false }); // Set headless to false
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://letcode.in/");
        await page.click('text=Work-Space'); // Click on the button
        await page.waitForTimeout(5000); 

        await browser.close(); 
    })*/
