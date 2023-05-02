const {Likes} = require("../models");


class LikeRepository {

    findOnebyLike = async(feedId,userId) => { 
        const findLike = await Likes.findOne({
            where : {FeedId : feedId, UserId : userId}
        });
        return findLike
    };

    createbyLike = async (userId,feedId) => { 
        await Likes.create({
                UserId : userId,
                FeedId : feedId
        }); 
    }
    
    deletebyLike = async (feedId) => { 
        await Likes.destroy({
            where : {FeedId : feedId}
        });   
    }

}
module.exports = LikeRepository;