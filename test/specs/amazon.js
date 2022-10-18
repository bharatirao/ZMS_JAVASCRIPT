describe("Amazon",async()=>{
    it('launching browser',async()=>{
        await browser.url("https://www.amazon.com/")
        await browser.maximizeWindow()
        
    })

    it('click on gift cards',async()=>{
        await browser.url("https://www.amazon.com/")
        await browser.maximizeWindow()
        const gift=await $("//a[text()='Gift Cards']")
        gift.click()
        const bday=await $("//img[@alt='Birthday gift cards']")
        bday.click()
        browser.pause(5000)
        const gift2=await $("//span[@class='nav-a-content']")
        gift2.click()
        browser.pause(5000)
        
    })

    it('click on electronics',async()=>{
        await browser.url("https://www.amazon.com/")
        await browser.maximizeWindow()
        const electronics=await $("//img[@alt='Electronics	']")
        electronics.click()
        browser.pause(5000)
        
    })

    it('click on camera',async()=>{
        await browser.url("https://www.amazon.com/")
        await browser.maximizeWindow()
        const camera=await $("//a[@title='Fujifilm Instax Square SQ1 Instant Camera - Terracotta Orange (16670510)']")
        await camera.scrollIntoView()
        camera.click()
        browser.pause(8000)
    })

    // it('get text',async()=>{
    //     await browser.url("https://www.amazon.com/")
    //     await browser.maximizeWindow()
    //     const text=await $("//span[@class='a-size-base a-color-base']")
    //    console.log(text.getText())
    // })
})