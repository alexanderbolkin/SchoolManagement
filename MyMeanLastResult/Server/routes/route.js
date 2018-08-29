const express = require('express');
const router = express.Router();

const Data = require('../models/datas');
const School = require('../models/schools');
const User = require('../models/users');

            //========================user management=========================================//
//getting users
router.get('/users',(req,res,next)=>{
    User.find(function(err,users)
    {
        res.json(users);
    })
});

//create users
router.post('/user',(req,res,next)=>
{
    let newUser = new User({
        username: req.body.username,
        email:req.body.email,
        password:req.body.password,
        // photo:req.body.photo
    })
    newUser.save((err,user)=>{
        if(err)
        {
            res.json({msg:'Failed to add School'});
        }
        else{
            res.json({msg:'User added successfully'});
        }
    });
});

//edit user
router.get('/user/edit/:id',(req,res,next)=>
{
    
    let id = req.params.id;
    User.findById(id,function(err,user)
    {
        res.json(user);
    });
})
//update user
router.post('/user/update/:id',(req,res,next)=>
{
    let id = req.params.id;
    User.findById(id,function(err,user)
    {
        if(!user)
            return next(new Error('Could not load Document'));
        else
        {
            user.username = req.body.username;
            user.email = req.body.email;
            user.save().then(Data => 
            {
                res.json('successly update');
            })
            .catch(err => {
                        res.status(400).send("unable to update the database");
          });

        }
    });

});

//delete user
router.delete('/user/:id',(req,res,next)=>
{
    User.remove({_id:req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);;
        }
    });
});

//========================================school====================================//

router.get('/schools',(req,res,next)=>{
    //res.send('Retreving the schoolDatas list');
    School.find(function(err,schools)
    {
        res.json(schools);
    })
    
});

//Add school
router.post('/school',(req,res,next)=>
{
    let newSchool = new School({
        school_name: req.body.school_name
    })
    newSchool.save((err,school)=>{
        if(err)
        {
            res.json({msg:'Failed to add School'});
        }
        else{
            res.json({msg:'School added successfully'});
        }
    });
});

//===========================schooldatas=============================///

//retrieving schoolDatas
router.get('/datas',(req,res,next)=>
{
    Data.find(function(err,datas)
    {
        res.json(datas);
    })
});



//add schoolData
router.post('/data',(req,res,next) => 
{
    let newData = new Data({
        school_id: req.body.school_id,
        year: req.body.year,
        month: req.body.month,
        week: req.body.week,
        elect_eur: req.body.elect_eur,
        elect_kwh: req.body.elect_kwh,
        heating_eur: req.body.heating_eur,
        heating_kwh: req.body.heating_kwh,
        water_eur: req.body.water_eur,
        water_litre: req.body.water_litre
    });
    newData.save((err,data)=>{
        if(err)
        {
            res.json({msg:'Failed to add Data'});
        }
        else{
            res.json({msg:'Data added successfully'});
        }
    });
});

//router.put('/:id/update', product_controller.product_update);

// exports.product_update = function (req, res) {
//     Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) 
//     {
//         if (err) return next(err);
//         res.send('Product udpated.');
//     });
// };

//edit schoolData
router.get('/data/edit/:id',(req,res,next)=>
{
    let id = req.params.id;
    Data.findById(id,function(err,data){
        res.json(data);
    });
})
//update schoolData
router.post('/data/update/:id',(req,res,next)=>
{
    let id = req.params.id;
    Data.findById(id,function(err,data){
        if(!data)
            return next(new Error('Could not load Document'));
        else{
            data.school_id = req.body.school_id;
            data.year = req.body.year;
            data.month = req.body.month;
            data.week = req.body.week;
            data.elect_eur = req.body.elect_eur;
            data.elect_kwh = req.body.elect_kwh;
            data.heating_eur = req.body.heating_eur;
            data.heating_kwh = req.body.heating_kwh;
            data.water_eur = req.body.water_eur;
            data.water_litre = req.body.water_litre;
            
            data.save().then(data => {
                        res.json('successly update');
            })
            .catch(err => {
                res.status(400).send("unable to update the database");
          });

        }
    });

});



//delete schooldata
router.delete('/data/:id',(req,res,next)=>
{
    Data.remove({_id:req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);;
        }
    });
});
module.exports =  router;