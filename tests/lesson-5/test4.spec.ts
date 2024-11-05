import {test} from "@playwright/test";
test("Personal Note", async({page})=>{
    const notes = [
        {title: "Những trường hợp hồi sinh từ cõi chết", content: "Một người trượt tuyết năm 1999 sống lại sau khi mắc kẹt dưới dòng nước băng giá và ngừng thở, thậm chí có người sống lại sau khi chôn."},
        {title: "Nhật Bản phóng vệ tinh gỗ đầu tiên trên thế giới", content: "Vệ tinh gỗ đầu tiên trên thế giới do các nhà nghiên cứu Nhật Bản chế tạo phóng vào không gian hôm 5/11 trong thử nghiệm nhằm sử dụng gỗ cho nhiệm vụ khám phá Mặt Trăng và sao Hỏa."},
        {title: "Cá sấu nuôi nhốt lớn nhất thế giới chết", content: "Con cá sấu nước mặn dài gần 5,5 m tên Cassius ước tính trên 120 tuổi khi chết hôm 2/11 tại Australia."},
        {title: "Iceland lên kế hoạch thu điện mặt trời từ vũ trụ", content: "Iceland sẽ trở thành nước đầu tiên trên thế giới thu thập điện mặt trời từ nhà máy 30 GW trên quỹ đạo để cung cấp cho 1.500 - 3.000 hộ gia đình năm 2030."},
        {title: "Lý do mùa đông nên để bát muối cạnh cửa sổ", content: "Các nhà khoa học khuyến cáo đặt bát muối trong nhà vào mùa đông để hạn chế ngưng tụ hơi nước, giúp ngăn ngừa ẩm mốc."},
        {title: "Giống cá chép Hungary 'vượt khó' vào Việt Nam 50 năm trước", content: "Cách đây 50 năm, hơn một vạn con cá chép giống từ Hungary trên đường về Việt Nam những tưởng 'đứt gánh' ở Đức, nhưng nhờ thuyết phục của TS Vũ Kim Cầu đã vận chuyển thành công."},
        {title: "Trao giải 106 sản phẩm sáng tạo thanh thiếu niên toàn quốc", content: "Những công trình, sản phẩm sáng tạo được trao Giải thưởng sáng tạo Thanh thiếu niên, nhi đồng toàn quốc 2024 vì có khả năng ứng dụng thực tế."},
        {title: "TP HCM liên kết các tỉnh trong quản lý chất thải rắn", content: "TP HCM hạn chế quỹ đất nên muốn liên kết các các tỉnh lân cận phát triển ngành công nghiệp tái chế, quản lý chất thải rắn."},
        {title: "TP HCM hạn chế quỹ đất nên muốn liên kết các các tỉnh lân cận phát triển ngành công nghiệp tái chế, quản lý chất thải rắn.", content: "Từ một chất có trong sữa mẹ, TS Trần Thị Hiền cùng cộng sự tại Đại học Lund"},
        {title: "Robot chó leo bậc thang để dọn rác trên núi", content: "Trong thử nghiệm, robot chó của công ty Unitree Robotics có thể leo dốc 45 độ, thay người dọn rác tại thắng cảnh núi Thái Sơn"},
    ];
    await test.step("Navigate to Playwright page then Personal notes", async()=>{
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[contains(text(), 'Personal notes')]").click();
        await page.waitForTimeout(2000);
    });

    await test.step("Create 10 notes", async()=>{
        for(const note of notes){
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.content);
            await page.locator("//button[@id='add-note']").click();
            await page.waitForTimeout(2000);
        };
    });

    await test.step("Search", async()=>{
            await page.locator("//input[@id='search']").fill("Việt");
            await page.waitForTimeout(2000);
    });

});