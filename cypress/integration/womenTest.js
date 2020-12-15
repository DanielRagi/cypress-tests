describe('Pruebas en el sitio', function(){

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    })

    it('Large tops search', function(){         //checkboxes
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();
        // Más acciones (...)
        cy.get('#layered_id_attribute_group_3').uncheck();
        cy.get('#layered_category_4').uncheck();
    })

    it('Order by highest price', () => {    //optionlist    (+ arrow function, reemplazar function por () =>)
        cy.get('#selectProductSort').select('Price: Highest first');
    })

})