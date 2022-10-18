
class AddAnimalsPage{
    get dashboard()
    {
        return $("//span[.='Dashboard'][1]")
    }
    
    get addAnimal()
    {
        return $("//a[text()='Add Animals']")
    }

    get animalDetails()
    {
        return $("//span[text()='Animals Details']")
    }
    get anname()
    {
        return $("//input[@id='aname']")
    }

    get animg()
    {
        return $("//input[@id='image']")
    }

    get anfeed()
    {
        return $("//input[@id='fnum']")
    }

    get anbreed()
    {
        return $("//input[@id='breed']")
    }

    get ancage()
    {
        return $("//input[@id='cnum']")
    }

    get andesc()
    {
        return $("//input[@id='desc']")
    }

    get submitdetails()
    {
        return $("//button[.='Submit']")
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
module.exports=new AddAnimalsPage();