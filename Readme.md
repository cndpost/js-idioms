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

        
