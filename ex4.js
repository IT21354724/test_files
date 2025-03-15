function fetchUserData(callback) {
    console.log('Fetching user data...');
    callback('User data fetched');
}

function fetchProductData(callback) {
    console.log('Fetching product data...');
    callback('Product data fetched');
}

function main() {
    fetchUserData(function(response) {
        console.log(response);
        fetchProductData(function(response) {
            console.log(response);
            fetchUserData(function(response) {  // Circular call
                console.log(response);
            });
        });
    });
}

main();
