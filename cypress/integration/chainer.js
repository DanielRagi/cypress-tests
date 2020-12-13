describe('Escribir en búsqueda varios strings', function(){
    it('Escribir y limpiar', function(){
        cy.visit('http://automationpractice.com/index.php');
        /*cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('Hola');
        cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('Qué tal');*/

        cy.get('#search_query_top').clear().type('Hola').clear().type('Qué tal');
    })
})