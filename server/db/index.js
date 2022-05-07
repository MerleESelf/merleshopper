const db = require('./db')

const User = require('./models/user')
const Plant = require('./models/plant')
const Order = require('./models/order')
const cartDetail = require('./models/cartDetail')

// Associations
User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(cartDetail)
cartDetail.belongsTo(Order)

Plant.hasMany(cartDetail)
cartDetail.belongsTo(Plant)

module.exports = {
  db,
  models: {
    User,
    Plant,
    Order,
    cartDetail
  }
}
