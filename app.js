const path=require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/admin',contactusRoutes);
app.use(successRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.use('/admin/success', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','success.html'));
      
  });
  
// app.use((req, res, next) => {
//     res.send('/success').sendFile(path.join(__dirname,'views','success.html'));
// });

app.listen(3000);