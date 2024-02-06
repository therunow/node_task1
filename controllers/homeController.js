const Models = require("../models/articleModel.js");
exports.getArticleAll = async function (req, res) {
    let m = await Models.getAll();
    res.render('home', { data: m });

<<<<<<< HEAD
};
=======
};
>>>>>>> 022eefc213d7514406cbcc0feaa3eb2edb160bc8
