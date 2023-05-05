const Router = require("express");
const router = new Router();
const trainingController = require('../controllers/trainingController')

router.post("/", trainingController.create);
router.get("/", trainingController.getAll);
module.exports = router;
