exports.install = () => {
  ROUTE('POST /api/test/', consumeAPI)
}

function consumeAPI () {
  const self = this

  RESTBuilder.POST('https://jsonplaceholder.typicode.com/posts/', self.body).callback((err, response) => {
    if (err){
      self.json(err)
    }
    self.json(response)
  })
}