
var xlsx=require("xlsx")
let excelpath=xlsx.readFile("./test/specs/Testdata/excelsheet.xlsx")
let sheet=excelpath.SheetNames
let sh=excelpath.Sheets["Sheet3"]
let excelDatasheet3=xlsx.utils.sheet_to_json(sh)

const loginPage = require("../pageobjects/AddnormalTicketPage.js");
const fs=require("fs");
const { adult } = require("../pageobjects/AddnormalTicketPage.js")
let credentials=JSON.parse(fs.readFileSync("./test/specs/Testdata/logindata.json"))

describe("Zoo mgmt App",async()=>
{
    it("login thru jason-reg",async()=>
    {
        await browser.url("http://rmgtestingserver/domain/Zoo_Management_System")
        await browser.maximizeWindow()
        // await console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Zoo Management System | Home Page") 
        const admin=await $("//a[text()='Admin']/ancestor::div[@id='bs-example-navbar-collapse-1']//a[text()='Admin']")
        await admin.click()
   
    })

    credentials.forEach(({username,password})=>
    {
        it("fetching thru jason-reg",async()=>{
         await $("//input[@id='username']").setValue(username);
        // await loginPage.userName.setValue(username);
       await $("//input[@id='password']").setValue(password);
    //    await loginPage.password.setValue(password);
       await $("//button[@id='form_submit']").click()
    //    await loginPage.submitButton.click();
    await expect(browser).toHaveTitleContaining("Zoo Management System || Dashboard")
    })
    })

    it("click normal tickets",async()=>{
        await loginPage.NormalTicket.click()
        await loginPage.AddTicket.click()
        await expect(browser).toHaveTitleContaining("Add Normal Zoo Ticket - Zoo Management System")
    })

    // credentials.forEach(({visitorname,noadults,nochildren})=>{
    //     it("fetching visitor details thru json",async()=>{
    //         await $("//input[@id='visitorname']").setValue(visitorname);
    //         await $("//input[@id='noadult']").setValue(noadults);
    //         await $("//input[@name='nochildren']").setValue(nochildren);
    //         await loginPage.submit1.click()
    //     })

    // })

    it("generate normal tickets",async()=>{
            
        await loginPage.visitorname.setValue("ramya")
        await loginPage.adult.setValue(3)
        await loginPage.child.setValue(2)
        var oldcount=20
        var newadultcount=await browser.$("//div[@class='s-report-title d-flex justify-content-between']//h3[contains(text(),'Total Animals')]//following::p[1]").getValue();
        var addoncount=await browser.$("//input[@id='noadult']").getValue();
        console.log(newadultcount);
        if(newcount==oldcount+addoncount)
        {
            console.log("visitor added  successfully")
        }
        else
        {
            console.log("visitor not  added  successfully")   
        }
        await loginPage.submit1.click()
        await browser.acceptAlert();
        await loginPage.dashboard.click();
       
        
    })

    xit("switch to alert",async()=>{
        await browser.acceptAlert();
    })

    xit("Adult visitor count validation",async()=>{
        var oldcount=20
        var newadultcount=await $("//div[@class='s-report-title d-flex justify-content-between']//h3[contains(text(),'Total Animals')]//following::p[1]").getValue();
        var addoncount=await $("//input[@id='noadult']").getValue();
        console.log(newadultcount);
        if(newcount==oldcount+addoncount)
        {
            console.log("visitor added  successfully")
        }
        else
        {
            console.log("visitor not  added  successfully")   
        }
        

    })

    xit("fetching data frm excel",async()=>{
       
        await credentials.visitorname.setValue(excelDatasheet3[0].visitorname);
        await credentials.adult.setValue(excelDatasheet3[0].noofadults);
        await credentials.child.setValue(excelDatasheet3[0].noofchildren);
        await browser.acceptAlert();

    })
    

    it("logout",async()=>{
        await loginPage.admin.click();
        await loginPage.logout.click();
    })
   
       
})
