var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Películas para todos' });
});
router.get('/favoritos', function(req, res, next) {
  res.render('favoritas', { title: 'Películas favoritas' });
});
router.get('/agregar', function(req, res, next) {
  res.render('formulario', { title: 'Agregar película' });
});

module.exports = router;
