// const path = require("path")
// console.log(path.basename('C:\\temp\\myfile.html'))

// const fs = require("fs")

// fs.readFile('calc.js','utf8',(err,val)=>{
//     fs.writeFile('new.js',val,()=>{
//         console.log("done")
//     }) //parallely
// }) //parallely

// import url from 'url'

// const myURL = new URL(`https://example.org/home?name=shree&surname=bandal`);
// console.log(myURL.origin)
// console.log(myURL.searchParams.get('name'))
// console.log(myURL.searchParams.get('surname'))

// import { EventEmitter } from 'node:events' // explore more to create user define event 

import http from 'http'
import fs from 'fs'

http.createServer((req, resp) => {
    resp.setHeader('content-Type', 'text/html')
    const data = fs.readFileSync('./index.html')
    if(req.method==="POST") console.log(req.type)
    resp.end(data.toString())
    // const myURL = new URL("http://localhost:3000"+req.url);
    // console.log(myURL.origin)
    // console.log(myURL.searchParams.get('name'))
    // console.log(myURL.searchParams.get('surname'))
}).listen(3000, () => {
    console.log("done")
})




