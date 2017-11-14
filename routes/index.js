var express = require('express')
var router = express.Router()
var db = require('../db/connect')

router.use(function (req, res, next) {
  next()
})

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('index', { title: 'Express', nome: (req.user ? req.user.nome_completo : '') })
})

module.exports = router
