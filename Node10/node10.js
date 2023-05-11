import express from 'express'
import fs from 'fs'
import * as mod from '../Node2/mymodule.mjs'
const app = express()

app.get('/', (req, resp) => resp.send(fs.readFileSync('./index.html').toString()))

app.get('/send-data', (req, resp) => resp.send(`<strong>${(mod.myprime(parseInt(req.query.num))?"Prime Number":"Not a Prime Number")}</strong><br><a href='/'>Go Back<a>`))

app.listen(3000,() => console.log("done"))