import express from 'express'
import fs from 'fs'
import url from 'url'
const app = express()
let arr = [["username1", "passs1"], ["username2", "passs2"], ["username3", "passs3"]]
let obj = {}

app.get('/', (req, resp) => resp.send(fs.readFileSync('login.html').toString()))

app.get('/submit', (req, resp) => {
    if (req.query.pass.length === 6){
        obj.uname = req.query.username
        obj.pass = req.query.pass
        resp.redirect('/valid')
    }
})

app.use('/valid', (req, resp, next) => {
    arr.forEach((ele) => {
        if (ele[0] === obj.uname && ele[1] === obj.pass)
            resp.redirect('/sucess')
    })
    resp.redirect('/failure')
})

app.get('/sucess', (req, resp) => {
    resp.send("<strong>Sucessfully Login</strong><br><a href='/'>Get Back</a>")
})

app.get('/failure', (req, resp) => {
    resp.send("<strong>Login Failed</strong><br><a href='/'>Get Back</a>")
})

app.listen(3000, () => console.log('done'))