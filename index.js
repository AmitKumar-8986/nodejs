const http = require('http');

http.createServer((req, resp)=>{
    resp.write("<h1>Hello Amit</h1>");
    resp.end();
}).listen(8085);
