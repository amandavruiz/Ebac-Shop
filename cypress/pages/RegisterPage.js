class RegisterPage {

    go() {
        

        //cy.get('.dropdown.menu a[title="Login"]').click();
        //cy.get('.page-title').should('have.text', 'Minha conta')
    }

    fillForm(customer) {
        cy.get('input[id="reg_email"]').type(customer.email)
        cy.get('input[id="reg_password"]').type(customer.password)
    }

    submit() {
        cy.get('input[name="register"]').click()
    }

    myAccountShouldBe() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account a').should('have.text', 'Detalhes da conta')
    }

    viewAllProducts() {
        
        cy.get('#primary-menu .menu-item-629 a').click()
    }
}

export default new RegisterPage;