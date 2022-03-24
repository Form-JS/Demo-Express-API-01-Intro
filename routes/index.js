const productRouter = require('./product-router');


const router = require('express').Router();

router.use('/product', productRouter);


module.exports = router;