const {models} = require ("./index")


module.exports = {
    createAddress:async (body) => {
        try {
            return await models.Address.create({...body})
        }catch(error) { 
            return error
        }
    }
}