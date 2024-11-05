import {test} from '@playwright/test';
import { console } from 'inspector';
test('Basic action-Navigate to browser', async({page})=> {
    //Navigate to a website
    await page.goto("https://material.playwrightvn.com/");
    await page.waitForTimeout(3000);
    await page.goto("https://google.com/");
});
test('Basic action-Click', async({page})=> {
    //Single Click
    await page.goto("https://material.playwrightvn.com/018-mouse.html");
    //await page.waitForTimeout(2000);
    await page.locator("//div[@id='clickArea']").click();
    await page.waitForTimeout(3000);

    //Double click
    await page.locator("//div[@id='clickArea']").dblclick();

    //Right click
    //await page.locator("//div[@id='clickArea']").click({
        button: "right"
    //});
    await page.waitForTimeout(2000);

    //Click + button
    await page.locator("//div[@id='clickArea']").click({
        modifiers: ["Shift", "Meta"]
    });
});

test("Basic action-Input data", async({page}) =>{
    //Input  fill
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("//input[@id='username']").fill("huynhtram1504");
    await page.waitForTimeout(2000);

    //Input each character
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("//input[@id='username']").pressSequentially("huynhtram1504", {
        delay: 100,
    })
});

test("Basic action-Radio/Checkbox", async({page})=> {
    //Radio
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("//input[@id='female']").check();
    await page.waitForTimeout(2000);

    //Checkbox
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("//input[@id='reading']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.waitForTimeout(2000);
    //Unchecked
    await page.locator("//input[@id='traveling']").uncheck();
    await page.locator("//input[@id='reading']").uncheck();
    await page.waitForTimeout(2000);
    //Get check status
    const isCheckedTravelling = await page.locator("//input[@id='traveling']").isChecked();
    const isCheckedReading = await page.locator("//input[@id='reading']").isChecked();
    console.log(isCheckedTravelling);
    console.log(isCheckedReading);
    
});

test("Basic action-Select dropdown list", async({page})=>{
    //Select one option
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("//select[@id='interests']").selectOption("Art");
    await page.waitForTimeout(2000);

    //Select many options
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("//select[@id='interests']").selectOption(["Art", "Music", "Sports"]);
    await page.waitForTimeout(2000);
});

test("Basic action-Date picker", async({page})=>{
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("//input[@id='dob']").fill("2024-01-30");
    await page.waitForTimeout(2000);
});

test ("date, color picker, range", async({page})=>{
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("//input[@id='dob']").fill("2024-04-15");
    await page.locator("//input[@id='rating']").fill("4");
    await page.locator("//input[@id='favcolor']").fill("#e66465");
    await page.waitForTimeout(2000);
});

test("input file, hover", async({page})=>{
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    //Input file
    await page.locator("//input[@id='profile']").setInputFiles("tests/playwright-file/a1.txt");
    await page.waitForTimeout(2000);
    //Hover
    await page.locator("//div[@class='tooltip']").hover();
    await page.waitForTimeout(2000);

});
