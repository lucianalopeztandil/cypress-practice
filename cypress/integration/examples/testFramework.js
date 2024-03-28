/// <reference types="Cypress"/>
import productspage from "../../pom/productspage";


describe('Testing angular page', function(){

    before(function(){
        cy.fixture('example.json').then((data)=>{
            this.data = data;
            cy.log('The data is: ' + this.data.products);
        }
    )})

    it('Complete operation', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        const products = new productspage();
        const arrayProducts = products.getProducts();

        arrayProducts.each(($element, index, $list)=>{
            const nameElement = $element.find('.card-title a').text();
            cy.log('The name of the product is: ' + nameElement);
              if(this.data.products.includes(nameElement)){
                cy.log('The element was found: ' + nameElement);
                products.selectProduct($element);
            }
        });

        products.checkout();       
        cy.get('.btn.btn-success').click();
        cy.get('.input-field label').then((str)=>{
            cy.log(str.text().includes('Please choose your delivery'));
        })
    })

});