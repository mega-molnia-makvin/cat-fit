const Router = require("express");
const router = new Router();
const namedSportController = require("../controllers/namedSportController");

router.post("/", namedSportController.create);
router.get("/", namedSportController.getAll);
module.exports = router;
