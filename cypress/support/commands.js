Cypress.Commands.add('product', (product) => {
    return cy.get(`[data-product-id=${product}] h3 a`).click()
})

Cypress.Commands.add('size', (size) => {
    return cy.get(`[data-title=${size}]`).click()
})

Cypress.Commands.add('color', (color) => {
    return cy.get(`[data-title=${color}]`).click()
})