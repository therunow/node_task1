var express = require('express');
const adminController = require("../controllers/adminController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

<<<<<<< HEAD
// комментарий из ветки моделей
=======
// контроллеры для админ-панели
>>>>>>> 9109981a93410ebbf49cdd36665497101267b646
router.get('/', adminController.getArticleAll);
router.get('/:idArticle', adminController.getArticle)
router.post('/addArticle', urlencodedParser, adminController.addArticle);
router.post('/editArticle', urlencodedParser, adminController.editArticle);
router.post('/deleteArticle', adminController.deleteArticle);

module.exports = router;