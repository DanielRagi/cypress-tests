describe('Search test cases', function(){

    before(function(){                                                      //antes de ejecutar las pruebas
        cy.log("Ejecutando precodiciones a las pruebas");
    })

    after(function(){                                                       //después de realizar todas las pruebas
        cy.log("Ejecutando todas las postcondiciones a las pruebas");
    })

    beforeEach(function(){                                                  //antes de cada una de las pruebas
        cy.visit('http://automationpractice.com/index.php');
    })

    afterEach(function(){                                                   //después de cada función
        cy.log("Poniendo datos en su estado original");
     })
    
    it('Search with results', function(){
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();

        cy.get('.lighter').contains('"dress"');
    })

    it('Search hats', function(){
        cy.get('#search_query_top').type('hats');
        cy.get('#searchbox > .btn').click();

        cy.get('.lighter').contains('"hats"');
    })
})