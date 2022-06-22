const express = require('express')
const fs = require('fs')
const { getDb } = require('./db')
const app = express()

// 解析application/json
app.use(express.json())
// 解析application/x-www-form-urlencoded
app.use(express.urlencoded())
// app.get('/',(req,res)=>{
//     fs.readFile('./express/data.json', 'utf8', (err,data)=>{
//         if(err){
//             return res.status(500).json({
//                 error:err.message
//             })
//         }
//         console.log(data)
//         res.status(200).json(JSON.parse(data))
//     })
    
// })
app.get('/', async(req,res)=>{
    try {
        const db = await getDb()
        res.status(200).send(db)
    } catch (err) {
        res.status(200).json({
            error: err.message
        })
    }
})

app.get('/list/:id',(req,res)=>{
    // console.log(req)
    // console.log(res)
    // res.end('get请求')
    // res.send('get请求')
    res.status(200).send({
        name:'wulitian',
        sex:'男'
    })
})

app.post('/list',(req,res)=>{
    console.log(req)
    res.send('post请求')
})

app.put('/list/:id',(req,res)=>{
    res.send('put请求')
})

app.delete('/list/:id',(req,res)=>{
    res.send('delete请求')
})

app.listen(3000,()=>{
    console.log('server-3000');
})