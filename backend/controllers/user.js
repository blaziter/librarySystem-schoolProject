const User = require('../models/user');

exports.getUsers = async (req, res) => {
    try {
        const result = await User.find().select("username _id");
        if (result && result.length !== 0) {
            return res.status(200).json({
                count: result.length,
                users: result.map((user) => {
                    return {
                        ...user.toObject(),
                        request: {
                            type: "GET",
                            url: `http://localhost:3000/user/${user._id}`,
                        },
                    };
                }),
            });
        }
        res.status(404).json({ msg: "Users not found" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const result = await User.findById(req.params.id).select("-__v");
        if (result) {
            return res.status(200).json({
                ...result.toObject(),
                request: {
                    type: "GET",
                    url: "http://127.0.0.1:3000/user",
                },
            });
        }
        res.status(404).json({ msg: "User not found" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};

exports.addUser = async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            role: "user",
        });
        const result = await user.save();
        if (result) {
            return res.status(201).json({
                message: "User was created",
                createdUser: {
                    ...result.toObject(),
                    payload: {
                        type: "GET",
                        url: `http://127.0.0.1:3000/user/${result._id}`,
                    },
                },
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}
