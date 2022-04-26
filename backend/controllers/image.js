const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../assets/img"));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const filter = (req, file, cb) => {
    file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png"
        ? cb(null, true)
        : cb(null, false);
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
    fileFilter: filter,
});

exports.getUploadForm = (req, res) => res.render("upload");

exports.postUploadFile = [
    upload.single("avatar"),
    (req, res) => {
        res.render("download", {
            imageUrl: `/img/${req.file.originalname}`,
        });
    },
];