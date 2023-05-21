const Router = require("express");
const router = new Router();
const cardController = require('../controllers/cardController')
const path = require("path");

router.post("/", cardController.create);
router.get("/", cardController.getAll);


module.exports = router;
