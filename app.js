const http=require('http')
const fs=require('fs')
const url=require('url')
http.createServer((req,res)=>{
        fs.readFile('firstDemo.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data)
            return res.end()
        })
}).listen(8000);
