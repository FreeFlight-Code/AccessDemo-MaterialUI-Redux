module.exports = {
    //test jobs
    getData: function (req, res, next){
        let db = req.app.get('db')
        db.getData().then(data=>{
            res.status(200).send(data)
        })
    },
    getPersons: function (req, res, next){
        let db = req.app.get('db')
        db.getPersons().then(data=>{
            res.status(200).send(data)
        })
    },
    getSingleUser: function (req, res, next){
        let db = req.app.get('db');
        let id = req.params.id;
        db.getSingleUser(id).then(data=>{
            if(data.length>0)res.status(200).send(data)
            else res.status(404).send('no data found')
        })
    },
    addUser: function (req, res, next){
        let db = req.app.get('db');
        let {
            user_name,
            email,
            phone,
            img,
            auth_id,
            auth
        } = req.body;

        if (auth==='administrator'){
            db.addAdministrator([user_name, email, phone, img, auth_id, auth]).then(data=>{
                res.status(200).send('admin created')
            })
            .catch(err=>console.log(err))
        }
         else if (auth==='estimator'){
            db.addEstimator([user_name, email, phone, img, auth_id, auth])
            .then(data=>{
                res.status(200).send('estimator created')
            })
            .catch(err=>console.log(err))

        }
        else {
            db.addContact([user_name, email, phone, img, auth_id]).then(data=>{
                res.status(200).send('contact created')
            })
            .catch(err=>console.log(err))
        }
    },
    editUser: function (req, res, next){
        let db = req.app.get('db');
        let id = req.params.id;
        let {
            user_name,
            email,
            phone,
            img,
            auth_id,
            auth
        } = req.body;
        db.editUser([id, user_name, email, phone, img, auth_id, auth]).then(data=>{
            res.status(200).send(true)
        })
    },
    deleteUser: function (req, res, next){
        let db = req.app.get('db');
        let id = req.params.id;
        db.deleteUser(id).then(data=>{
            res.status(200).send(true)
        })
    },
    getJobs: function (req, res, next){
        let db = req.app.get('db')
        db.getJobs().then(data=>{
            res.status(200).send(data)
        })
    },
    getSingleJob: function (req, res, next){
        console.log(req)
        let db = req.app.get('db');
        let id = req.params.id;
        db.getSingleJob(id).then(data=>{
            res.status(200).send(data)
        })
    },
    getCompanies: function (req, res, next){
        let db = req.app.get('db')
        db.getCompanies().then(data=>{
            res.status(200).send(data)
        })
    },
    getSingleCompany: function (req, res, next){
        let db = req.app.get('db');
        let id = req.params.id;
        db.getSingleCompany(id).then(data=>{
            res.status(200).send(data)
        })
    },
}