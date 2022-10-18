describe("Amazon",async()=>
{
    it('launching browser',async()=>
    {
        await browser.url("https://www.skillrary.com/")
        await browser.maximizeWindow()
        
    })


    it('sending text to search',async()=>
    {
        await browser.url("https://www.skillrary.com/")
        await browser.maximizeWindow()
        const searchtxt=await $("//input[@name='q']")
        searchtxt.setValue("python")
        const searchbtn=await $("//input[@type='submit']")
        searchbtn.click()
        browser.pause(5000)
        const python=await $("//div[@class='business_office']/descendant::p[text()=' QPYO4 python by Ms.pallavi_QSP']")
        python.click()
        browser.pause(5000)
        browser.a

        
    })
})
