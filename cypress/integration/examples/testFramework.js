/// <reference types="Cypress"/>

describe('Testing angular page', function(){

    before(function(){
        cy.fixture('example.json').then((data)=>{
            this.data = data;
        }
    )})

    it('Complete operation', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
        cy.log('The data is: ' + this.data.products);
        cy.get('app-card-list app-card').as('products').each(($element, index, $list)=>{
            const nameElement = $element.find('.card-title a').text();
            cy.log('The name of the product is: ' + nameElement);
              if(this.data.products.includes(nameElement)){
                cy.log('The element was found: ' + nameElement);
                cy.get('@products').eq(index).find('.btn').click();
            }
        });
        cy.contains('Checkout').click();
        cy.get('.btn.btn-success').click();
        cy.get('.input-field label').then((str)=>{
            cy.log(str.text().includes('Please choose your delivery'));
        })
    })

});