const express = require(`express`);
const router = express.Router();
const userController = require(`../controllers/user`);
const passport = require(`passport`);
const axios = require(`axios`);

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.patch('/:id', userController.patchUser);
router.get(`/auth/google`,
    passport.authenticate(`google`, { scope: [`profile`] })
);
router.get(`/auth/google/callback`,
    passport.authenticate(`google`, { failureRedirect: `http://localhost:3000` }),
    function (req, res) {
        if (!req.user.cartId) {
            axios.post(`http://localhost:9000/cart`)
                .then(resPost => {
                    const result = resPost.data.createdCart;
                    const editedUser = req.user;
                    editedUser.cartId = result._id;
                    console.log(editedUser)
                    editedUser.save();
                    axios.patch(`http://localhost:9000/user/${editedUser._id}`)
                        .then(resPatch => {
                            
                        })
                });
        }
        res.redirect(`http://localhost:3000/data?token=${req.user._id}`);
    }
);

router.get(`/logout`, function (req, res) {
    res.redirect(`http://localhost:3000`);
});

module.exports = router;