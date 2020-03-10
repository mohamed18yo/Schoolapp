var express = require('express');
var router = express.Router();
const db = require("../models/index");

/* GET home page. */
router.get('/',async function(req, res, next) {
  res.render('Admin/teachers',{
    teacher: await db.teacher.findAll()
  });
});
router.get('/addt', function(req, res, next) {
  res.render('Admin/addTeacher');
});
router.post('/create', async function (req, res) {
  let teacher = await db.teacher.create(req.body)
  //res.send(req.body);
  res.redirect('/teacher');

})

 router.get('/edit/:id',async function(req, res, next) {
   res.render('Admin/editTeacher',{
     teacher: await db.teacher.findByPk(req.params.id)
       });
 });
 router.post('/update', async function(req,res,next){
       await db.teacher.update(req.body, { where: { id: req.body.id } })
       res.redirect('/teacher');
})

 router.get('/delete/:id', async function(req,res,next){
 await db.teacher.destroy({where:{id:req.params.id}})
 res.redirect('/teacher');
 })
module.exports = router;
