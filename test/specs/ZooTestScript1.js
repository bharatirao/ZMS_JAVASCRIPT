describe("Generate Normal Tickets",async()=>{
  
  
    it('zoo mgmt login',async()=>{
        await browser.url("http://rmgtestingserver/domain/Zoo_Management_System")
        await browser.maximizeWindow()
        //await console.log(browser.getTitle())
        await browser.$("//h4[text()='Zoo Management System']")
        const admin=await $("//a[text()='Admin']/ancestor::div[@id='bs-example-navbar-collapse-1']//a[text()='Admin']")
        await admin.click()
        const uname=await $("//input[@id='username']")
        await uname.setValue("admin")
        const passwd=await $("//input[@id='password']")
        await passwd.setValue("Test@123")
        const submit=await $("//button[@id='form_submit']")
        await submit.click()
      
        //  url=await browser.getUrl();
        // console.log("url is "+url)
     })

    it('login validation',async()=>{
        const Title=await browser.getTitle()
        const value="Zoo Management System || Dashboard"
        if(Title==value)
        {
          console.log("login success")
        }
        else{
          console.log("login failed")
        }
        // await expect(browser).toHaveTitleContaining("Zoo Management System || Dashboard")  
        
    })
     
    xit('count verification',async()=>{
      const dashboard=await browser.$("//span[.='Dashboard'][1]")     
       dashboard.click()
        count=await $("//h3[.='Total Normal Adult Visitor']/following-sibling::p").getText()
       //await count.getText()

     })

    it('Normal Tickets',async()=>{
         const normalTicket=await $("//div[@class='sidebar-menu']//ul[@id='menu']//a//span[text()='Normal Ticket']")
         await normalTicket.click()
         await expect(browser).toHaveTitleContaining("Zoo Management System || Dashboard") 
         //await browser.pause(2000)
        })

    xit('Normal Tickets',async()=>{
        const nticket=await browser.$("//span[text()='Normal Ticket']")
          await  nticket.click()
          await expect(browser).toHaveTitleContaining("Zoo Management System || Dashboard") 
         // await  browser.pause(2000)  
     })
 
    it('Add Ticket',async()=>{
       const addTicket=await $("//div[@class='sidebar-menu']//ul[@class='metismenu']//ul[@class='collapse in']//a[text()='Add Ticket']")
       await addTicket.click()
       await expect(browser).toHaveTitleContaining("Add Normal Zoo Ticket - Zoo Management System") 
      // await  browser.pause(2000) 
    })
    
    it('Add Ticket Details',async()=>{
       const visitorName=await browser.$("//input[@id='visitorname']")
       await visitorName.setValue("savitha A")
       const Adult=await  browser.$("//input[@id='noadult']")
       await Adult.setValue(4)
       const Child=await  browser.$("//input[@name='nochildren']")
      await  Child.setValue("6")
       const submit=await browser.$("//button[@type='submit']")
      await  submit.click()
      await browser.pause(1000)
    //  var alertText=browser.getAlertText()
    //  await console.log(alertText)
    //  var alertvalue="Ticket has been generated"
    //   if(alertText==alertvalue)
    //   {
    //   console.log("Ticket generated successfully")
    //   }
    //   else{
    //     console.log("Ticket not generated successfully")
    //   }
      browser.acceptAlert()
      //await browser.pause(1000)

      browser.saveScreenshot("./test/specs/Screenshots/screenshot2.png")
      // const print=await browser.$("//i[@class='fa fa-print fa-2x']")
      // await print.click()
      // await browser.closewindow()
     })
    
     it('Add Visitor verification',async()=>{
      const normalTicket=await $("//div[@class='sidebar-menu']//ul[@id='menu']//a//span[text()='Normal Ticket']")
      await normalTicket.click()
      const manageType=await browser.$("//div[@class='sidebar-menu']//ul[@class='metismenu']//ul[@class='collapse in']//a[text()='Manage Ticket']")
     await manageType.click()
     await expect(browser).toHaveTitleContaining("Manage Normal Ticket - Zoo Management System") 
     var vname="savitha A";
     var visitname=await browser.$("//div[@class='card-body']//table//descendant::tbody[1]//td[.='savitha A']")
     console.log(visitname)
     if(vname==visitname){
      console.log("visitor added successfully")
     }

    
     })
    xit('Switch To dashboard',async()=>{
      async function switchToDashboard()
      {
       const dashboard=await browser.$("//ul[@class='metismenu']//li//a//span[.='Dashboard']")     
       dashboard.click()
      }
     })
    

    xit('Switch Window',async()=>{
       await browser.switchWindow("Zoo Management System || Dashboard") 
      //await browser.switchWindow(url)
      // await browser.switchWindow("http://rmgtestingserver/domain/Zoo_Management_System/admin/dashboard.php")
       //await browser.pause(1000)
      })

   xit('View Ticket Details',async()=>{
      const nticket=await browser.$("//span[text()='Normal Ticket']")
    await  nticket.click()
    const manageType=await browser.$("//div[@class='sidebar-menu']//ul[@class='metismenu']//ul[@class='collapse in']//a[text()='Manage Ticket']")
     await manageType.click()
     await expect(browser).toHaveTitleContaining("Manage Normal Ticket - Zoo Management System") 
     //await  browser.pause(2000)
      })

      xit('Delete Ticket',async()=>{
        const deletebtn=await browser.$("//a[text()='Delete'][2]")
        deletebtn.click()
        browser.acceptAlert()
       //await browser.pause(1000)
       })

     it('Log out',async()=>{
      const dropdown=await browser.$("//i[@class='fa fa-angle-down']")
      dropdown.click()
      const logout=await browser.$("//a[.='Log Out']")
     logout.click()
     //await browser.pause(1000)

     })
}) 
