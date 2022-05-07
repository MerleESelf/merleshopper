const Sequelize = require('sequelize')
const db = require('../db')

const CartDetails = db.define('cartDetail', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = CartDetails
