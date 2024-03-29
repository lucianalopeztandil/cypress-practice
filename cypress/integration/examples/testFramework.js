/// <reference types="Cypress"/>
import productspage from "../../pom/productspage";
import verificationpage from "../../pom/verificationpage";
import confirmationpage from "../../pom/confirmationpage";

describe('Testing angular page', function(){

    before(function(){
        cy.fixture('example.json').then((data)=>{
            this.data = data;
            cy.log('The data is: ' + this.data.products);
        }
    )})

    it('Complete operation', function(){
        cy.visit(Cypress.env('url')+'angularpractice/shop');

        const products = new productspage();
        const verification = new verificationpage();
        const arrayProducts = products.getProducts();
        const confirmation = new confirmationpage();

        arrayProducts.each(($element, index, $list)=>{
            const nameElement = $element.find('.card-title a').text();
            cy.log('The name of the product is: ' + nameElement);
              if(this.data.products.includes(nameElement)){
                cy.log('The element was found: ' + nameElement);
                products.selectProduct($element);
            }
        });

        products.checkout();
        verification.verifyTotalAmount();
        verification.selectSuccessButton();
        confirmation.selectCountry();
    })

});