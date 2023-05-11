import http from 'http'
import fs from 'fs'
import url from 'url'
import * as n2 from './mymodule.mjs'

http.createServer((req, resp) => {
    resp.setHeader('content-Type', 'text/html')
    const data = fs.readFileSync('./index.html')
    const obj = url.parse(req.url, true)
    if (obj.pathname === '/')
        resp.end(data.toString())
    if (obj.pathname === '/send-data') {
        let num = parseInt(obj.query.num)
        if (num < 5)
            resp.write(`<strong>factoril of number is : ${n2.factorial(num)}</strong>`)
        else if (num < 10)
            n2.printable(num).forEach(element => {
                resp.write(element + "</br>")
            })
        else
            resp.write("<strong>" + ((n2.myprime(num)) ? "Prime Number" : "Not a Prime Number") + "</strong>")
        resp.end("</br><a href='/'>go back</a>")
    }
}).listen(3000, () => {
    console.log("done")
})



