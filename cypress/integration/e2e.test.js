context("Crypto World e2e testing",()=>{
    beforeEach(()=>{
        cy.visit("/login")
    })

    it("Should check for login",()=>{
        cy.get("#loginemail").type("tarun4@gmail.com")
        cy.get("#loginpassword").type("123456789")
        cy.get("#loginbtn").click()
        cy.wait(1000)
        cy.get("#cryptocompanies").should("have.text","List of Cryptoexchange Companies!")

    })


    it("Should check for login with wrong credentials",()=>{
        cy.get("#loginemail").type("tarunk4@gmail.com")
        cy.get("#loginpassword").type("123456789")
        cy.get("#loginbtn").click()
        cy.wait(1000)
        cy.get("#mtch").should("have.text","The given credentials do not match!")

    })




        it("Create new user with wrong contact",()=>{
      
        cy.visit("/register")
       
        cy.get("#registername").type("Tarun Shekher")
        cy.get("#registeremail").type("tarun919@gmail.com")
        cy.get("#registercontact").type("735596258")
        cy.get("#registerpassword").type("123456")
        cy.get("#registerconfirmpassword").type("123456")
        cy.get("#registerbtn").click()
        cy.wait(1000)
        cy.get("#phonetxt").should("have.text","Enter valid 10 digit number")



    })


    it("Create new user with password not matching",()=>{
      
        cy.visit("/register")
       
        cy.get("#registername").type("Tarun Shekher")
        cy.get("#registeremail").type("tarun9145@gmail.com")
        cy.get("#registercontact").type("7355962158")
        cy.get("#registerpassword").type("1234556")
        cy.get("#registerconfirmpassword").type("123456")
        cy.get("#registerbtn").click()
        cy.get("#msg").should("have.text","Password does not match")



    })

    it("Create new user with wrong password",()=>{
      
        cy.visit("/register")
       
        cy.get("#registername").type("Tarun Shekher")
        cy.get("#registeremail").type("tarun91y5@gmail.com")
        cy.get("#registercontact").type("7355962158")
        cy.get("#registerpassword").type("12345")
        cy.get("#registerconfirmpassword").type("12345")
        cy.get("#registerbtn").click()
       
        cy.get("#regpass").should("have.text","Password length should be more than 5")



    })


    it("Create new user with existing email",()=>{
      
        cy.visit("/register")
       
        cy.get("#registername").type("Tarun Shekher")
        cy.get("#registeremail").type("tarun4@gmail.com")
        cy.get("#registercontact").type("7355962158")
        cy.get("#registerpassword").type("123456")
        cy.get("#registerconfirmpassword").type("123456")
        cy.get("#registerbtn").click()
      
        cy.get("#exists").should("have.text","This email id is already taken")



    })

    it("Should create new user",()=>{
      
        cy.visit("/register")
       
        cy.get("#registername").type("Tarun Shekher")
        cy.get("#registeremail").type("tarun919621@gmail.com")
        cy.get("#registercontact").type("7355962158")
        cy.get("#registerpassword").type("123456")
        cy.get("#registerconfirmpassword").type("123456")
        cy.get("#registerbtn").click()
       
        cy.get("#logintxt").should("have.text","Sign in to explore more!")



    })

    it("Should check for reset email not exist",()=>{
      
        cy.visit("/reset")
       
        
        cy.get("#resetemail").type("tarun9121349@gmail.com")
        cy.get("#newpass").type("123456")
        cy.get("#newconfirmpass").type("123456")
        cy.get("#resetbtn").click()
        cy.wait(1000)
        cy.get("#emailnot").should("have.text","Email does not exist")



    })

    it("Should check for reset passsword not match",()=>{
      
        cy.visit("/reset")
       
        
        cy.get("#resetemail").type("tarun4@gmail.com")
        cy.get("#newpass").type("1234567")
        cy.get("#newconfirmpass").type("123456")
        cy.get("#resetbtn").click()
        cy.wait(1000)
        cy.get("#confirmsg").should("have.text","Password does not match")



    })


    it("addition of item to wishlist",()=>{
        cy.get("#loginemail").type("tarun4@gmail.com")
        cy.get("#loginpassword").type("123456789")
        cy.get("#loginbtn").click()
        cy.wait(3000)
        cy.get("#btnfavaddition").click()
        cy.wait(3000)
        cy.visit("/wishlist")
        cy.get("#wishlistmsg").should("have.text","View all your saved Cryptoexchange companies!")

    })

    it("conversion of crypto coins",()=>{

        cy.visit("/converter")
        cy.get("#cryptocoinname").type("ethereum")
        cy.get("#searchbtncryp").click()
        cy.wait(3000)
        cy.get("#cryptocoinname").type("ether")
        cy.get("#searchbtncryp").click()
        cy.wait(3000)
        cy.get("#nodatacryp").should("have.text","Sorry! No data found")

    })



})