describe('Add Animal',async()=>
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
 
          it('login validation',async()=>{
            const Title=await browser.getTitle()
            console.log("title is "+Title)
            await expect(browser).toHaveTitleContaining("Zoo Management System || Dashboard")  
            await browser.pause(2000)
        })
        
        it('Animal Details',async()=>{
            const animalDetails=await browser.$("//span[.='Animals Details']")
            await animalDetails.click()
          })

          it('Add Animals',async()=>{
            const addanimal=await browser.$("//a[text()='Add Animals']")
            await addanimal.click()

            const aname=await browser.$("//input[@id='aname']")
            await aname.setValue("peacock")

            const aimg=await browser.$("//input[@id='image']")
            //await aimg.setValue("C:/Users/BHARATI/OneDrive/Desktop/zeebra.jpg")
            await aimg.uploadFile("C:/Users/BHARATI/OneDrive/Desktop/zeebra.jpg")

            const cageno=await browser.$("//input[@id='cnum']")
           await cageno.setValue("P0023")

           const feedno=await browser.$("//input[@id='fnum']")
           await feedno.setValue(8761)

           const breed=await browser.$("//input[@id='breed']")
           await breed.setValue("Indian peacock")

           const description=await browser.$("//input[@id='desc']")
           await description.setValue("Found across the country")

           const submitBtn=await browser.$("//button[.='Submit']")
           await submitBtn.click()
          })


        it('Log out',async()=>{
            const dropdown=await browser.$("//i[@class='fa fa-angle-down']")
           await dropdown.click()
            const logout=await browser.$("//a[.='Log Out']")
            await logout.click()
            //await browser.pause(1000)

         })
          
})