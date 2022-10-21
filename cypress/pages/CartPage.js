class CartPage {

    checkout() {
        cy.get('.checkout-button').click()
        cy.get('.page-title').should('have.text', 'Checkout')
    }
    
}

export default new CartPage;