import {test} from '@playwright/test';

const date = "";
test("Product Page", async({page})=>{
    await test.step("Navigate to Playwrite Page the Product page", async()=>{
        await page.goto("https://material.playwrightvn.com/");
        await page.waitForTimeout(2000);
        await page.locator("//a[contains(text(),'Product page')]").click();
        await page.waitForTimeout(2000);
    });

    await test.step("Add product 1: 2 items", async()=>{
            await page.locator("//button[@data-product-id=1]").click({clickCount: 2});
    });

    await test.step("Add product 2: 3 items", async()=>{
        await page.locator("//button[@data-product-id=2]").click({clickCount: 3});
    });

    await test.step("Add product 3: 1 items", async()=>{
        await page.locator("//button[@data-product-id=3]").click();
    });
    await page.waitForTimeout(3000);

});