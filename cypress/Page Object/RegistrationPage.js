

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