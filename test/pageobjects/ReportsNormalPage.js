class jsonTestscript2page{

    get dashboard()
    {
        return $("//span[.='Dashboard'][1]")
    }

    get reports(){
        return $("//span[text()='Reports']")
    }

    get normalreport(){
        return $("//a[text()='Normal People Report']")
    }

    get fromdate(){
        return $("//input[@id='fromdate']")
        }

        get todate(){
            return $("//input[@id='todate']")
        }

        get submit(){
            return $("//button[text()='Submit']")
        }

        get view(){
            return $("//a[.='View'][1]")
        }
        
 get admin()
    {
        return $("//i[@class='fa fa-angle-down']")
    }

    get logout()

    {
        return $("//a[text()='Log Out']")
    }

 }

   
module.exports=new jsonTestscript2page();