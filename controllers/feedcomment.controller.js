// const  FeedCommentService = require("../services/feedcomment.service")
const { Users, Feeds, FeedComments, Sequelize } = require('../models')

class feedCommentController {
    // constructor() {
    //     this.feedCommentService = new FeedCommentService();
    // }

    postFeedComment = async (req, res, next) => {
        const { userId } = res.locals.user;
        const { feedComment } = req.body;
        const { feedId } = req.params;
        try {
            const existFeed = await Feeds.findOne({
                where : { feedId : feedId }
            })
            if (!existFeed) {
                return res.status(404).json({ errorMsg: "해당 피드가 존재하지 않습니다." });
            }
            if (!feedComment) {
                return res.status(401).json({ errorMsg: "댓글을 입력해주세요." });
            }

            await FeedComments.create({
                UserId : userId,
                FeedId : feedId,
                feedComment : feedComment
            })

            res.status(201).json({ msg : "댓글 작성에 성공했습니다." })

        } catch(error) {
            console.log(error);
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
            return;
        }
    }

    getAllFeedComment = async (req, res, next) => {
        try {
            if (res.locals.user) {
                const { userId } = res.locals.user     
                const { feedId } = req.params;

                const existFeed = await Feeds.findOne({
                    where : { feedId : feedId }
                })
                if (!existFeed) {
                    return res.status(404).json({ errorMsg: "해당 피드가 존재하지 않습니다." });
                }
                const commentAllList = await FeedComments.findAll({
                    attributes: [
                        "feedCommentId",
                        "feedComment",
                        "createdAt",
                    ],
                    include : [
                        {
                            model: Users,
                            attributes: ["nickname", "profilePic"],
                        },
                    ],
                    where : [{ FeedId: feedId }], 
                    order: [['createdAt', 'DESC']],
                })

                let findCommentOne = await FeedComments.findAll({
                    where: { UserId : userId }
                })

                let result = [];
                for (let i = 0; i < commentAllList.length; i++) {
                    const commentList = {
                        nickname : commentAllList[i].User.nickname,
                        profilePic : commentAllList[i].User.profilePic,
                        feedCommentId : commentAllList[i].feedCommentId,
                        feedComment : commentAllList[i].feedComment,
                        createdAt : commentAllList[i].createdAt,
                        isMine : findCommentOne ? true : false, // 다른분 댓글 작성하면 false 나오는지 확인 해봐야 됨
                    }
                    result.push(commentList)

                }
                res.status(200).json({ commentList : result })
            } else { 
                const { feedId } = req.params;

                const existFeed = await Feeds.findOne({
                    where : { feedId : feedId }
                })
                if (!existFeed) {
                    return res.status(404).json({ errorMsg: "해당 피드가 존재하지 않습니다." });
                }
                const commentAllList = await FeedComments.findAll({
                    attributes: [
                        "feedCommentId",
                        "feedComment",
                        "createdAt",
                    ],
                    include : [
                        {
                            model: Users,
                            attributes: ["nickname", "profilePic"],
                        },
                    ],
                    where : [{ FeedId: feedId }], 
                    order: [['createdAt', 'DESC']],
                })

                let result = [];
                for (let i = 0; i < commentAllList.length; i++) {
                    const commentList = {
                        nickname : commentAllList[i].User.nickname,
                        profilePic : commentAllList[i].User.profilePic,
                        feedCommentId : commentAllList[i].feedCommentId,
                        feedComment : commentAllList[i].feedComment,
                        createdAt : commentAllList[i].createdAt,
                        isMine : false, // 비로그인이면 모두 false 고정
                    }
                    result.push(commentList)

                }
                res.status(200).json({ commentList : result })
            }
            
        } catch(error) {
            console.log(error);
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
            return;
        }
    }

    deleteFeedComment = async (req, res, next) => {
        const { userId } = res.locals.user;
        const { feedId, feedCommentId } = req.params;
        try {
            const existFeed = await Feeds.findOne({
                where : { feedId : feedId }
            })
            if (!existFeed) {
                return res.status(404).json({ errorMsg: "해당 피드가 존재하지 않습니다." });
            }
            const existComment = await FeedComments.findOne({
                where : { feedCommentId : feedCommentId }
            })
            if (!existComment) {
                return res.status(404).json({ errorMsg: "해당 댓글이 존재하지 않습니다." });
            }
            if (existComment.userId !== userId)  {
                return res.status(403).json({ errorMsg: "댓글 삭제의 권한이 없습니다." });
            }
            await FeedComments.destroy({
                where: { feedCommentId : feedCommentId, userId: userId }
            })

            res.status(200).json({ msg : "댓글 삭제 성공했습니다." })
        } catch(error) {
            console.log(error);
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" });
            return;
        }
    }

}

module.exports = feedCommentController;