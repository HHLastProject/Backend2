const LikeRepository = require("../repositories/like.repositories")

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
    }

    findOneLike = async (feedId,userId) => {
        return await this.likeRepository.findOnebyLike(feedId,userId)
    }

    createLike = async (userId,feedId) => {
        this.likeRepository.createbyLike(userId,feedId)
    }


    deleteLike = async (feedId) => {
        this.likeRepository.deletebyLike(feedId)
    }
}

module.exports = LikeService;