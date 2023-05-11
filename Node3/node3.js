const m1 = require('./circle') // remove type = module from package
const m2 = require('./recatngle')
const m3 = require('./trinagle')
const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, resp) => {

    let q = url.parse(req.url, true)
    resp.writeHeader(200, { "content-type": "text/html" })

    switch (q.pathname) {
        case "/home":
            var rs = fs.createReadStream("./index.html")
            rs.pipe(resp)
            break;

        case "/submit-data":
            let num1 = parseInt(q.query.num1)
            let num2 = parseInt(q.query.num2)
            let num3 = parseInt(q.query.num3)

            if (q.query.circle === 'circle') {
                console.log('dfdsfddd')

                resp.write("circle Area" + m1.calArea(num1)+"<br>")
                resp.write("circle Circumference" + m1.calCircumference(num1)+"<br>")
                resp.write("circle Diameter" + m1.calDiameter(num1)+"<br>")
                resp.end()
            }else if(q.query.rectangle==='rectangle'){
                resp.write("Recatngle Area"+m2.calArea(num1,num2)+"<br>")
                resp.write("Recatngle perimeter"+m2.calPerimeter(num1,num2)+"<br>")
                resp.end()

            }else if(q.query.triangle==='triangle'){
                resp.write("Triangle perimeter"+m3.calPerimeter(num1,num2,num3)+"<br>")
                resp.write("Triangle is Equilateral "+m3.isEquilateral(num1,num2,num3)+"<br>")
                resp.end()

            }
            console.log(q.query)
            break;
        default:
            resp.write("404 Not found")
            resp.end()
            break;
    }

    // 

    

   

}).listen(3001, () => {
    console.log("server running at 3001")
})



