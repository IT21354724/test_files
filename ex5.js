class AppState {
    constructor() {
        this.userService = new UserService(this);
        this.productService = new ProductService(this);
    }

    updateState() {
        console.log("Updating app state");
        this.userService.getUserData();
        this.productService.getProductData();
    }
}

class UserService {
    constructor(appState) {
        this.appState = appState;
    }

    getUserData() {
        console.log("Fetching user data");
        this.appState.updateState();  // Calls AppState method
    }
}

class ProductService {
    constructor(appState) {
        this.appState = appState;
    }

    getProductData() {
        console.log("Fetching product data");
        this.appState.updateState();  // Calls AppState method
    }
}

const appState = new AppState();
appState.updateState();
