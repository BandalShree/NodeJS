const fs = require('fs')

fs.readFile('mydata.txt',(err,val)=>{
    if(!err){
        val = String(val).split(/\r?\n/)
        val.forEach(line =>  {
            console.log(`File 1 Line ${val.indexOf(line)+1}: ${line.split(/ /).length}`);
          });
    }
})

fs.readFile('myfile.data',(err,val)=>{
    if(!err){
        val = String(val).split(/\r?\n/)
        val.forEach(line =>  {
            console.log(`File 2 Line ${val.indexOf(line)+1}: ${line.split(/ /).length}`);
          });
    }
})