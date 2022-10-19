const searchpage = require("../pageobjects/SearchNormalPage.js");

const fs=require("fs");
let credentials=JSON.parse(fs.readFileSync("./test/specs/Testdata/logindata.json"))
describe("Zoo mgmt App",async()=>
{
    it("login thru jason-reg",async()=>
    {
        await browser.url("http://rmgtestingserver/domain/Zoo_Management_System")
        await browser.maximizeWindow()
        // await console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Zoo Management System | Home Page") 
        const admin=await browser.$("//a[text()='Admin']/ancestor::div[@id='bs-example-navbar-collapse-1']//a[text()='Admin']")
        await admin.click()
   
    })

    credentials.forEach(({username,password})=>
    {
        it("fetching thru jason-reg",async()=>{
         await $("//input[@id='username']").setValue(username);
        await $("//input[@id='password']").setValue(password);
       await $("//button[@id='form_submit']").click()
      await expect(browser).toHaveTitleContaining("Zoo Management System || Dashboard")
    })
    })
    it("click Search",async()=>{
        await searchpage.searchMenu.click();
        await searchpage.searchNormalTicket.click();
        await expect(browser).toHaveTitleContaining("Search Indian Ticket - Zoo Management System")
        await searchpage.visitorname.setValue("ramu");
        await searchpage.searchbutton.click();
    })

    it("logout",async()=>{
        await searchpage.adminsearchpage.click();
        await searchpage.logoutsearchpage.click();
    })
})