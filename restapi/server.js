      var express = require('express');
      var app = express();
      var fs = require("fs");

      app.get('/listUsers', function (req, res) {
          fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
                 console.log( data );
                 res.end( data );
                });
      })

      //app.use(express.json())

      var bodyParser = require('body-parser')
      
      app.use(bodyParser.urlencoded({extended: true }));
      app.use(bodyParser.json());

      app.post('/addUser', function (req, res) {
        // First read existing users.
        fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
            data = JSON.parse( data );
            data["user"+req.body.id] = req.body;
            console.log(req.body.id);
            console.log( data );
            res.end( JSON.stringify(data));
        });
      })

      app.get('/:id', function (req, res) {
        // First read existing users.
        fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
            var users = JSON.parse( data );
            var user = users["user" + req.params.id] 
            console.log( user );
            res.end( JSON.stringify(user));
        });
      })

      app.delete('/deleteUser', function (req, res) {
        // First read existing users.
        fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
            data = JSON.parse( data );
            delete data["user"+req.body.id];
            console.log(req.body);
            console.log( data );
            res.end( JSON.stringify(data));
        });
      })

      var server = app.listen(8081, function () {
         var host = server.address().address
         var port = server.address().port
         console.log("Example app listening at http://%s:%s", host, port)
      })

