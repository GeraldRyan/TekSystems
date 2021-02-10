#!/usr/bin/env node 
// -- This actually works

// /usr/bin/env is a program itself, a commandlet, that takes (or CAN TAKE) an argument, the program to execute. if you pass no argument, it lists the availble data of your program (e.g. all your PATH variables, but more than just PATH). So we're launching python or node in the first line and then we're running the script in the context of that program, same as doing node app.js. Which makes sense because /usr/bin/env node is the same as doing node because it's in the environment PATH. That's where it looks anyway. So it's basically identical. Just putting that script means its automatic, you don't need to type node or python on the command line. And the fact we're not using an absolute path to the file but using a program to launch a program (remember env is a program), means it is portable. Everyone will have different relative paths but the env program should always be a constant. Go figure.    
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});