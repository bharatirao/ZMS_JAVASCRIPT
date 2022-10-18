const script2 = require("../pageobjects/ReportsNormalPage");
const fs=require("fs");
let credentials=JSON.parse(fs.readFileSync("./test/specs/Testdata/logindata.json"))

describe("Zoo mgmt App",async()=>
{
    it("login thru jason",async()=>
    {
        await browser.url("http://rmgtestingserver/domain/Zoo_Management_System")
        await browser.maximizeWindow()
        //await console.log(browser.getTitle())
       // await expect(browser).toHaveTitleContaining("Zoo Management System || Dashboard") 
        const admin=await $("//a[text()='Admin']/ancestor::div[@id='bs-example-navbar-collapse-1']//a[text()='Admin']")
        await admin.click()
   
    })

    credentials.forEach(({username,password})=>
    {
        it("fetching thru jason",async()=>{
   
       await $("//input[@id='username']").setValue(username);
       await $("//input[@id='password']").setValue(password);
       await $("//button[@id='form_submit']").click()
    })
    })
    it("generate reports",async()=>{
        await script2.reports.click()
        await script2.normalreport.click()
        await script2.fromdate.setValue("15-9-2022")
        await script2.todate.setValue("15-10-2022")
        await script2.submit.click()
        await  script2.view.click()
        await script2.dashboard.click();
        await script2.admin.click();
        await script2.logout.click();
    })
   })
