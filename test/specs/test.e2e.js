describe("Ecommerse Application", function()   //in latest JS models you don't need to write the function() keyword
{
    it("Login fail Page", async ()=>                 //instead you can use this fat operator               
    {
        //webdriverio Async i.e. there is no garuntee that it will executed line by line
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        //await browser.implicitWait(5000)
        await browser.pause(5000)
        
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"))
        $("input[name='username]").setValue("rahulshettyacademy")
        //interesting thing is that if user to enter again in the same text box it will clear the previous string and enter again
        await $("#username").setValue("swapnil")
        await $("#password").setValue("newpassword")
        await $("#terms").click()
        await $("#signInBtn").click()
        console.log(await $(".alert-danger").getText())
        await browser.pause(5000)
        console.log("***********************************************************")
        await browser.pause(5000)




    } )







}

)

