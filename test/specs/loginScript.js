const loginPage = require("../pageobjects/AddnormalTicketPage.js");
describe("Login Application",async()=>
{
  it("login credentials",async()=>
  { await browser.url("http://rmgtestingserver/domain/Zoo_Management_System/");
  await browser.maximizeWindow()
    await loginPage.Admin.click()
    await loginPage.userName.setValue("admin")
    await loginPage.passWord.setValue("Test@123")
    await loginPage.submitButton.click()
    //await browser.debug()
    await loginPage.NormalTicket.click()
    await loginPage.AddTicket.click()
await loginPage.visitorname.setValue("rohit")
await loginPage.adult.setValue(3)
await loginPage.child.setValue(2)
await loginPage.submit1.click()
     
  })
})