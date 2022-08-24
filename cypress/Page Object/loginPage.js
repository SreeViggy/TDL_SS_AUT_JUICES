

import BasePage from "./basePage";

class LoginPage extends BasePage {
  static get url() {
    return "login";
  }

  static get clickAccountButton(){
    return cy.get("#navbarAccount");
  }

  static get clickLoginButton(){
    return cy.get("#navbarLoginButton");
  }

  static get emailLogin(){
    return cy.get("#email");
  }

  static get passwordLogin(){
    return cy.get("#password");
  }

  static get loginButton(){
    return cy.get("#loginButton");
  }

  static get accountNameValidation(){
    return cy.get("[aria-label='Go to user profile']");
  }

}

export default LoginPage;