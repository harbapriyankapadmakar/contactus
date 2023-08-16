const path=require('path');
const express = require('express');
const rootDir=require('../util/path');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','add-product.html'));
    
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','contactus.html'));
    
});

// /admin/add-product => POST
router.post('/contactus', (req, res, next) => {
  // console.log<(h1>Form sucessfully filled</h1>)
  console.log(req.body);
  res.redirect('/success');
});
router.get('/success', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','success.html'));
    
});

// /admin/add-product => POST
router.post('/success', (req, res, next) => {
  // console.log<(h1>Form sucessfully filled</h1>)
  console.log(req.body);
  res.redirect('/');
});
module.exports = router;