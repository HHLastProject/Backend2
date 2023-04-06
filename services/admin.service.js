require('dotenv').config();
const AdminRepository = require('../repositories/admin.repository');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Boom = require('boom');

class AdminService {
    constructor () {
        this.adminRepository = new AdminRepository();
    }

    signup = async(adminEmail, hashedPassword) => {
        const createdAdmin = await this.adminRepository.signup(adminEmail, hashedPassword);
        return createdAdmin;
    }

    isExistingEmail = async(adminEmail) => {
        const isExist = await this.adminRepository.isExistingEmail(adminEmail);
        return isExist;
    }

    auth = async(adminEmail, adminPassword) => {
        try {
            const admin = await this.adminRepository.findOneAdmin(adminEmail);
            console.log(admin);
            if(!admin) {
                throw Boom.notFound("해당 메일로 가입된 정보가 없습니다.");
            }
            const hashedPassword = await admin.adminPassword;
            const passwordVal = await bcrypt.compare(adminPassword, hashedPassword);
            if (passwordVal) {
                const token = jwt.sign(
                    {adminEmail : admin.adminEmail}, 
                    process.env.SECRET_KEY,
                    {expiresIn: '10d'});
                return token;
            } else {
                throw Boom.unauthorized("비밀번호가 일치하지 않습니다.");
            }
        } catch (error) {
            if (Boom.isBoom(error)) {
                return res.status(error.output.statusCode).json({ errorMessage: error.output.payload.message }); 
            } else {
                throw error;
            }
        }
    };

    // refreshToken = async(adminEmail) => {
    //     const reToken = jwt.sign({}, process.env.SECRET_KEY, { expiresIn: "70d" });
    //     const addRefreshToken = await this.adminRepository.refreshToken(adminEmail,reToken);
    //     return reToken;
    // }

    getAllShops = async() => {
        try {
            const shops = await this.adminRepository.getAllShops();
            return shops;
          } catch (error) {
            throw Boom.preconditionFailed("업체 목록 조회에 실패하였습니다.");
          }
    };

    getOneShopInfo = async(shopId) => {
        try {
            const shop = await this.adminRepository.getOneShopInfo(shopId);
            return shop;
          } catch (error) {
            throw Boom.preconditionFailed("업체 상세정보 조회에 실패하였습니다.");
          }
    };

    postInfo = async(adminId, shopName, category, address, x, y, operatingTime, phoneNumber, thumbnail, menuWithPictures) => {
        const createdshop = await this.adminRepository.postShop(adminId, shopName, category, address, x, y, operatingTime, phoneNumber, thumbnail);
        console.log('🟩', createdshop);
        if (!!createdshop) {
            const shopId = createdshop.shopId;
            console.log('🟩', shopId);
            const menulist = [];

            for (let i = 0; i < menuWithPictures.length; i++) {
                const { menuName, price, menuDescription, picture } = menuWithPictures[i];
                console.log('🟩', menuName, price, menuDescription, picture);
                const createdMenu = await this.adminRepository.postMenu(shopId, menuName, price, menuDescription, picture);
                console.log('🟩', createdMenu);
                menulist.push(createdMenu);
            }
            return (createdshop, menulist);
        }
    };

    // postShop = async(adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail) => {
    //     const createdshop = await this.adminRepository.postShop(adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail);
    //     return createdshop;
    // };

    // postMenu = async(menuItems) => {
    //     const menus = [];
    //     for (let i = 0; i < menuItems.length; i++) {
    //         const { menuName, price, menuDescription } = menuItems[i];
    //         const createdMenu = await this.adminRepository.postMenu(menuName, price, menuDescription);
    //         menus.push(createdMenu);
    //       }
    //     return menus;
    // };

    // updateInfo = async (adminId, shopId, updateData) => {
    //     const foundShop = await this.adminRepository.findOneShop(shopId);
    //     if (!foundShop) {
    //         throw Boom.preconditionFailed("업체가 존재하지 않습니다.");
    //     }
    //     if (foundShop.AdminId !== adminId) {
    //         throw Boom.preconditionFailed("업체 수정 권한이 없습니다.");
    //     }
    //     await this.adminRepository.updateShop(shopId, updateData);
    // };

    updateInfo = async(adminId, shopId, shopName, category, address, x, y, operatingTime, phoneNumber, thumbnail, menuWithPictures) => {
        const foundShop = await this.adminRepository.findOneShop(shopId);
        if (!foundShop) {
            throw Boom.preconditionFailed("업체가 존재하지 않습니다.");
        }
        if (foundShop.AdminId === adminId) {
            const updatedShop = await this.adminRepository.updateShop(shopId, shopName, category, address, x, y, operatingTime, phoneNumber, thumbnail);
            const ShopId = foundShop.shopId;
            const menulist = [];
            for (let i = 0; i < menuWithPictures.length; i++) {
                const { menuName, price, menuDescription, picture } = menuWithPictures[i];
                const updatedMenu = await this.adminRepository.updateMenu(ShopId, menuName, price, menuDescription, picture);
                menulist.push(updatedMenu);
            }
            return (updatedShop, menulist);
        } else {
            throw Boom.preconditionFailed("업체 수정 권한이 없습니다.");
        } 
    };

    // updateShop = async(shopId, adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption) => {
    //     const foundShop = await this.adminRepository.findOneShop(shopId);
    //     if (!foundShop) {
    //         throw Boom.preconditionFailed("업체가 존재하지 않습니다.");
    //     }
    //     if (foundShop.AdminId == adminId) {
    //         const updatedShop = await this.adminRepository.updateShop(shopId, adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption);
    //         return updatedShop;
    //     } else {
    //         throw Boom.preconditionFailed("삭제 권한이 없습니다.");
    //     } 
    // };

    deleteShop = async(adminId, shopId) => {  
        const foundShop = await this.adminRepository.findOneShop(shopId);
        if (!foundShop) {
            throw Boom.preconditionFailed("업체가 존재하지 않습니다.");
        }
        if (foundShop.AdminId == adminId) {
            await this.adminRepository.deleteShop(shopId);
        } else {
            throw Boom.preconditionFailed("삭제 권한이 없습니다.");
        }

    };
}
module.exports = AdminService;