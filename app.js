require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
app.use('/uploads', express.static('uploads'));

app.use(
  cors({
    origin: "*", //origin 확인 필요
    credentials: true,
    optionsSuccessStatus: 200,
    exposedHeaders: ["authorization"], //클라이언트가 응답에서 액세스할 수 있는 헤더 목록
  })
);

const PORT = process.env.SERVER_PORT;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // x-www-form-urlencoded형태의 데이터 해설
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/', routes);

app.get("/", (req, res) => {
    res.send("connected");
  });

app.listen(PORT, () => {
    console.log(PORT, "포트 번호로 서버가 실행되었습니다");
  });
  
module.exports = app;