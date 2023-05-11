const fs = require('fs')
const http = require('http')
const url = require('url')
const c = require('./circle.js')

http.createServer((req, resp) => {
    resp.writeHeader(200, { "content-type": "text/html" })
    const link = url.parse(req.url, true)
    switch (link.pathname) {
        case "/":
            resp.write(fs.readFileSync('index.html').toString())
            break
        case "/submit":
            let num = parseInt(link.query.num)
            if (link.query.cal === "area")
                resp.write(c.area(num).toString())
            else
                resp.write(c.circumference(num).toString())
            resp.write("<br><a href='/'>Go Back</a>")
            break
        default:
            resp.write("Not a Valid Page")
            resp.write("<br><a href='/'>Go Back</a>")
            break
    }
    resp.end()
}).listen(7000, () => { console.log("working...") })