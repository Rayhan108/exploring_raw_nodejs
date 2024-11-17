const http = require('http');
const fs = require('fs')
//creating a server using raw nodejs
const server = http.createServer()
//listener
server.on('request',(req,res)=>{
   if(req.url === '/read-file'&& req.method === 'GET');
   //steaming file reading
   const readableSteam = fs.createReadStream(process.cwd() +'/module7/text/read.txt');
   readableSteam.on('data',(buffer)=>{
    res.statusCode=200;
    res.write(buffer)
   })
   readableSteam.on('end',()=>{
    res.statusCode=200;
       res.end('The streming is over!')
   })
   readableSteam.on('error',(error)=>{
    console.log(error);
    res.statusCode=500;
       res.end('something went wrong!')
   })
})
server.listen(5000,()=>{
    console.log(`server is listening on port 5000`);
})