import { chromium,test } from "@playwright/test";

test("BlankEmail" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng nhập')]")

    await page.fill("(//input[@class='form-control'])[2]", "123456")
    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Email không được để trống']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("BlankPassword" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng nhập')]")

    await page.fill("(//input[@class='form-control'])[1]", "nqthanh.20it9@vku.udn.vn")
    await page.click("//button[@class='btn btn-primary']")

    await page.waitForSelector("//p[text()='Mật khẩu không được để trống']")

    await page.waitForTimeout(3000)
    await browser.close()

})

test("BlankEmailPassword" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng nhập')]")
   
    await page.click("//button[@class='btn btn-primary']")

    await page.waitForSelector("//p[text()='Email không được để trống']");
    await page.waitForSelector("//p[text()='Mật khẩu không được để trống']")
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("Login" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng nhập')]")

    await page.fill("(//input[@class='form-control'])[1]", "nqthanh.20it9@vku.udn.vn")
    await page.fill("(//input[@class='form-control'])[2]", "123456")
    await page.click("//button[@class='btn btn-primary']")

    await page.waitForTimeout(3000)
    await browser.close()

})

test("Logout" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng nhập')]")

    await page.fill("(//input[@class='form-control'])[1]", "nqthanh.20it9@vku.udn.vn")
    await page.fill("(//input[@class='form-control'])[2]", "123456")
    await page.click("//button[@class='btn btn-primary']")
    await page.click("//a[contains(.,'Đăng xuất')]")
    await page.waitForTimeout(3000)
    await browser.close()

})