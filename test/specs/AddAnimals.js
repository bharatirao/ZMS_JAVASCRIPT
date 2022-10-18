
var xlsx=require("xlsx")
let excelpath=xlsx.readFile("./test/specs/Testdata/excelsheet.xlsx")
let sheet=excelpath.SheetNames
let sh=excelpath.Sheets["Sheet2"]
let excelData=xlsx.utils.sheet_to_json(sh)

const animaldetails = require("../pageobjects/AddAnimalsPage");
const fs=require("fs");
let credentials=JSON.parse(fs.readFileSync("./test/specs/Testdata/logindata.json"))
describe("Zoo mgmt App",async()=>
{
    it("login thru jason",async()=>
    {
        await browser.url("http://rmgtestingserver/domain/Zoo_Management_System")
        await browser.maximizeWindow()
        //await console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Zoo Management System | Home Page")  
        const admin=await $("//a[text()='Admin']/ancestor::div[@id='bs-example-navbar-collapse-1']//a[text()='Admin']")
        await admin.click()
   
    })

    credentials.forEach(({username,password})=>
    {
        it("fetching thru jason",async()=>{
         await $("//input[@id='username']").setValue(username);
        // await loginPage.userName.setValue(username);
       await $("//input[@id='password']").setValue(password);
    //    await loginPage.password.setValue(password);
       await $("//button[@id='form_submit']").click()
    //    await loginPage.submitButton.click();
    await expect(browser).toHaveTitleContaining("Zoo Management System || Dashboard")
    })
})

    it("add animals details",async()=>{
 
        await animaldetails.animalDetails.click();
        await animaldetails.addAnimal.click();
        await expect(browser).toHaveTitleContaining("Add Animal Detail - Zoo Management System")
              
     })

    credentials.forEach(({aname,aimg,acage,afeed,abreed,adesc})=>
    {
        it("fetching animal details thru jason",async()=>{
         await $("//input[@id='aname']").setValue(aname);
         await $("//input[@id='image']").setValue(aimg);
         await $("//input[@id='cnum']").setValue(acage);
         await $("//input[@id='fnum']").setValue(afeed);
         await $("//input[@id='breed']").setValue(abreed);
         await $("//input[@id='desc']").setValue(adesc);
    })
})
  

    xit("fetch thru excel",async()=>{
        // this.retries(2)
        await animaldetails.anname.setValue(excelData[0].aname)
        await animaldetails.animg.setValue(excelData[0].aimg);
        await animaldetails.ancage.setValue(excelData[0].acage)
        await animaldetails.anfeed.setValue(excelData[0].afeed);
        await animaldetails.anbreed.setValue(excelData[0].abreed)
        await animaldetails.andesc.setValue(excelData[0].adesc);
        
    })

    it("click submit",async()=>{
        await animaldetails.submitdetails.click();
        await animaldetails.dashboard.click();
        await animaldetails.admin.click();
        await animaldetails.logout.click();
    })
})

    
