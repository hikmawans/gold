const {Item} = require("../models") 

module.exports = {
    getListItem: async (filters) => {
        let options = {}
        if (typeof filters !== "undefined" || filters !== null) {
            options.where = filters
        }
        let item = []

        
        try{
            item = await Item.findAll(options)
        } catch (e) {
            console.log(e)
        }

        return item
    },

    getItemByID: async (id) => {
        let item = null
        try{
            item =  await Item.findOne({
                where: {id: id}
            })
        } catch (e) {
            console.log(e)
        }

        return item
    }

}