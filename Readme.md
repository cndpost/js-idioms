Javascript learning notes

1. Debugging tools

   Browser comes with following debugging tools:



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

                   import REACT from ./react;
                   import REACT-DOM from ./react-dom;
          
       Javascript functions and variables are local to the file it is defined. Not accesible to other files
       unless it is explicitly exported from the source file, and explicitly imported from the target file.

       If a HTML files contains several javascript file like above 2.1). They are accessible by using the "this."
       prefix which is the parent object representing the parent page which includes all those script files. 

      b) HTML file include javascript modules which has explicitly exported funsctions or variables:

             <script type="module" src="path/module1.js" />

         this path is relative to the HTML on the web page and must be served from web server. It does not work if the 
         HTML and this javscript module file is downloaded locally to the browsers machine. 

 