import { chromium,test } from "@playwright/test";

test("BlankAll" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng ký')]")

    // await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    // await page.fill("(//input[@class='form-control'])[2]", "thanhnguyen15669@gmail.com")
    // await page.fill("(//input[@class='form-control'])[3]", "0123456789")
    // await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    // await page.fill("(//input[@type='password'])[1]", "123456")
    // await page.fill("(//input[@type='password'])[2]", "123456")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Họ tên không được để trống']");
    await page.waitForSelector("//p[text()='Email không được để trống']");
    await page.waitForSelector("//p[text()='Số điện thoại không được để trống']");
    await page.waitForSelector("//p[text()='Địa chỉ không được để trống']");
    await page.waitForSelector("//p[text()='Mật khẩu không được để trống']");
    await page.waitForSelector("//p[text()='Mật khẩu nhập lại không được để trống']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("BlankName" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng ký')]")

    // await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    await page.fill("(//input[@class='form-control'])[2]", "thanhnguyen15669@gmail.com")
    await page.fill("(//input[@class='form-control'])[3]", "0123456789")
    await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    await page.fill("(//input[@type='password'])[1]", "123456")
    await page.fill("(//input[@type='password'])[2]", "123456")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Họ tên không được để trống']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("BlankEmail" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng ký')]")

    await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    // await page.fill("(//input[@class='form-control'])[2]", "nqthanh.20it9@vku.udn.vn")
    await page.fill("(//input[@class='form-control'])[3]", "0123456789")
    await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    await page.fill("(//input[@type='password'])[1]", "123456")
    await page.fill("(//input[@type='password'])[2]", "123456")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Email không được để trống']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("EmailExisted" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng ký')]")

    await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    await page.fill("(//input[@class='form-control'])[2]", "nqthanh.20it9@vku.udn.vn")
    await page.fill("(//input[@class='form-control'])[3]", "0123456789")
    await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    await page.fill("(//input[@type='password'])[1]", "123456")
    await page.fill("(//input[@type='password'])[2]", "123456")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Email này đã tồn tại']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("BlankPhone" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng ký')]")


    await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    await page.fill("(//input[@class='form-control'])[2]", "thanhnguyen15669@gmail.com")
    // await page.fill("(//input[@class='form-control'])[3]", "0123456789")
    await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    await page.fill("(//input[@type='password'])[1]", "123456")
    await page.fill("(//input[@type='password'])[2]", "123456")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Số điện thoại không được để trống']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("PhoneExisted" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng ký')]")


    await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    await page.fill("(//input[@class='form-control'])[2]", "thanhnguyen15669@gmail.com")
    await page.fill("(//input[@class='form-control'])[3]", "0912847303")
    await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    await page.fill("(//input[@type='password'])[1]", "123456")
    await page.fill("(//input[@type='password'])[2]", "123456")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Số điện thoại này đã được sử dụng']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("BlankAddress" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng ký')]")


    await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    await page.fill("(//input[@class='form-control'])[2]", "thanhnguyen15669@gmail.com")
    await page.fill("(//input[@class='form-control'])[3]", "0123456789")
    // await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    await page.fill("(//input[@type='password'])[1]", "123456")
    await page.fill("(//input[@type='password'])[2]", "123456")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Địa chỉ không được để trống']");
    
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
    await page.click("//a[contains(.,'Đăng ký')]")


    await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    await page.fill("(//input[@class='form-control'])[2]", "thanhnguyen15669@gmail.com")
    await page.fill("(//input[@class='form-control'])[3]", "0123456789")
    await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    // await page.fill("(//input[@type='password'])[1]", "123456")
    await page.fill("(//input[@type='password'])[2]", "123456")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Mật khẩu không được để trống']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("BlankRePassword" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng ký')]")


    await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    await page.fill("(//input[@class='form-control'])[2]", "thanhnguyen15669@gmail.com")
    await page.fill("(//input[@class='form-control'])[3]", "0123456789")
    await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    await page.fill("(//input[@type='password'])[1]", "123456")
    // await page.fill("(//input[@type='password'])[2]", "123456")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Mật khẩu nhập lại không được để trống']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("WrongRePassword" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(.,'Đăng ký')]")


    await page.fill("(//input[@class='form-control'])[1]", "Lê Tấn")
    await page.fill("(//input[@class='form-control'])[2]", "thanhnguyen15669@gmail.com")
    await page.fill("(//input[@class='form-control'])[3]", "0123456789")
    await page.fill("//input[@placeholder='Nhập địa chỉ']", "Cu chanh 1")
    await page.fill("(//input[@type='password'])[1]", "123456")
    await page.fill("(//input[@type='password'])[2]", "123")

    await page.click("//button[@class='btn btn-primary']")
    
    await page.waitForSelector("//p[text()='Mật khẩu nhập lại không chính xác']");
    
    await page.waitForTimeout(3000)
    await browser.close()

})