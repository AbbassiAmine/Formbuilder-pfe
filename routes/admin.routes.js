const { addAdmin, loginAdmin } = require("../controllers/admin.controllers");
const isAdmin = require("../middlewares/isAdmin");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

router.post("/loginAdmin", loginAdmin);
router.post("/addAdmin", verifyToken, addAdmin);
module.exports = router;
