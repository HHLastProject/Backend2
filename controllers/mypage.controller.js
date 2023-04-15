// const MypageService = require("../services/mypage.service.js"); 
const { Users, Feeds, Shops, Tegs, Scrap, Sequelize } = require('../models')

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
            // console.log(mypages.userId)
            // let result = mypages.map((mypage) =>{
            //     return{
            //     nickname : mypage.nickname,
            //     profilePic : mypage.prifilePic,

            //     }
                
            // })
            const result = mypages.map((mypage) => {
                const { Feeds } = mypage;
                return {
                    nickname: mypage.nickname,
                    profilePic: mypage.prifilePic,
                    feeds : Feeds.map((feed) => ({
                        feadId: feed.feedId,
                        feedPic: feed.feedPic,
                    })),
                    feedCount : Feeds.length
                };
            });
            res.status(200).json({ mypages: result  })

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
                        attributes: ["nickname", "prifilePic"], // 현재 prifilePic 오타, 추후 수정 필요
                    },
                    {
                        model: Shops,
                        attributes: ["shopId", "shopName", "address", "thumbnail"],
                    },
                    {
                        model: Tegs, // Tegs 오타, 추후 수정 필요
                        attributes: ["tag"],
                    },
                ],
                where: { userId: userId, feedId: feedId },
                // raw: true,
            })
            // console.log(mypage)
            // console.log(mypage.Shop.shopId)
            const isExistScrap = await Scrap.findOne({
                where: { ShopId: mypage.Shop.shopId }, // 불확실함 해당 ShopId를 기준인데 확실하지 않음
            })
            // console.log(isExistScrap)

            // 데이터를 가공하는 작업
            const result = {
                nickname: mypage.User.nickname,
                profilePic: mypage.User.prifilePic, // 현재 prifilePic 오타, 추후 수정 필요
                createdAt: mypage.createdAt,
                feedPic: mypage.feedPic,
                comment: mypage.comment,
                Tags: mypage.Tegs.map(tag => tag.tag), // Tegs 오타, 추후 수정 필요
                shopName: mypage.Shop.shopName,
                shopAddress: mypage.Shop.address,
                shopThumbnail: mypage.Shop.thumbnail,
                isScrap: isExistScrap ? true : false // 불확실함
            };
            
            res.status(200).json({ mypage: result });

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