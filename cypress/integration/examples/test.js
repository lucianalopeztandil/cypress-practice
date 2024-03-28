describe('My First Test Suite', ()=>{

    it('My First Test Case', ()=>{
        //primero  se accede a la pagina de prueba
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke("removeAttr", "target").click();
        //se cambia el origin para poder acceder a la nueva pagina, removiendo antes el atributo.
        cy.origin("https://www.qaclickacademy.com", ()=>{
            //operaciones a ejecutar sobre la nueva pagina.
            cy.get("#navbarSupportedContent a[href='about.html'").then((element)=>{
                cy.log(element.text());
            })
        });
    });

});