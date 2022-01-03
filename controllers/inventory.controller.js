const Inventory = require('../models/inventory.model')

const list = async () => {
  try {
    return await Inventory.find({status: "C"}).exec()
  } catch (err) {
    return err.message
  }

  //return inventoryList
}

module.exports = {list}