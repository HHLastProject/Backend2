// const MypageService = require("../services/mypage.service.js"); 
const { Users, Feeds, Shops, Tegs, Sequelize } = require('../models')

class mypageController {

    // constructor() {
    //     this.MypageService = new MypageService();
    // }
    getAllMypage = async(req, res, next) => {
        const { userId } = res.locals.user;
        console.log(userId)
        try {
            const mypages = await Users.findAll({
                attributes: [
                    "nickname",
                    "prifilePic",
                ],
                include: [
                    {
                        model: Feeds,
                        attributes: [
                            "feedId",
                            "feedPic",
                        ],
                    },
                ],
                where : { userId : userId },
                // raw: true,
            })
            res.status(200).json({ mypages: mypages })

        } catch(error) {
            console.log(error);
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
            return;
        }
    }

    getOneMypage = async(req, res, next) => {
        const { userId } = res.locals.user;
        console.log(userId)
        const { feedId } = req.params;
        console.log(userId, feedId)
        try {
            const mypage = await Feeds.findOne({
                attributes: [
                    // "Users.nickname",
                    // "Users.profilePic",
                    "createdAt",
                    "feedPic",
                    "comment",
                    // "Shops.shopName",
                    // "Shops.address",
                    // "Shops.thumbnail",
                ],
                include: [
                    {
                        model: Users,
                        attributes: ["nickname", "prifilePic"],
                    },
                    {
                        model: Shops,
                        attributes: ["shopName", "address", "thumbnail"],
                    },
                    {
                        model: Tegs,
                        attributes: ["tag"],
                    },
                ],
                where: { userId: userId, feedId: feedId },
                // raw: true,
            })
            res.status(200).json({ mypage: mypage })
        } catch(error) {
            console.log(error);
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
            return;
        }
    }

    deleteMypage = async(req, res, next) => {
        const { userId } = res.locals.user;
        const { feedId } = req.params;
        try {
            const findOneFeed = await Feeds.findOne({
                where: { feedId: feedId },
            })
            if (!findOneFeed) {
                return res.status(404).json({ errorMsg: "해당 피드가 존재하지 않습니다." })
            }
            if (findOneFeed.UserId !== userId) {
                return res.status(403).json({ errorMsg: "해당 피드 삭제 권한이 없습니다."})
            }
            await Feeds.destroy({ where: { userId: userId, feedId: feedId } }); 
            res.status(200).json({ msg: "해당 피드를 삭제했습니다."})
        } catch(error) {
            console.log(error);
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
            return;
        }
    };
} 

module.exports = mypageController;