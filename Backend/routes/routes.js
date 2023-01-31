const express = require("express");
const router = express.Router();
const {home, fetchUser, getUser, editUser,deleteUser} = require("../controllers/controller");

router.get("/",home)
router.post("/fetchUser", fetchUser)
router.get("/getUser", getUser)
router.put("/editUser/:id", editUser)
router.delete("/deleteUser/:id", deleteUser)

module.exports = router;