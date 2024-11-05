import {test} from '@playwright/test';
test("Test1", async({page})=>{
    
    page.on('dialog', async dialog => dialog.accept());
});
