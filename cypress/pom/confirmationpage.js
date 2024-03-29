class confirmationpage {

    selectCountry(){
        cy.get('.input-field label').then((str)=>{
            cy.log(str.text().includes('Please choose your delivery'));
        });
        cy.get('#country').type('India');
        cy.get('.suggestions ul li a').then((str)=>{
            str.text().includes('India');
            cy.get('.suggestions ul li a').click();
        });
    }

}

export default confirmationpage;