import { chromium, firefox, test, webkit } from "@playwright/test";

test("browsers" ,async () => {
    const browsers = [chromium, firefox, webkit];

    for (const browserType of browsers) {
        const browser = await browserType.launch({
            headless: false
        });

        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("http://localhost:8080/cuahangsach/");
        console.log(await page.title());
        await page.waitForTimeout(2000)
        await browser.close();
    }
});

