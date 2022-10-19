class SearchNormalPage{
    get dashboard()
    {
        return $("//span[.='Dashboard'][1]")
    }

    get searchMenu()
    {
      return $("//ul[@class='metismenu']//li//a//span[text()='Search']")
    }

    get searchNormalTicket()
    {
        return $("//a[text()='Normal Ticket Search']")
    }

    get visitorname()
    {
        return $("//input[@id='searchdata']")
    }

    get searchbutton()
    {
        return $("//button[text()='Search']")
    }

    get adminsearchpage()
    {
        return $("//i[@class='fa fa-angle-down']")
    }

    get logoutsearchpage()

    {
        return $("//a[text()='Log Out']")
    }
}

module.exports=new SearchNormalPage();