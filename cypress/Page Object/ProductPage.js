

//Scenario - Search and validate Lemon
    // Click on search icon
    // Search for Lemon
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."

    import BasePage from "./basePage";


class ProductPage extends BasePage {
    static get url() {
      return "/search";
    }

    static get searchButton(){
      return cy.get("#searchQuery");
    }

    static get lemonProductCard(){
      return cy.get("[src='assets/public/images/products/lemon_juice.jpg']");

      
    }

    static get lemonValidation(){
      return cy.get('app-product-details');
    }
  }

  export default ProductPage;