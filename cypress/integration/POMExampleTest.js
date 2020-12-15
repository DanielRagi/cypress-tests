import indexPage from './PageObjects/IndexPage';

describe('Search test cases', () => {
    before( () => {
        cy.log("Ejecutando precodiciones a las pruebas");
    })

    after( () => {
        cy.log("Ejecutando todas las postcondiciones a las pruebas");
    })

    beforeEach( () => {
        cy.visit('http://automationpractice.com/index.php');
    })

    afterEach( () => {
        cy.log("Poniendo datos en su estado original");
     })
    
    it('Search with results', () => {
        indexPage.search('dress');
        cy.get('.lighter').should('contain', '"dress"');
    })
})