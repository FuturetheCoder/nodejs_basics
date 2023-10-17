const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server =  http.createServer((req, res) => {
// console.log(req.method, req.url);

//Lodash

const num = _.random(0, 20);
console.log(num);

const greet = _.once(() => {
  console.log('hello');

});
greet();
// // set header content type 
 res.setHeader('Content-Type', 'text/html');
// res.write('<p> Hello, Ninjas here we come </p>');
// res.write('<p> Hello, Ninjas here we come 2 </p>');
// res.end();

//Routing Process with Status Code 

let path = './views/';
 switch (req.url) {
 case '/' : 
   path += 'index.html';
   res.statusCode = 200;
      break;
 case '/about' : 
   path += 'about.html';
   res.statusCode = 200;
   break;
   //this case below redirect user to '/about' route
 case '/about-you' : 
   res.statusCode = 301;
   res.setHeader('Location', '/about')
   res.end();
   break;  
 default :
   path += '404.html';
   res.statusCode = 404;
   break 
 }
// send an html file 
fs.readFile(path, (err, data)=> {
if (err) {
    console.log(err);
    res.end();
}else{
    res.write(data);
    res.end();
}
});
}
);

server.listen(
    7000, 'localhost', ()=> {
        console.log('listening for request on port 7000 ');
    }
);

//NOTE: Always remember to end your response "res.end()"

//NOTE: Always remember to do "npm install" to install all node modules from a project cloned or shared 