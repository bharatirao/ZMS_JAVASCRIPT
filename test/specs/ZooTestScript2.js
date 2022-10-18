describe('Generate Normal Ticket Report',async()=>
{
    it('zoo mgmt login',async()=>
    {
        await browser.url("http://rmgtestingserver/domain/Zoo_Management_System")
        await browser.maximizeWindow()
        await console.log(browser.getTitle())
        const admin=await $("//a[text()='Admin']/ancestor::div[@id='bs-example-navbar-collapse-1']//a[text()='Admin']")
        await admin.click()
        const uname=await $("//input[@id='username']")
        await uname.setValue("admin")
        const passwd=await $("//input[@id='password']")
        await passwd.setValue("Test@123")
        const submit=await $("//button[@id='form_submit']")
        await submit.click()
        await browser.pause(2000)
          })

    it('Reports',async()=>
    {
       const report=await $("//span[text()='Reports']")
       await report.click()
       await browser.pause()
    })   
    

    it('NormalReports',async()=>
    {
      const NormalReport=await $("//a[text()='Normal People Report']")
      await NormalReport.click()
      await browser.pause(1000)
    }) 
   
    it('FromToDate',async()=>
    {
      const FromDate=await $("//input[@id='fromdate']")
      await FromDate.setValue("11-09-2022")
      const ToDate=await $("//input[@id='todate']")
      await ToDate.setValue("11-10-2022")
      const submitbtn=await $("//button[text()='Submit']")
      await submitbtn.click()
      const reportpageTitle=browser.getTitle()
      console.log(reportpageTitle)
      if(reportpageTitle){
        console.log("Report successfully generated")
      }
      await browser.pause(2000)
    }) 

    it('viewDetails',async()=>
    {
      const  view=await $("//a[.='View'][1]")
       await view.click()
       await browser.pause(1000)
       browser.saveScreenshot("./test/specs/Screenshots/screenshot.png")
    }) 

    it('Log out',async()=>{
        const dropdown=await browser.$("//i[@class='fa fa-angle-down']")
        dropdown.click()
        const logout=await browser.$("//a[.='Log Out']")
        logout.click()
        // await browser.pause(1000)

              })
})