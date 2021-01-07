//백엔드 시작점
const express = require('express') //express 모듈 가져옴
const app = express()
const port = 5000
const bodyParser = require('body-parser')

const config = require('./config/key')

const { User } = require('./models/User')

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register',(req, res) => {
  //회원 가입에 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣는다.
  const user = new User(req.body)

  user.save((err, userInfo)=> {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})