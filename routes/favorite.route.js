const express = require("express");
const router = express.Router();

const FavoriteController = require("../controllers/favorite.controller");
const favoriteController = new FavoriteController();
const authMiddle = require("../middlewares/snsAuthmiddleware");

//검색  추후에 get으로 수정 req.body
router.get("/favorite",authMiddle, favoriteController.listFavorite)

//즐겨찾기 위치 옮기기
router.post("/favorite/modify",authMiddle, favoriteController.modifyFolders)

//폴더만 생성
router.post("/favorite/folder",authMiddle,favoriteController.makeFolder)

router.delete("/favorite/folder/:folderId",authMiddle,favoriteController.deleteFolder)
//추후 이것으로 수정 req.qurey
// router.get("/search",searchController.test)

module.exports =router;