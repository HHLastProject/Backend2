const ScrapService = require("../services/scrap.service");

class scrapController {
  scrapService = new ScrapService();

  updateScrap = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { shopId } = req.params;

      //스크랩 한거 가져오기
      const findDataScrap = await this.scrapService.findOneScrap(shopId, userId);

      //즐겨찾기 폴더ID 가져오기
      let folderId = await this.scrapService.findOneFolder(userId);

      let boolean = true;
      if (!findDataScrap) {
        this.scrapService.createScrap(userId, shopId, folderId);
      } else {
        this.scrapService.deleteScrap(userId, shopId);
        boolean = false;
      }

      res.status(200).json({ isScrap: boolean });
    } catch (err) {
      console.log(err);
      res.status(400).json({ "msg": "예기치 못한 오류가 발생했습니다" });
    }
  };
}

module.exports = scrapController;
