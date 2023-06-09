const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware1");
const path = require("path");



router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);

router.post("/continue", userController.continue);
router.post('/buy', userController.buy );

router.post("/logout", (req, res) => {
    req.session.destroy(err => {
      res.redirect("/")
    })
  })




module.exports = router;

