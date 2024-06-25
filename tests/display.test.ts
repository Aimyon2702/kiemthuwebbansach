import { chromium, test } from "@playwright/test";

test("DisplayLogin" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://localhost:8080/cuahangsach/customer/login');

    const emailInput = await page.locator('[name="email"]');
    await emailInput.fill('test@email.com');

    const passwordInput = await page.locator('[name="password"]');
    await passwordInput.fill('testemail');

    const loginButton = await page.locator('[type="submit"]');
    await loginButton.click();
    
    await page.waitForTimeout(3000)
    await browser.close()
})

test("DisplaySignup" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://localhost:8080/cuahangsach/customer/register');

    const nameInput = await page.locator('[name="name"]');
    await nameInput.fill('testName');
    
    const emailInput = await page.locator('[name="email"]');
    await emailInput.fill('test@email.com');

    const phoneInput = await page.locator('[name="phone"]');
    await phoneInput.fill('123123');

    const addressInput = await page.locator('[name="address"]');
    await addressInput.fill('testAddress');

    const passwordInput = await page.locator('[name="password"]');
    await passwordInput.fill('testPassword');

    const repasswordInput = await page.locator('[name="confirm_password"]');
    await repasswordInput.fill('testPassword');

    const loginButton = await page.locator("//button[@class='btn btn-primary']");
    await loginButton.click();
    
    await page.waitForTimeout(2000)
    await browser.close()
})

test("DisplayHome" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://localhost:8080/cuahangsach/');

    const category = await page.locator("//a[contains(text(),'Chính trị - Triết học đông tây')]");
    await category.click();
    
    const category2 = await page.locator("//a[contains(text(),'Kiến thức chuyên ngành')]");
    await category2.click();

    const category3 = await page.locator("//a[contains(text(),'Sách Khoa học - Công nghệ')]");
    await category3.click();

    const category4 = await page.locator("//a[contains(text(),'Sách Kĩ năng sống')]");
    await category4.click();

    const category5 = await page.locator("//a[contains(text(),'Sách Kinh tế - Khởi nghiệp')]");
    await category5.click();

    const category6 = await page.locator("//a[contains(text(),'Sách Thiếu nhi')]");
    await category6.click();

    const category7 = await page.locator("//a[contains(text(),'Sách Thường trực - Đời sống')]");
    await category7.click();

    const category8 = await page.locator("//a[contains(text(),'Tiểu Thuyết - Thơ')]");
    await category8.click();

    const product = await page.locator("(//div[@class='featured__item__pic']//img)[1]");
    await product.click();

    const info = await page.locator("//a[contains(text(),'Thông tin chi tiết')]");
    await info.click();

    const intro = await page.locator("//a[contains(text(),'Giới thiệu sản phẩm')]");
    await intro.click();

    await page.waitForTimeout(3000)
    await browser.close()
})