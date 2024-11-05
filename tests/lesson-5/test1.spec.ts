import {test} from '@playwright/test';

const date = "2024-04-15";
const username = "Huynhtram1504";
const email = "huynhtram1504@gmail.com";
const description = "Note test";
const country = "Canada";
const interests = "Technology";
test("Register page", async({page})=>{
    await test.step("Navigate to Material Playwright Page", async()=>{
        await page.goto("https://material.playwrightvn.com/");
        await page.waitForTimeout(2000);
    })

    await test.step("Click on Register", async()=>{
        await page.locator("//a[contains(text(), 'Register Page')]").click();
    });

    await test.step("Fill info", async()=>{
        await page.locator("//input[@id='username']").pressSequentially(username);
        await page.locator("//input[@id='email']").fill(email);
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='cooking']").check();
        await page.locator("//select[@id='interests']").selectOption(interests);
        await page.locator("//select[@id='country']").selectOption(country);
        await page.locator("//input[@id='dob']").fill(date);
        await page.locator("//input[@id='profile']").setInputFiles("tests/playwright-file/a1.txt");
        await page.locator("//textarea[@id='bio']").pressSequentially(description);
        await page.locator("//input[@id='rating']").fill("6");
        await page.locator("//input[@id='favcolor']").fill("#e66465");
    });

    await test.step("Click on Register button", async()=>{
        await page.locator("//button[text()='Register']").click();
        await page.waitForTimeout(3000);
    });
    
});