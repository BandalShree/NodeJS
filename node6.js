const http = require("http")

http.createServer((req,resp)=>{
    resp.end("Welcome to nodejs msg")
}).listen(5000,()=>{
    console.log("working...")
})