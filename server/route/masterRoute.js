const Router = require("express");
const router = new Router();
const masterController = require('../controllers/masterController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post("/",checkRole('ADMIN'), masterController.create);
router.get("/", masterController.getAll);


module.exports = router;
