const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
  item: String,
  qty: Number,
  size: {
    h: Number,
    w: Number,
    uom: String
  },
  status: String
})

InventorySchema.add({date: {type: Date, default: Date.now()}})

module.exports = mongoose.model('Inventory', InventorySchema)