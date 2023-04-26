// const MypageService = require("../services/mypage.service.js"); 
const { Users, Feeds, Shops, Tags, Scrap, Likes, FeedComments, Sequelize } = require('../models')

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
                    "profilePic",
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
            //     profilePic : mypage.profilePic,

            //     }
                
            // })
            const result = mypages.map((mypage) => {
                const { Feeds } = mypage;
                return {
                    nickname: mypage.nickname,
                    profilePic: mypage.profilePic,
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
            // const findOneUser = await Feeds.findOne({
            //     where: { UserId: userId },
            // })
            // if (findOneUser !== userId) {
            //     return res.status(403).json({ errorMsg: "해당 피드는 다른사람이 작성한 피드입니다." })
            // }
            const findOneFeed = await Feeds.findOne({
                where: { feedId: feedId },
            })
            if (!findOneFeed) {
                return res.status(404).json({ errorMsg: "해당 피드가 존재하지 않습니다." })
            }
            const mypage = await Feeds.findOne({
                attributes: [
                    // "Users.nickname",
                    // "Users.profilePic",
                    "feedId",
                    "ShopId",
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
                        attributes: ["nickname", "profilePic"], 
                    },
                    {
                        model: Shops,
                        attributes: ["shopId", "shopName", "address", "thumbnail"],
                    },
                    {
                        model: Tags, 
                        attributes: ["tag"],
                    },
                ],
                where: { userId: userId, feedId: feedId },
                // raw: true,
            })
            const isExistScrap = await Scrap.findOne({
                where: { ShopId: mypage.Shop.shopId, UserId : userId }, // ShopId뿐만이 아니라 UserId도 조건에 추가로 넣어야 정상적으로 작동됨
            })
            const totalLike = await Likes.findAll({
                where: { FeedId : feedId, UserId : userId }
            })

            let likeCount = totalLike.length

            const totalComment = await FeedComments.findAll({
                where: { FeedId : feedId }
            })

            let commentCount = totalComment.length

            // 데이터를 가공하는 작업
            const result = {
                nickname: mypage.User.nickname,
                profilePic: mypage.User.profilePic, 
                createdAt: mypage.createdAt,
                feedPic: mypage.feedPic,
                comment: mypage.comment,
                tags: mypage.Tags.map(tag => tag.tag),
                shopId : mypage.ShopId,
                shopName: mypage.Shop.shopName,
                shopAddress: mypage.Shop.address,
                shopThumbnail: mypage.Shop.thumbnail,
                isScrap: isExistScrap ? true : false,
                likeCount,
                commentCount,
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

    patchNickname= async(req, res, next) => {
        const {nickname} = req.body
        const { userId } = res.locals.user;
        try {
            if (!nickname) {
                return res.status(404).json({ errorMsg : "닉네임을 입력해주세요." })
            }
            await Users.update({nickname},{where: {userId}})
            res.status(200).json({ msg : "닉네임 변경을 성공했습니다."})
    } catch(error) {
        console.log(error);
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
            return;
        }
    }
} 

module.exports = mypageController;