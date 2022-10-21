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
        cy.size(product.size)
        cy.color(product.color)
        cy.get('.single_add_to_cart_button').should('have.text', 'Comprar')
    }

    addCart() {
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('be.visible')
        cy.get('.woocommerce-message a').should('have.text', 'Ver carrinho')
        //cy.get('.woocommerce-message a').click()
    }

    moreQuantity() {
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.single_add_to_cart_button').click()
    }

    alertStock() {
        cy.get('.woocommerce-error > li').should('include.text', 'Você não pode adicionar esta quantidade ao seu carrinho, temos em estoque 2 e você já tem em seu carrinho 2.')
    }
    
}

export default new AddCartPage;