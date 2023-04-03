const AdminService = require('../services/admin.service');
const Boom = require('boom');
const bcrypt = require("bcrypt");
const Joi = require("joi");
const multer = require("multer");



class AdminController {
    constructor() {
        this.adminService = new AdminService();
    }

    signup = async(req,res,next) => {
        try {
            const { adminEmail, adminPassword, confirmPassword } = req.body;
            const isExist = await this.adminService.isExistingEmail(adminEmail);
            if (isExist) {
                throw Boom.conflict("중복된 이메일입니다.");

            }
            if(adminPassword !== confirmPassword) {
                throw Boom.preconditionFailed("패스워드가 일치하지 않습니다.");
            } 
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(adminPassword, salt);

            await this.adminService.signup(adminEmail, hashedPassword);
            res.status(201).json({message:'어드민 가입에 성공했습니다.'});
        } catch (error) {
            if (Boom.isBoom(error)) {
                return res.status(error.output.statusCode).json({ errorMessage: error.output.payload.message }); 
            } else {
                res.status(400).json({ errorMessage: "어드민 가입에 실패하였습니다." });
            }
        }
    };

    login = async(req,res,next) => {
        try {
            const { adminEmail, adminPassword } = req.body;
            const token = await this.adminService.auth(adminEmail, adminPassword);
            res.set("authorization", `Bearer ${token}`);
            return res.status(201).json({message: "로그인에 성공하였습니다."});
        } catch (error) {
            res.status(500).json({ errorMsg : "요청한 데이터 형식이 올바르지 않습니다." });
        }
    };

    logout = async (req,res,next) => {
        try {
            res.clearHeaders;
            res.status(200).json({ message: "로그아웃 되었습니다." });
        } catch (error) {
            next(error);
        }
    };

    getAllShops = async (req, res, next) => {
        try {
            const shops = await this.adminService.getAllShops();
            if (shops.length === 0) {
                res.status(200).json({ message: "아직 업체 정보가 등록되지 않았어요." });
            }
            return res.status(200).json({ shops: shops });
        } catch (error) {
            if (Boom.isBoom(error)) {
                return res.status(error.output.statusCode).json({ errorMessage: error.output.payload.message }); 
            } else {
                res.status(400).json({ errorMessage: "업체 정보 조회에 실패하였습니다." });
            }
        }
    };

    getOneShopInfo = async(req,res, next) => {
        try {
            const { shopId } = req.params;
            const shop = await this.adminService.getOneShopInfo(shopId);
            return res.status(200).json({ shop: shop });
        } catch(error) {
            if (Boom.isBoom(error)) {
                return res.status(error.output.statusCode).json({ errorMessage: error.output.payload.message }); 
            } else {
                res.status(400).json({ errorMessage: "업체 상세정보 조회에 실패하였습니다." });
            }
        }
    }


    // postInfo = async (req, res, next) => {
    //     try {
    //         const { shopName, category, address, operatingTime, phoneNumber, menu} = req.body;
    //         const { adminId } = res.locals.admin;
    //         const files = req.files;
    //         const thumbImg = req.files.thumbnail[0];
    //         if(!thumbImg){
    //             res.status(404).json({ errorMessage: "대표이미지 파일을 등록해주세요." });
    //         }
    //         // const filename = req.file.thumbnail.filename;
    //         // const thumbnail = `http://localhost:3060/uploads/${filename}` //나중에 ec2로 바꿔야함
    //         const thumbnailFilename = req.files.thumbnail[0].filename;
    //         const menuPictureFilenames = req.files.menuPictures.map(file => file.filename);

    //         const thumbnail = `http://localhost:3060/uploads/${thumbnailFilename}`;
    //         const base_url = "http://localhost:3060/uploads/";
    //         const pictures = menuPictureFilenames.map(filename => base_url + filename);

    //         const parsedMenu = JSON.parse(menu);
    //         await this.adminService.postInfo( adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, parsedMenu, pictures);
    //         return res.status(201).json({ message: "업체 정보 등록이 완료되었습니다." });
    //     } catch (error) {
    //         if (Boom.isBoom(error)) {
    //             return res.status(error.output.statusCode).json({ errorMessage: error.output.payload.message }); 
    //         } else {
    //             res.status(400).json({ errorMessage: "업체 등록에 실패하였습니다." });
    //         }
    //     }
    // };

    postInfo = async (req, res, next) => {
        try {
          const { shopName, category, address, operatingTime, phoneNumber, menu } = req.body;
          const { adminId } = res.locals.admin;
          const thumbnailFilename = req.files.thumbnail[0].filename;
          const thumbnail = `http://localhost:3060/uploads/${thumbnailFilename}`;
          const menuItems = JSON.parse(menu);
          const menuWithPictures = [];
          const menuPictureFilenames = req.files.menuPictures.map(file => file.filename);
          for (let i = 0; i < menuItems.length; i++) {
            const pictureFilename = menuPictureFilenames[i];
            const picture = pictureFilename ? `http://localhost:3060/uploads/${pictureFilename}` : null;
            menuWithPictures.push({ ...menuItems[i], picture });
          }
          await this.adminService.postInfo(adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuWithPictures);
          return res.status(201).json({message: "업체 정보 등록이 완료되었습니다."});
        } catch (error) {
          if (Boom.isBoom(error)) {
            return res.status(error.output.statusCode).json({ errorMessage: error.output.payload.message });
          } else {
            res.status(400).json({ errorMessage: "업체 등록에 실패하였습니다." });
          }
        }
      }
      

    updateShop = async (req, res, next) => {
        try {
            const { shopName, category, address, operatingTime, phoneNumber, menuName, price, menuDesciption} = req.body;
            const { adminId } = res.locals.admin;
            const { shopId } = req.params;
            const file = req.file;
            if(!file){
                res.status(404).json({ errorMessage: "대표이미지 파일을 등록해주세요." });
            }
            const filename = req.file.filename;
            const thumbnail = `http://52.78.166.176:3000/uploads/${filename}`
            await this.adminService.updateShop(shopId, adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption);
            return res.status(201).json({ message: "업체 정보 수정이 완료되었습니다." });
        } catch (error) {
            if (Boom.isBoom(error)) {
                return res.status(error.output.statusCode).json({ errorMessage: error.output.payload.message }); 
            } else {
                res.status(400).json({ errorMessage: "업체 수정에 실패하였습니다." });
            }
        }        
    };

    deleteShop = async (req, res, next) => {
        try {
            const { adminId } = res.locals.admin;
            const { shopId } = req.params;
            await this.adminService.deleteShop(adminId, shopId);
            return res.status(200).json({message: '업체 정보를 삭제하였습니다.'});
        } catch (error) {
            if (Boom.isBoom(error)) {
                return res.status(error.output.statusCode).json({ errorMessage: error.output.payload.message }); 
            } else {
                res.status(400).json({ errorMessage: "업체 정보 삭제에 실패하였습니다." });
            }
        }
    };
}

module.exports = AdminController;