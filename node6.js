const http = require("http") // remove type = module from package

http.createServer((req,resp)=>{
    resp.end("Welcome to nodejs msg")
}).listen(5000,()=>{
    console.log("working...")
})