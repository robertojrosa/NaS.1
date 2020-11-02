module.exports = () => {
    return function (req, res, next) {
        console.log(req.query)
      next()
    }
  }