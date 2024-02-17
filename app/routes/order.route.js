module.exports = (app) => {
    const order = require('../controllers/order.controller');
    const router = require('express').Router();

    router.get('/user/:id', order.findOrderByUserId);
    router.post('/user/:id/add', order.addToCart);
    router.delete('/delete/user/:id/product/:product_id', order.removeFromCart);

    app.use('/api/orders', router);
}