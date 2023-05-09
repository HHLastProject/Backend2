const request = require('supertest');
const app = require('./app'); 
const fn = require("./test")
const serachRouter = require("./routes/search.route") 

// 테스트 코드로 api 가져오는 방법을 검색 
// describe('GET /', () => {

//     // it('app.js에 / 실행하면 "connected" 나오는지 확인', async () => {
//     //   const response = await request(app).get('/');
//     //   expect(response.text).toBe('connected');
//     // });

//     // test(`확인용1`,async()=>{
//     //   const response = await request(app).get('/');
//     //   // expect(response.text).toBe('connected');
//     //   expect(response.status).toBe(200);
//     // });

//   });


  describe('GET /', () => {

    // it('should respond with "connected"', async () => {
    //          const response = await request(app).get('/');
    //          expect(response.text).toBe('connected');
    //   });

    // it('search router Test"', async () => {
    //   const response = await request(app).use(serachRouter).get('/api/search/summary');
    //   expect(response.status).toBe(200);
    // });

    it('index router Test"', async () => {
      const response = await request(app).get('/test');
      expect(response.status).toBe(200);
    });


    it('search router Test"', async () => {
      const response = await request(app).get('/api/search/summary');
      expect(response.status).toBe(200);
    });
  });