//백엔드 시작점
const express = require('express') //express 모듈 가져옴
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://lee:ccyyrr201811213@boilerplate.cakys.mongodb.net/<dbname>?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})