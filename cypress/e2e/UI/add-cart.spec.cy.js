import register from '../../pages/RegisterPage'
import addCart from '../../pages/AddCartPage'
import cart from '../../pages/CartPage'
import registerFactory from '../../factories/RegisterFactory'
import productFactory from '../../factories/ProductFactory'


describe('Buy', () => {

    it('Successfully added three products to cart', function () {

        var product1 = productFactory.product1()
        var product2 = productFactory.product2()
        var product3 = productFactory.product3()

        addCart.goBuy()
        addCart.browseProducts()
        addCart.selectOptions(product1)
        addCart.addCart()
        addCart.addedCart()

        addCart.breadcrumb()
        addCart.selectOptions(product2)
        addCart.addCart()
        addCart.addedCart()

        addCart.breadcrumb()
        addCart.selectOptions(product3)
        addCart.addCart()
        addCart.addedCart()       	
    })

    it('More products in cart than in stock', function () {

        var product4 = productFactory.product4()
        
        addCart.goBuy()
        addCart.browseProducts()
        addCart.selectOptions(product4)
        addCart.moreQuantity()
        addCart.addCart()
        addCart.addCart()
        const expectedMessage = 'Você não pode adicionar esta quantidade ao seu carrinho, temos em estoque 2 e você já tem em seu carrinho 2.'
        addCart.alertMessage(expectedMessage)

    })

    it.only('Customer completes first purchase', function () {

        var product5 = productFactory.product5()
        var customer = registerFactory.customer()
        
        addCart.goBuy()
        addCart.browseProducts()
        addCart.browseProducts()
        addCart.selectOptions(product5)
        addCart.addCart()
        addCart.addedCart()
		addCart.goCart()
        cart.checkout()
        register.fillForm(customer)
        register.submit()
        register.orderCreatedShouldBe()
    })

})