
//Scenario - Registration
// Click Account button
// Login button
// Click "Not yet a customer?"
// Find - how to generate random number in JS
// Use that number to genarate unique email address, e.g.: email_7584@ebox.com
// Save that email address to some variable
// Fill in password field and repeat password field with same password

// Click on Security Question menu
// Select  "Name of your favorite pet?"
// Fill in answer
// Click Register button

// Set email value to previously created email
// Set password value to previously used password value
// Click login button
// Click Account button
// Validate that account name (with previously created email address) appears in the menu section

import BasePage from "./basePage";


class RegistrationPage extends BasePage {
    static get url() {
      return "register";
    }

    static get notYetCustomer(){
        return cy.get("[href='#/register']");
    }

    static get emailRegistration(){
        return cy.get("#emailControl");
    }

    static get password(){
        return cy.get("#passwordControl");
    }

    static get repeatPassword(){
        return cy.get("#repeatPasswordControl");
    }

    static get clickSecurityQuestion(){
        return cy.get("[aria-label='Selection list for the security question']");
    }

    static get securityquestAnswer(){
        return cy.get("#securityAnswerControl");
    }

    static get registerButton(){
        return cy.get("#registerButton");
    }

}

export default RegistrationPage;