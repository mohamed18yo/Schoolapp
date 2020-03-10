var express = require('express');
var router = express.Router();
const db = require("../models/index")
/* GET home page. */
router.get('/',async function(req, res, next) {
  res.render('Admin/parents',{
    parent: await db.parent.findAll()
  });
});
router.get('/addp', function(req, res, next) {
  res.render('Admin/addParent')
});
router.post('/create', async function (req, res) {
  let parent = await db.parent.create(req.body)
  //res.send(req.body);
  res.redirect('/parent');

})
router.get('/edit/:id',async function(req, res, next) {
  res.render('Admin/editParent',{
    parent: await db.parent.findByPk(req.params.id)
      });
});
router.post('/update', async function(req,res,next){
  await db.parent.update(req.body, { where: { id: req.body.id } })
  res.redirect('/parent');

})
router.get('/delete/:id', async function(req,res,next){
  await db.parent.destroy({where:{id:req.params.id}})
  res.redirect('/parent');
  })
module.exports = router;
