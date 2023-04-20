const {Feeds,Shops,Tags,Users,Scrap}= require("../models");

class FeedRepository {

    // 전체 피드 가져오기
    findByFeed = async() => { 
        const findAll = await Feeds.findAll({
            attributes: ['feedPic', "comment","createdAt","feedId"],
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
  
        return findAll
    /*/////////////////////////////////////////////////////////  ★★★★★ 알아보기
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
        
    };
    
    //하나의 가게를 가져오기
    findOneByShop = async(shopId) => { 
        
        const findOne = await Feeds.findOne({
            attributes: ['feedPic', "comment","createdAt","feedId","UserId","ShopId"],
            include: [
                {
                    model: Users,             
                    attributes: ["nickname","profilePic"],
                },
                {
                    model: Tags,
                    attributes: ['tag'],
                },
                {
                    model: Shops,
                    attributes: ['shopName',"address","thumbnail"],
                }
            ],
            where: {ShopId : shopId}
        });    
        return findOne;
    };
    
    //하나의 피드 가져오기
    // findOneByFeed = async(shopId) => { 
    //     console.log("레파지토리입니다");
    // };

    //피드 작성하기
    postFeed = async(userId,shopId,comment,feedPic) => { 
        console.log("feedPic 레파지토리입니다")
        console.log(feedPic)
        const FeedsCreate = await Feeds.create({
            ShopId : shopId,
            UserId : userId,
            feedPic,
            comment
        });

        console.log("FeedsCreate = " + FeedsCreate)
        return FeedsCreate;

    };

    //태그 작성하기
    postTag = async(feed,tag) => { 
        await Tags.create({
            FeedId : feed.feedId,
            tag
        })
        console.log("tag완료")
    };

}
module.exports = FeedRepository;