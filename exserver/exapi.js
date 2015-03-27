// initial setup
var express = require('express');
var app = express();

// set the port
var port = 3000;

// get an instance of the Express Router
var router = express.Router();

// middleware to use for all requests (validation can be done here)
router.use(function(req, res, next) {
    console.log('exapi is running.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to exapi!' });
});

// on routes that end in /details
router.route('/details')
    .get(function(req, res) {
        var retval = req.query.jsonp + "({'name': 'John Doe', 'street': '1234 West Palm Beach', 'phone': '555 1234567', 'zip': '12345'});";
        res.send(retval);
    })

// all of the routes wil be prefixed with /api
app.use('/api', router);

// start the server
app.listen(port);
console.log('exapi is listening on port %s', port);
