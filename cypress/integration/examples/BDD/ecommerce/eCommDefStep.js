/// <reference types="Cypress" />

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import productspage from "../../../../pom/productspage";
import verificationpage from "../../../../pom/verificationpage";
import confirmationpage from "../../../../pom/confirmationpage";

const products = new productspage();
const verification = new verificationpage();
const confirmation = new confirmationpage();

Given('I open Ecommerce page', ()=>{
    cy.visit(Cypress.env('url')+'angularpractice/shop'); 
})

When('I add products to cart', (dataTable)=>{
    
    const arrayProducts = products.getProducts();
    arrayProducts.each(($element, index, $list)=>{
    const nameElement = $element.find('.card-title a').text();
    cy.log('The name of the product is: ' + nameElement);
    cy.log('The parameter is: ' + dataTable.rawTable);
    if(dataTable.rawTable[0].includes(nameElement) || dataTable.rawTable[1].includes(nameElement)){
      cy.log('The element was found: ' + nameElement);
      products.selectProduct($element);
     }
    });

    products.checkout();
})

When('Validate the total prices', () =>{
    verification.verifyTotalAmount();
    verification.selectSuccessButton();   
})

Then('Select the country and submit', ()=>{
    confirmation.selectCountry();
})