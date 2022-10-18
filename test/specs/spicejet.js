describe("spicejet",async()=>{
 it("ticket booking",async()=>{
    await browser.url("https://www.spicejet.com/")
    await browser.maximizeWindow()
    // browser.keys("Escape")
    // browser.pause(2000)
    const radiobtn=await $("//div[text()='round trip']")
    radiobtn.click();
    const armedforce=await browser.$("//div[text()='Armed Forces']")
    armedforce.click()
  //  // const fromdate=await $("(//*[local-name()='svg' and @data-testid='svg-img' ]/*[local-name()='path'])[8]")
  //  const departuredate=await $("//div[text()='Departure Date']")
  //  departuredate.click();
    let destination = await browser.$("//div[@data-testid='to-testID-destination']");
   destination.click();
   await browser.$("//div[.='KQH']").click()
   await browser.$("//div[@data-testid='undefined-month-October-2022']//following::div[@data-testid='undefined-calendar-day-20']").click();
  await browser.$("//div[@data-testid='undefined-month-December-2022']//following::div[@data-testid='undefined-calendar-day-5']").click();
  await browser.$("//div[@data-testid='home-page-flight-cta']").click();
   await browser.pause(2000)
   await browser.$("//div[@class='css-1dbjc4n r-1tf5bf9 r-1777fci r-1ww30s9']").click()
   await browser.$("//div[@class='css-1dbjc4n r-1awozwy r-z2wwpe r-1loqt21 r-18u37iz r-1777fci r-d9fdf6 r-1w50u8q r-ah5dr5 r-1otgn73']").click()
   await browser.debug()
    })
})
