import register from '../../pages/RegisterPage'
import addCart from '../../pages/AddCartPage'
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

        addCart.breadcrumb()
        addCart.selectOptions(product2)
        addCart.addCart()

        addCart.breadcrumb()
        addCart.selectOptions(product3)
        addCart.addCart()

    })

    it.only('More products in cart than in stock', function () {

        var product4 = productFactory.product4()
        
        addCart.goBuy()
        addCart.browseProducts()
        addCart.selectOptions(product4)
        addCart.moreQuantity()
        addCart.alertStock()
		
    })

})