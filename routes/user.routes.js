const {
  getMyProfile,
  updateProfile,
} = require("../controllers/profile.controllers");

const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();
const Profile = require("../models/profile.models");
const User = require("../models/user.models");

router.param("profile", async (req, res, next, id) => {
  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      res.status(404).json("not found");
    }
    req.profile = profile;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.param("user", async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json("not found");
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
});

//profile router
router.get("/profile/me", verifyToken, getMyProfile);

//upload
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 500000,
  // },
});


router.put("/profile/me", verifyToken, upload.single("avatar"), updateProfile);

module.exports = router;
