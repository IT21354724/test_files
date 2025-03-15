// user.js
import { getProductDetails } from './product.js';

export function getUserDetails(userId) {
    console.log(`Fetching details for user ${userId}`);
    getProductDetails(1);
}

// product.js
import { getUserDetails } from './user.js';

export function getProductDetails(productId) {
    console.log(`Fetching details for product ${productId}`);
    getUserDetails(123);
}

getUserDetails(1);
