const jwt = require('jsonwebtoken');
const { Users } = require('../models');

module.exports = async (req, res, next) => {
    try {

       
        const { authorization } = req.headers;
        console.log("===================================");
        console.log("authorization = ", authorization);
        console.log("===================================");

        const [authType, authToken] = (authorization ?? '').split(' ');

        
        console.log("===================================");
        console.log("count = 1 ");
        

        if (!authorization) {
            throw new CustomError('인증되지 않았습니다', 401);
        }

        console.log("===================================");
        console.log("count =  2",);

        if (authType !== 'Bearer' || !authToken) {
            throw new CustomError('로그인 후 사용가능한 기능입니다.', 401);
        }

        console.log("===================================");
        console.log("count = 3");

        const { nickname, email } = jwt.verify(authToken, process.env.TOKEN_KEY);

        console.log("===================================");
        console.log("count = 4");


        let user = await Users.findOne({ where: { email } });

        console.log("===================================");
        console.log("count = 5");


        res.locals.user = user;

        console.log("===================================");
        console.log("count = 6");


        next();
    } catch (err) {
        return res.status(err.status || 500).json({
            errorMessage: err.expect ? err.message : '전달된 쿠키에서 오류가 발생하였습니다.',
        });
    }
};
