var express = require('express');
var router = express.Router();
const db = require("../models/index")
/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('Admin/students', {
    student: await db.student.findAll()
  });
});
router.get('/adds', function (req, res, next) {
  res.render('Admin/addStudent');
});
router.post('/create', async function (req, res) {
  let student = await db.student.create(req.body)
  //res.send(req.body);
  res.redirect('/student');

})
router.get('/edit/:id', async function (req, res, next) {
  res.render('Admin/editStudent',{
student: await db.student.findByPk(req.params.id)
  });
});
router.post('/update', async function(req,res,next){
  await db.student.update(req.body, { where: { id: req.body.id } })
  res.redirect('/student');
})
router.get('/delete/:id', async function(req,res,next){
await db.student.destroy({where:{id:req.params.id}})
res.redirect('/student');
})
module.exports = router;
