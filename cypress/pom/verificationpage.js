class verificationpage {

    selectSuccessButton(){
     cy.get('.btn.btn-success').click();
    }

    verifyTotalAmount(){
        let totalSum = 0;
        cy.get('tr td:nth-child(4) strong').each(($element, index, $list) => {
            cy.log('The number is: ' + $element.text());
            let value = $element.text().split(' ')[1].trim();
            totalSum = totalSum + parseInt(value);
        }).then(()=>{
            cy.log('The total is: ' + totalSum);
        })
        cy.get('tr td:nth-child(5) strong').then((element) =>{
            let totalvalue = element.text().split(' ')[1].trim();
            expect(parseInt(totalvalue)).to.be.eql(totalSum);
            cy.log('The total value showed in the page is: ' + totalvalue);
        })
    }

}

export default verificationpage;