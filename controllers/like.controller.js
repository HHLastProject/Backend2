const  LikeService = require("../services/like.service")

class likeController {
    constructor() {
        this.likeService = new LikeService();
    }

    updateLike = async(req,res,next) => {
        const { userId } = res.locals.user
        const { feedId } = req.params
        try {
            const findLike = await this.likeService.findOneLike(feedId,userId)

            let boolean = true;

            if(!findLike) { 
                this.likeService.createLike(userId,feedId)
            } else { 
                this.likeService.deleteLike(feedId)
                boolean = false
            }

            res.status(200).json({ isLike : boolean });
        } catch(error) {
            res.status(400).json({ errorMsg: "예기치 못한 오류가 발생했습니다" })
            return
        }
        
    };
} 

module.exports = likeController;