module.exports = {
    //read all products
    getData: function (req, res, next){
        let db = req.app.get('db')
        db.getData().then(data=>{
            res.status(200).send(data)
        })
    }
}