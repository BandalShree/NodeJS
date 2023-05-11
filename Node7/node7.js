const fs = require('fs')
const http = require('http')

let temp = []

fs.readFile('mydata.txt', (err, val) => {
    if (!err) {
        val = String(val).split(/\r?\n/)
        val.forEach(line => {
            if (parseInt(line.split(/\r?\n/)[0]))
                temp.push(line)
        });
    }
})

http.createServer((req, resp) => {
    resp.writeHeader(200,{"content-type":"text/html"})
    temp.forEach((ele)=>{
        resp.write(`<strong>${ele}</strong><br>`)
    })
    resp.end()
}).listen(7000, () => {
    console.log("working...")
})