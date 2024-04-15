const router = require("express").Router();
const AuthController = require("./controllers/auth-controller");
const ActivateController = require("./controllers/activate-controller");
const authMiddleware = require("./middlewares/auth-middleware");

router.post("/api/send-otp", AuthController.sendOtp);
router.post("/api/verify-otp", AuthController.verifyOtp);
router.post("/api/activate", authMiddleware, ActivateController.activate);
router.get("/api/refresh", AuthController.refresh);

module.exports = router;
