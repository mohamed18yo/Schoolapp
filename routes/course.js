var express = require('express');
var router = express.Router();
const db = require("../models/index");
router.get('/', async function(req, res, next) {
  res.render('Admin/courses',{
    course: await db.course.findAll()
  }
  );                              
});

 router.get('/addc', function(req, res, next) {
   res.render('Admin/addCourse');
 });

 router.post('/create', async function (req, res, next) {
   let course = await db.course.create(req.body)
   //res.send(req.body);
   res.redirect('/course');

 });

router.get('/edit/:id',async function(req, res, next) {
  res.render('Admin/editCourse',{
    course: await db.course.findByPk(req.params.id)
      });
});
router.post('/update', async function(req,res,next){
  await db.course.update(req.body, { where: { id: req.body.id } })
  res.redirect('/course');

})
 router.get('/show', function(req, res, next) {
   res.render('course');
 });
router.get('/delete/:id', async function(req,res,next){
  await db.course.destroy({where:{id:req.params.id}})
  res.redirect('/course');
  })



 

 


module.exports = router;
