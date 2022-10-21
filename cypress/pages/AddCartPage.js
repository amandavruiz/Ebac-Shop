class AddCartPage {

    goBuy() {
        cy.visit('/')

        cy.get('#primary-menu .menu-item-629 a').click()
        cy.get('.page-title').should('have.text', 'Produtos')
    }

    browseProducts() {       
        cy.get('a[class="next page-numbers"]').click()
    }

    breadcrumb() {       
        cy.contains('.tbay-woocommerce-breadcrumb a','Women').click()     
    }

    selectOptions(product) {       

        cy.product(product.product)
        cy.get('button[class*="disabled"]').should('exist')
        cy.size(product.size)
        cy.color(product.color)
        cy.get('button[class*="disabled"]').should('not.exist')
    }

    addCart() {
        cy.get('.single_add_to_cart_button').click()
        
    }

    moreQuantity() {
        cy.get('.plus').click()
    }

    addedCart() {
        cy.get('.woocommerce-message').should('be.visible')
        cy.get('.woocommerce-message a').should('have.text', 'Ver carrinho')
    }

    alertMessage(expectedMessage) {
        cy.get('.woocommerce-error > li').should('include.text', expectedMessage)
    }

    goCart() {
        cy.get('.woocommerce-message a').click()
        cy.get('.page-title').should('have.text', 'Carrinho')
    }
    
}

export default new AddCartPage;