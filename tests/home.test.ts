import { chromium,test } from "@playwright/test";

test("categorytab" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("//a[contains(text(),'Chính trị - Triết học đông tây')]")
    await page.waitForTimeout(1000)
    await page.click("//a[contains(text(),'Kiến thức chuyên ngành')]")
    await page.waitForTimeout(1000)
    await page.click("//a[contains(text(),'Sách Khoa học - Công nghệ')]")
    await page.waitForTimeout(1000)
    await page.click("//a[contains(text(),'Sách Kĩ năng sống')]")
    await page.waitForTimeout(1000)
    await page.click("//a[contains(text(),'Sách Kinh tế - Khởi nghiệp')]")
    await page.waitForTimeout(1000)
    await page.click("//a[contains(text(),'Sách Thiếu nhi')]")
    await page.waitForTimeout(1000)
    await page.click("//a[contains(text(),'Sách Thường trực - Đời sống')]")
    await page.waitForTimeout(1000)

    await page.click("//a[contains(text(),'Tiểu Thuyết - Thơ')]")
    await page.click("(//div[@class='featured__item__pic']//img)[1]")
    await page.waitForTimeout(1500)
    await page.click("//a[contains(text(),'Thông tin chi tiết')]")
    await page.waitForTimeout(1500)
    await page.click("//a[contains(text(),'Giới thiệu sản phẩm')]")

    await page.waitForTimeout(3000)
    await browser.close()

})

test("product" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")
    await page.click("(//div[@class='featured__item__pic']//img)[1]")

    await page.waitForTimeout(1500)
    await page.click("//a[contains(text(),'Thông tin chi tiết')]")
    await page.waitForTimeout(1500)
    await page.click("//a[contains(text(),'Giới thiệu sản phẩm')]")
    await page.waitForTimeout(1500)

    await page.click("(//div[@class='header__logo']//img)[1]")
    await page.click("(//div[@data-setbg='img/featured/feature-1.jpg']//img)[3]")
    await page.waitForTimeout(1500)
    await page.click("//a[contains(text(),'Thông tin chi tiết')]")
    await page.waitForTimeout(1500)
    await page.click("//a[contains(text(),'Giới thiệu sản phẩm')]")
    
    await page.waitForTimeout(3000)
    await browser.close()

})

test("cart" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")

    await page.click("//a[contains(.,'Đăng nhập')]")

    await page.fill("(//input[@class='form-control'])[1]","nqthanh.20it9@vku.udn.vn")
    await page.fill("(//input[@class='form-control'])[2]","123456")
    await page.click("//button[@class='btn btn-primary']")

    await page.click("(//div[@class='featured__item__pic']//img)[1]")
    await page.click("//a[contains(text(),'Thêm vào giỏ hàng')]")
    await page.click("//a[contains(text(),'Thêm vào giỏ hàng')]")

    await page.click("(//div[@class='header__logo']//img)[1]")
    
    await page.click("(//i[@class='fa fa-shopping-cart'])[2]")
    await page.click("(//i[@class='fa fa-shopping-cart'])[3]")
    
    await page.waitForTimeout(2000)

    await page.click("//i[@class='fa fa-shopping-bag']")

    await page.getByRole('row', { name: '1 Waterloo: Lịch Sử Bốn Ngày, Ba Bên Và Ba Trận Đánh 165,000 đ Cập nhật M' }).getByRole('spinbutton').fill('1');
    await page.getByRole('row', { name: '1 Waterloo: Lịch Sử Bốn Ngày, Ba Bên Và Ba Trận Đánh 165,000 đ Cập nhật M' }).getByRole('button').click();

    await page.getByRole('row', { name: '2 Nhà Cửa - Một Nửa Tâm Hồn 140,000 đ Cập nhật M' }).getByRole('spinbutton').fill('2');
    await page.getByRole('row', { name: '2 Nhà Cửa - Một Nửa Tâm Hồn 140,000 đ Cập nhật M' }).getByRole('button').click();

    await page.getByRole('row', { name: '3 Bánh Mì Lang Thang - Sourdough Bread 160,000 đ Cập nhật M' }).getByRole('spinbutton').fill('2');
    await page.getByRole('row', { name: '3 Bánh Mì Lang Thang - Sourdough Bread 160,000 đ Cập nhật M' }).getByRole('button').click();
    
    await page.click("//a[contains(text(),'Xoá hết')]")
    await page.click("//a[contains(text(),'Trở về trang chủ')]")
    await page.waitForTimeout(3000)
    await browser.close()

})

test("order" ,async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080/cuahangsach/")

    await page.click("//a[contains(.,'Đăng nhập')]")

    await page.fill("(//input[@class='form-control'])[1]","nqthanh.20it9@vku.udn.vn")
    await page.fill("(//input[@class='form-control'])[2]","123456")
    await page.click("//button[@class='btn btn-primary']")

    await page.click("(//i[@class='fa fa-shopping-cart'])[1]")
    await page.click("(//i[@class='fa fa-shopping-cart'])[2]")
    await page.click("(//i[@class='fa fa-shopping-cart'])[3]")

    await page.click("//i[@class='fa fa-shopping-bag']")
    await page.click("//a[contains(text(),'Đặt hàng')]")

    await page.fill("//input[@placeholder='Nhập họ và tên']","Nguyễn Quốc Thành")
    await page.fill("//input[@placeholder='Nhập địa chỉ']","Cu Chanh 1, Thuy Bang")
    await page.fill("(//p[text()='Phone']/following::input)[1]","0912847303")
    await page.fill("//input[@type='email']","nqthanh.20it9@vku.udn.vn")
    await page.fill("//div[@class='checkout__input']//textarea[1]","Test đặt hàng")
    await page.click("//button[@type='submit']")
    await page.click("//a[contains(text(),'Trở về trang chủ')]")
    
    await page.waitForTimeout(3000)
    await browser.close()

})