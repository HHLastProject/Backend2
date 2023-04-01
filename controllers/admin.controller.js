const AdminService = require('../services/admin.service');
const Boom = require('boom');
const Joi = require("joi");
const multer = require("multer");

class AdminController {
    constructor() {
        this.adminService = new AdminService();
    }

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

    postShop = async (req, res, next) => {
        try {
            const { shopName, category, address, operatingTime, phoneNumber, menuName, price, menuDesciption} = req.body;
            const { adminId } = res.locals.admin; //어드민 로그인을 위해서 어드민 로그인 페이지가 필요함!(FE) 회원가입, 로그인 api 만들어서 auth토큰 발급이 필요함 
            const file = req.file;
            if(!file){
                res.status(404).json({ errorMessage: "대표이미지 파일을 등록해주세요." });
            }
            const filename = req.file.filename;
            const thumbnail = `http://52.78.166.176:3000/uploads/${filename}`
            await this.adminService.postShop( adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption);
            return res.status(201).json({ message: "업체 정보 등록이 완료되었습니다." });
        } catch (error) {
            if (Boom.isBoom(error)) {
                return res.status(error.output.statusCode).json({ errorMessage: error.output.payload.message }); 
            } else {
                res.status(400).json({ errorMessage: "업체 등록에 실패하였습니다." });
            }
        }
    };

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