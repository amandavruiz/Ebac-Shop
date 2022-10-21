/// <reference types="cypress" />

describe('Coupons API', () => {

    var url = 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons/'
    var auth = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
    var coupons = `BEMVINDO${Math.floor(Math.random() * 100000)}`
    var id = '7615'

    it('GET - Deve listar todos os cupons cadastrados', () => {

        cy.request({
            method: 'GET',
            url: url,
            headers: {
                Authorization: auth
            }
        }).should((response) => {
            expect(response.status).to.equal(200)
        })
    })

    it('POST - Deve cadastrar um cupom', () => {
        cy.request({
            method: 'POST',
            url: url,
            headers: {
                Authorization: auth
            },
            body: {
                "code": coupons,
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom Primeira Compra"
            }
        }).should((response) => {
            expect(response.status).to.equal(201)
        })
    })

    it('GET - Deve listar um cupom cadastrado buscando pelo ID', () => {

        cy.request({
            method: 'GET',
            url: url+id,
            headers: {
                Authorization: auth
            },
        }).should((response) => {
            expect(response.status).to.equal(200)
        })
    })
});