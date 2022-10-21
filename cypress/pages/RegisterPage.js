class RegisterPage {

    fillForm(customer) {
        cy.get('input[name="billing_first_name"]').type(customer.firstName)
        cy.get('input[name="billing_last_name"]').type(customer.lastName)
        cy.get('input[name="billing_address_1"]').type(customer.address.street)
        cy.get('input[name="billing_city"]').type(customer.address.city)
        cy.get('input[name="billing_postcode"]').type(customer.address.postalcode)
        cy.get('input[name="billing_phone"]').type(customer.phone)
        cy.get('input[name="billing_email"]').type(customer.email)
        cy.get('input[name="createaccount"]').check()
        cy.get('input[name="account_password"]').type(customer.password)
        cy.get('input[name="payment_method"]').last().check()
        cy.get('input[name="terms"]').check()   
    }

    submit() {
        cy.get('input[id="place_order"]').click()
    }

    orderCreatedShouldBe() {
        cy.get('.page-title').should('have.text', 'Pedido recebido')
        cy.get('.woocommerce-notice').should('have.text', 'Obrigado. Seu pedido foi recebido.')
    }
}

export default new RegisterPage;