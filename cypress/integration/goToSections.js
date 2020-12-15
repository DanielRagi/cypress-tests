describe('Pruebas en el sitio', () => {

    beforeEach( () => {
        cy.visit('http://automationpractice.com/index.php');
    })

    // Seleccionar primer elemento de varios con el mismo class
    it('Go to women section', () => {
        cy.get('[class=sf-with-ul]').first().click();
    })

    it('Go to dresses section', () => {
        cy.get('[class=sf-with-ul]').eq('3').click(); //toma el elemento  con id 3 en el selector de la clase
    })
})