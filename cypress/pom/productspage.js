/// <reference types="Cypress"/>

class productspage {

    getProducts(){
        return cy.get('app-card-list app-card');
    }

    selectProduct(element){
        cy.log('*******************************************');
        cy.log('The element who button will be selected is: ' + element.find('.card-title a').text())
        cy.wrap(element).find('button').click();
    }

    checkout(){
        cy.contains('Checkout').click();
    }

}

export default productspage;