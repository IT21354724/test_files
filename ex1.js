class UserService {
    constructor() {
        this.productService = new ProductService(this);
    }

    getUserInfo(userId) {
        console.log(`Fetching user information for ${userId}`);
    }

    getProductDetails(productId) {
        this.productService.getProductInfo(productId);  // Calls ProductService method
    }
}

class ProductService {
    constructor(userService) {
        this.userService = userService;
    }

    getProductInfo(productId) {
        console.log(`Fetching product information for ${productId}`);
        this.userService.getUserInfo(123);  // Calls UserService method
    }
}

const userService = new UserService();
userService.getProductDetails(1);
