const inventoryController = require('./inventory.controller')

exports.install = () => {
  CORS()

  ROUTE('GET /api/inventory/', async function (){
    this.json(await inventoryController.list())
  });
}
