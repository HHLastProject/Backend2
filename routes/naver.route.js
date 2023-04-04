const express = require("express");
const qs = require('querystring');
const router = express.Router();
const session = require('express-session');
const axios = require('axios');
require("dotenv").config();

// var client_id = process.env.NAVER_CLIENT_ID
// var client_secret = process.env.NAVER_CLIENT_SECRET
// var redirectURI = encodeURI(process.env.NAVER_REDIRECT_URI); 

router.get('/login', async (req, res) => {
    const { code } = req.query;
  
    const data = {
      grant_type: 'authorization_code',
      client_id,
      client_secret,
      redirectURI,
      code,
      state: 'naver',
    };
  
    try {
      const response = await axios.post('https://nid.naver.com/oauth2.0/token', qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
  
      const { access_token: accessToken } = response.data;
      req.session.accessToken = accessToken;

      if (!accessToken) {
        return res.status(401).send({"errorMsg" : '로그인이 필요합니다.'});
      }
  
  
      const meResponse = await axios.get('https://openapi.naver.com/v1/nid/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const { response: userInfo } = meResponse.data; 

      console.log(userInfo);

      res.status(200).json({accessToken});
    } catch (error) {
      console.error(error);

      res.status(400).send({"errorMsg" :'네이버 로그인에 실패하였습니다.'});
    }
  });

  module.exports = router;