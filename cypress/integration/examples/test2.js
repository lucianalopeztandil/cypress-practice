describe('My First Test Suite', ()=>{

    it('My First Test Case', ()=>{
        //primero  se accede a la pagina de prueba
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        //luego se busca  el input donde ingresar el texto para buscar los elementos
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);

        //de la lista de productos retornadea, se verifica que  la misma tenga una longitud de 4
        cy.get(".products").find(".product").should('have.length', 4);

        //para cada uno de los elementos retornados de la lista, se verifica primero el texto. Si el texto es capsicum,
        //entonces se hace click sobre el boton
        cy.get(".products").find(".product").each(($element, index, $list) =>{

            const productName = $element.find(".product-name").text();
            cy.log("Checking the producto: " + productName);

            if(productName.includes("Capsicum")){
                cy.log("Product found");
                cy.wrap($element).find("button[type='button']").click();
            }
        });

        //se avanza en la compra
        cy.get(".cart-icon img").click();
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.contains("Place Order").click();

        cy.get("select").select("Argentina").should("have.value", "Argentina");
        cy.get(".chkAgree").check();
        cy.get("button").click();


    });

});