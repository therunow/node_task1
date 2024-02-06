const Models = require("../models/articleModel.js");
exports.addArticle = function (request, response){
    response.send("Добавление статьи");
};
exports.getArticleAll = async function(req, res){
    let m=await Models.getAll();
    res.render('articles', {data:m});
    
};

exports.getArticle = async function(req, res){
    console.log(req.params);
    let m=await Models.getOne(req.params.idArticle);
    res.render('articleShow', {data:m});
    
<<<<<<< HEAD
};

=======
};
>>>>>>> 022eefc213d7514406cbcc0feaa3eb2edb160bc8
