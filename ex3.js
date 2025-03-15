class OrderService {
    constructor() {
        this.paymentService = new PaymentService(this);
    }

    placeOrder(orderId) {
        console.log(`Placing order ${orderId}`);
        this.paymentService.processPayment(orderId);
    }
}

class PaymentService {
    constructor(orderService) {
        this.orderService = orderService;
    }

    processPayment(orderId) {
        console.log(`Processing payment for order ${orderId}`);
        this.orderService.placeOrder(orderId);  // Calls OrderService method
    }
}

const orderService = new OrderService();
orderService.placeOrder(101);
