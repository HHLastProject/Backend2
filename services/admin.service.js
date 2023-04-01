const AdminRepository = require('../repositories/admin.repository');
const Boom = require('boom');

class AdminService {
    constructor () {
        this.adminRepository = new AdminRepository();
    }

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

    postShop = async(adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption) => {
        const createdshop = await this.adminRepository.postShop(adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption);
        return createdshop;
    };

    updateShop = async(shopId, adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption) => {
        const foundShop = await this.adminRepository.findOneShop(shopId);
        if (!foundShop) {
            throw Boom.preconditionFailed("업체가 존재하지 않습니다.");
        }
        if (foundShop.AdminId == adminId) {
            const updatedShop = await this.adminRepository.updateShop(shopId, adminId, shopName, category, address, operatingTime, phoneNumber, thumbnail, menuName, price, menuDesciption);
            return updatedShop;
        } else {
            throw Boom.preconditionFailed("삭제 권한이 없습니다.");
        } 
    };

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