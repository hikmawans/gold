module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("item", [
            {
                name: "Batik",
                category: "baju",
                price: 500000,
                stock: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Kaos",
                category: "baju",
                price: 35000,
                stock: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Jeans",
                category: "celana",
                price: 1500000,
                stock: 50,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "pangsi",
                category: "celana",
                price: 150000,
                stock: 40,
                createdAt: new Date(),
                updatedAt: new Date()
            
            }
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Item", null, {})
    }
}