const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const listener=[];

const server = http.createServer(function(req, res){
  res.writeHeadr(200,{
    connection: 'keep-alive',
  'Content-Type': 'text/event-stream',
  'Cache-Control':'no-cache'
});
listener.push(res);
});
function order(){
}