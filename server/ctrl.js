const getBands = (req, res) => {
  const db = req.app.get('db')

  db.get_bands()
  .then(response => {
      res.status(200).send(response)
  })
  .catch(err => {
      res.status(500).send(err)
  })

}
  createBand = (req, res) => {
      const db = req.app.get('db')
      console.log('BODY>>>', req.body)

      db.create_band([req.body.name, req.body.genre])
      .then(response => {
          res.status(200).send(response)
      })
      .catch(err=> {
          res.status(500).send(err)
      })
  }
    

module.exports = {
    getBands,
    createBand
}