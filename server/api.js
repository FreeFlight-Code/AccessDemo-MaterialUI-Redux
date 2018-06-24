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
                res.status(200).send('contact created with id ' + data[0].id)
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
    addJob: function (req, res, next){
        let db = req.app.get('db');
        let {
            estimator_id,
            date,
            estimate_amount,
            company_id,
            city
        } = req.body;
        db.addJob([
            estimator_id,
            date,
            estimate_amount,
            company_id,
            city
        ])
        .then(data=>{
            console.log('job created');
            res.status(200).send('job created with id ' + data[0].id);
        })
        .catch(err=>res.status(404).send(err))
    },
    editJob: function (req, res, next){
        let db = req.app.get('db');
        let id = req.params.id;
        let {
            estimator_id,
            date,
            estimate_amount,
            company_id,
            city
        } = req.body;
        db.editJob([
            id,
            estimator_id,
            date,
            estimate_amount,
            company_id,
            city
        ]).then(data=>{
            res.status(200).send(true)
        })
    },
    deleteJob: function (req, res, next){
        let db = req.app.get('db');
        let id = req.params.id;
        db.deleteJob(id).then(data=>{
            res.status(200).send(true)
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
    addCompany: function (req, res, next){
        let db = req.app.get('db');
        let {
            name,
            phone,
            address,
            url,
            logo,
            contact_id
        } = req.body;
        db.addCompany([
            name,
            phone,
            address,
            url,
            logo,
            contact_id
        ])
        .then(data=>{
            console.log('company created');
            res.status(200).send('company created with id ' + data[0].id);
        })
        .catch(err=>res.status(404).send(err))
    },
    editCompany: function (req, res, next){
        let db = req.app.get('db');
        let id = req.params.id;
        let {
            name,
            phone,
            address,
            url,
            logo,
            contact_id
        } = req.body;
        db.editCompany([
            id,
            name,
            phone,
            address,
            url,
            logo,
            contact_id
        ]).then(data=>{
            res.status(200).send(true)
        })
    },
    deleteCompany: function (req, res, next){
        let db = req.app.get('db');
        let id = req.params.id;
        db.deleteCompany(id).then(data=>{
            res.status(200).send(true)
        })
    },
}