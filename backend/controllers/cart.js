const Cart = require('../models/cart');

exports.getCart = async (req, res) => {
    try {
        const result = await Cart.findById(req.params.id).select("-__v");
        if (result) {
            return res.status(200).json({
                ...result.toObject(),
                request: {
                    type: "GET",
                    url: "http://127.0.0.1:3000/cart",
                },
            });
        }
        res.status(404).json({ msg: "Cart not found" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
}

exports.postCart = async (req, res) => {
    try {
        const cart = new Cart(req.body);
        const result = await cart.save();
        if (result) {
                return res.status(201).json({
                    message: "Your cart was created",
                    createdCart: {
                        ...result.toObject(),
                        payload: {
                            type: "GET",
                            url: `http://127.0.0.1:3000/cart/${result._id}`,
                        },
                    },
                });
        }
        res.status(500).json({ msg: "Cart was not created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error,
        });
    }
}

exports.patchCart = async (req, res) => {
    try {
        const update = req.body;
        const result = await Cart.findByIdAndUpdate(req.params.id, update);
        if (result) {
            return res.status(200).json({
                msg: `Cart ${req.params.id} was updated`,
                request: {
                    type: "GET",
                    url: `http://127.0.0.1:3000/cart/${req.params.id}`,
                },
            });
        }
        res.status(500).json({ msg: "Cart could not be updated" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
}