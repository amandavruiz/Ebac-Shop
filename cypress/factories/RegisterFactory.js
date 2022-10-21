var faker = require('faker')

export default {

    customer: function () {

        var firstName = faker.name.firstName()   

        var data = {

            firstName: firstName,
            lastName: faker.name.lastName(),
            email: faker.internet.email(firstName),
            password: 'DOJO@mbevtech22',
            phone: '18990008000',
            address: {
                postalcode: '04530001',
                street: 'Rua Renato Paes de Barros 1017',
                city_state: 'São Paulo'
            }
        }

        return data
    }
}
