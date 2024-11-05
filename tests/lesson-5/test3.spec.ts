import {test} from "@playwright/test";
test("To-Do List", async({page})=>{
    await test.step("Navigate to Playwright page the Todo page", async()=>{
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[contains(text(),'Todo page')]").click();
        await page.waitForTimeout(2000);
    });

    await test.step("Create 100 Todo list", async()=>{
        for(let i =1; i <=100; i++){
            await page.locator("//input[@id='new-task']").fill("Todo " + i);
            await page.locator("//button[@id='add-task']").click();
            //await page.waitForTimeout(3000);
        };
    });

    await test.step("Delete Todo list with odd numbers", async()=>{
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <=100; i++){
            if(i% 2!==0){
                let xpath = `//button[@id='todo-${i}-delete']`;;
                console.log(xpath);
                await page.locator(xpath).click();
            };

        };
        //for(let i =1; i <=3; i+=2){
            //let xpath = `//button[@id='todo-${i}-delete']`;;
            //console.log(xpath);
            //await page.locator(xpath).click();
            //page.on('dialog', async dialog => dialog.accept());
            //await page.waitForTimeout(3000);
        //};

    });
    

    

    

    

});