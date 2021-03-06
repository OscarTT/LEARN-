var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var Page = require('./models').Page

app.use(express.static('public'));
app.use(expressValidator());
app.use(bodyParser.json());
app.use(cors());




app.get('/', function (req, res) {
  res.json({message: 'API Example'})
})
// List of pages
app.get('/pages', function (req, res) {
    Page.findAll().then( (pages) => {
        res.json({pages:pages})
    })
})
// Single page
app.get('/pages/:id', function (req, res) {
    Page.findAll().then( (pages) => {
        res.json({pages:pages})
    })
})
// Create page
app.post('/pages', (req, res) => {

  // We setup a validation check for 'name, subject, content'
  req.checkBody('name', 'Is required').notEmpty()
  req.checkBody('subject', 'Is required').notEmpty()
  req.checkBody('content', 'Is required').notEmpty()
  // Now we can run our validations
  req.getValidationResult()
    .then((validationErrors) => {

      // If there are no errors, go ahead and create page
      if(validationErrors.isEmpty()) {
        Page.create({
          name: req.body.name,
          subject: req.body.subject,
          content: req.body.content
        }).then((page) => {
          res.status(201)
          res.json({page: page})
        })
      }else{

        // Uh ohh,  there were validation issues.  Report them back to the user.
        res.status(400)
        res.json({errors: {validations: validationErrors.array()}})
    }
  })
})
// Update page
app.put('/pages/:id', (req, res) => {
    // all params come in as strings

    Page.update({
        name: req.body.name,
        subject: req.body.subject,
        content: req.body.content
    },{
        where: {
            id: parseInt(req.params.id)
        }
    }).then(function (result) {
        res.json(result)
    })
})
// Delete page
app.delete('/pages/:id', (req, res) => {
    Page.destroy({
        where: {
            id: parseInt(req.params.id)
        }
    }).then(function (result) {
        res.json(result)
    })
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})

module.exports = app
