const {Feeds,Shops,Tags,Users,Scrap}= require("../models");

class FeedRepository {

    // 전체 피드 가져오기
    findByFeed = async() => { 
        const findAll = await Feeds.findAll({
            attributes: ['feedPic', "comment","createdAt"],
            include: [
                {
                    model: Users,             
                    attributes: ["nickname","profilePic","userId"],
                },
                {
                    model: Tags,
                    attributes: ['tag'],
                },
                {
                    model: Shops,
                    attributes: ['shopName',"address","thumbnail","shopId"],
                }
            ]
    });
  

    /*/////////////////////////////////////////////////////////
        // Scrap 모델의 데이터를 가져오기 위해 SQL 쿼리문을 작성합니다.
        // Feeds 모델과 Scrap 모델의 관계 설정이 필요 없습니다.
        raw: true,
        includeIgnoreAttributes: false,
        include: [
          [
            sequelize.literal(
              `(SELECT count(*) FROM scraps WHERE scraps.feed_id = feeds.id) AS scrap_count`
            ),
            'scrapCount',
          ],
        ],
      });
    ///////////////////////////////////////////////////////*/
        return findAll
    };
    
    //하나의 가게를 가져오기
    findOneByShop = async(shopId) => { 
        const findOne = await Feeds.findOne({
            attributes: ['feedPic', "comment","createdAt"],
            include: [
                {
                    model: Users,             
                    attributes: ["nickname","profilePic","userId"],
                },
                {
                    model: Tags,
                    attributes: ['tag'],
                },
                {
                    model: Shops,
                    attributes: ['shopName',"address","thumbnail","shopId"],
                }
            ],
            where: {ShopId : shopId}
        });
        return findOne;
    };
    
    //하나의 피드 가져오기
    findOneByFeed = async(shopId) => { 
        console.log("레파지토리입니다");
    };

    //피드 작성하기
    postFeed = async(userId,shopId,comment,feedPic) => { 
        
        const FeedsCreate = await Feeds.create({
            ShopId : shopId,
            UserId : userId,
            feedPic,
            comment
        });
        return FeedsCreate;

    };

    //태그 작성하기
    postTag = async(feed,tag) => { 
        await Tags.create({
            FeedId : feed.feedId,
            tag
        })
    };

}
module.exports = FeedRepository;