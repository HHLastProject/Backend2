require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const path = require('path');
// app.use('/uploads', express.static('uploads'));

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))) //파일저장위치 변경


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
/////////////////////////////////////////////////////////////


// const session = require('express-session');

// app.use(session({
//   secret: 'YOUR_SESSION_SECRET',
//   resave: false,
//   saveUninitialized: true,
// }));

// const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
// const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI

// app.get('/kakaologin', (req, res) => { 
//   //  (1,2)과정  (31,32번 자료를 보내며) 인가코드를 주세요 
//   const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
//   res.redirect(kakaoLoginUrl);
// });


// // //로컬에서 네이버 로그인을 할때 사용
// // //1~3번 과정이다 
// /*
// const NAVER_CLIENT_ID =  process.env.NAVER_CLIENT_ID
// const NAVER_REDIRECT_URI = encodeURI(process.env.NAVER_REDIRECT_URI); 
// app.get("/naverlogin", function (req, res) {
//   var api_url ="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" +
//   NAVER_CLIENT_ID + "&redirect_uri=" + NAVER_REDIRECT_URI;
//   res.end(
//     "<a href='" +
//       api_url +
//       "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>"
//   );
// });

// // api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
// //      + NAVER_CLIENT_ID + '&client_secret=' + client_secret + '&redirect_uri=' + NAVER_REDIRECT_URI + '&code=' + code + '&state=' + state;
// api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
//      + NAVER_CLIENT_ID + '&redirect_uri=' + NAVER_REDIRECT_URI + '&code=' + code + '&state=' + state;*/
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const NAVER_CLIENT_ID =  process.env.NAVER_CLIENT_ID
// const NAVER_REDIRECT_URI = encodeURI(process.env.NAVER_REDIRECT_URI); 
// app.get("/naverlogin", function (req, res) {
//   var api_url ="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" +
//   NAVER_CLIENT_ID + "&redirect_uri=" + NAVER_REDIRECT_URI;
//   res.end(
//     "<a href='" +
//       api_url +
//       "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>"
//   );
// });

//  api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
//       + NAVER_CLIENT_ID + '&redirect_uri=' + NAVER_REDIRECT_URI 



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// app.use('/uploads', express.static('uploads'));
// app.use(
//     cors({
//       origin: "*", //origin 확인 필요
//       credentials: true,
//       optionsSuccessStatus: 200,
//       exposedHeaders: ["authorization"], //클라이언트가 응답에서 액세스할 수 있는 헤더 목록
//     })
//   );

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