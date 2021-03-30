const db = require("../Models");
module.exports = {
    create: function(req,res){
        db.Book.create(req.body).then(dbBook => res.json(dbBook))
    }
}