describe('Formas de encontrar un elemento', function(){
    it('Buscar en el navegador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola'); // buscar por clase, los . son espacios, el primero es para seleccionar clase
        cy.get('#search_query_top').type(' Como te va'); // buscar por ID
        cy.get('[name="search_query"]').type(' Me va muy bien'); //buscar por name (se puede usar para buscar por cualquier otra propiedad)
        cy.get('[placeholder="Search"]').clear();
        cy.get('[placeholder="Search"]').type('Gracias');
    })
})