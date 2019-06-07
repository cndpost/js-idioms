Javascript learning notes

1. Debugging tools

   1.1 Browser comes with following debugging tools:
   
   Ctrl-Shift-I to see the console output using following functions:

   console.group()
    console.log()
    console.warn()
    console.error()
    console.info()
   console.groupEnd()

  1.2 Simple dialog can be written using:
     alert()

  1.3 More complicated code can be traced using breakpoints
    

2. Include, import and reference to other files locally or from internet

  2.1) HTML can have multiple javascript files included using multiple lines like below:

           <script src="path/javascript1.js" />
           <script src="path/javascript2.js" />
           <script src="path/javascript3.js" />

       That is the only way for HTML file to include local javascript from the browser's local machine. For javascripts 
       served from web servers. there are more ways to include modules.

  2.2) Javascript file served by web servers can include, import or refer to other javascript files using following
       syntax but this is only allowed if all the files are local to and served by web server. It is not
       allowed (due to security protection) to include, import or refer to other javascript files in the
       browser client local machine. If any javascript file used these syntax to include, import or refer to other
       javscript files, it cannot be used locally and directly by a browser, it has to be served from a web 
       server. This is called CORS ( cross origin resource sharing ) and the browser security mechanism prevents
       it to be used locally and has to be served by the web server.

       a) Javascript import modules from another javascript file, such as REACT:

                   import REACT from "./react";
                   import REACT-DOM from "./react-dom";
          
       Javascript functions and variables are local to the file it is defined. Not accesible to other files
       unless it is explicitly exported from the source file, and explicitly imported from the target file.

       If a HTML files contains several javascript file like above 2.1). Functions defined in different files are muaccessible 
       only if all scripts are defined in the <body> section instead of in the <header> section of the hosting HTML file. Or
       you have to use jquery prefix which is the parent object representing the parent page which includes all those script files. 

      b) HTML file include javascript modules which has explicitly exported funsctions or variables:

             <script type="module" src="path/module1.js" />

         this path is relative to the HTML on the web page and must be served from web server. It does not work if the 
         HTML and this javscript module file is downloaded locally to the browsers machine. 

 3. Generic steps to create reusable react modules for an application:

     3.1) create a login module:
       npx create-react-app login
       cd login
       npm start
       npm run build

       deploy to production web server for hosting

     3.2) create a database create/read/update/delete module:
       npx create-react-app database

     3.3) write a view model using HTML/CSS/Javascript events handlers

     3.4) write a controller module for all those events handlers  

     3.5) create a project at firebase as login back end and database back end



4. Quick cheetsheet for Javascript syntax:

   4.1 Javascript object natively has a value of type like {"key1":"value1",...,"key2":"value2"}

   4.2 Javascript object need a JSON.parser() to convert a string value to object:

        var obj = JSON.parser('{"key1":"value1",...,"key2":"value2"});
   
   4.3 The reverse is object need a JSON.stringfy() function to serialize to a string:  JSON.stringfy(obj) => '{"key1":"value1",...,"key2":"value2"}
   
   4.4 key names can be used to access child element. But key as string need bracket [] to be used to access child element:

        e.g.   var obj = {"key1":"value1"},
        we can access as obj.key1 which has a string value of "value1", or we can have the same string value at obj["key1"] 


5. Javascript built-in functions. Frequently used ones:

    date time:
    var datetime = new Date();

    math functions:

    Math.max(); Math.min(); Math.round(); Math.random()  (it gives float value between 0 and 1); 
    Math.ceil(); Math.floor()


6. Making rest API calls from Javascript. 

   This is accomplished through a class called XMLHttpRequest(). The request.open() pass in an URL and a GET/POST method, and the
   response is in this.response:

      var request = new XMLHttpRequest();
      var URL = "https://api.google.com";
      request.open("GET", URL, true);

      //prepare the call back handler function
      request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        data.forEach(movie => {
          // Log each movie's title
          console.log(movie.title)
          })
      }

      // Send request
      request.send()

7. Making SQL server connection calls from Javascript.

   This is possible, but a security risk due to connection string is exposed:

    Example as follws, it uses ActiveXObject("adodb.connection") and  ActiveXObject("adodb.recordset")  :

    <script>
      var objConnection = new ActiveXObject("adodb.connection");
      var strConn = "driver={sql server};server=QITBLRQIPL030;database=adventureworks;uid=sa;password=12345";
      objConnection.Open(strConn);
      var rs = new ActiveXObject("ADODB.Recordset");
      var strQuery = "SELECT * FROM  Person.Address";
      rs.Open(strQuery, objConnection);
      rs.MoveFirst();
      while (!rs.EOF) {
          document.write(rs.fields(0) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
          document.write(rs.fields(1) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
          document.write(rs.fields(2) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
          document.write(rs.fields(3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
          document.write(rs.fields(4) + "<br/>");
          rs.movenext();
      }
    </script>

8. Making SQL server connection calls from Javascript at Node.js server side

    This needs to install mssql module for npm:

      npm install mssql

    then you can use following sample code server.js to make the SQL connection and query calls and send the
    results back to front using the express routing.  The call URL would be http://localhost:5000

     Server.js

        var express = require('express');
        var app = express();

        app.get('/', function (req, res) {
          
            var sql = require("mssql");

            // config for your database
            var config = {
                user: 'sa',
                password: 'mypassword',
                server: 'localhost', 
                database: 'SchoolDB' 
            };

            // connect to your database
            sql.connect(config, function (err) {
            
                if (err) console.log(err);

                // create Request object
                var request = new sql.Request();
                  
                // query to the database and get the records
                request.query('select * from Student', function (err, recordset) {
                    
                    if (err) console.log(err)

                    // send records as a response
                    res.send(recordset);
                    
                });
            });
        });

        var server = app.listen(5000, function () {
            console.log('Server is running..');
        });



      