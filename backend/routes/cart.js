const express = require(`express`);
const router = express.Router();
const cartController = require(`../controllers/cart`);

router.get('/', cartController.getCart);
router.post('/', cartController.postCart);
router.patch('/', cartController.patchCart)

module.exports = router;