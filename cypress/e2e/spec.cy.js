import BasePage from "../Page Object/basePage"
import LoginPage from "../Page Object/loginPage";
import RegistrationPage from "../Page Object/RegistrationPage";


describe("Juice Shop Website Validation",()=>{
  context("Login Validation",()=>{
    beforeEach(()=>{
      LoginPage.visit();
      BasePage.dismissCookie.click();
      BasePage.closeBanner.click();
    });


    //Scenario-1

    it("Login Account",()=>{
      LoginPage.clickAccountButton.click({force: true});
      LoginPage.clickLoginButton.click({force: true});
      LoginPage.emailLogin.type("demo");
      LoginPage.passwordLogin.type("demo");
      LoginPage.loginButton.click();
      LoginPage.clickAccountButton.click();
      LoginPage.accountNameValidation.should("contains.text","demo");


    })

    // Scenario-2

    it.only("Registration ",()=>{

      LoginPage.clickAccountButton.click({force: true});
      LoginPage.clickLoginButton.click({force: true});
      RegistrationPage.notYetCustomer.click({force: true}); 
      let email = "email" + Math.random()* 100 + "@ebox.com"
      RegistrationPage.emailRegistration.type(email);
      RegistrationPage.password.type("juice");
      RegistrationPage.repeatPassword.type("juice");
      RegistrationPage.clickSecurityQuestion.click({force: true}).get("#mat-option-6").click();
      RegistrationPage.securityquestAnswer.type("kuttu");
      RegistrationPage.registerButton.click();
      LoginPage.emailLogin.type(email);
      LoginPage.passwordLogin.type("juice");
      LoginPage.loginButton.click();
      LoginPage.accountNameValidation.should("contains.text","email13.796031294734746");



      


    })

  })
})