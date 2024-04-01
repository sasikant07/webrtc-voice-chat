const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service");

class AuthController {
  sendOtp = async (req, res) => {
    const { phone } = req.body;

    if (!phone) {
      res.status(400).json({ message: "Phone field is required" });
    }

    const otp = await otpService.generateOtp();

    const ttl = 1000 * 60 * 2;
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;

    const hash = await hashService.hashOtp(data);

    try {
      await otpService.sendBySms(phone, otp);
      res.json({
        hash: `${hash}.${expires}`,
        phone,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Twilio service message sending failed" });
    }
  };

  verifyOtp = async (req, res) => {
    const { otp, hash, phone } = req.body;

    if (!otp || !hash || !phone) {
      res.status(400).json({ message: "All fields are required" });
    }

    const [hashedOtp, expires] = hash.split(".");

    if (Date.now() > +expires) {
      res.status(400).json({ message: "OTP expired!" });
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = otpService.verifyOtp(hashedOtp, data);

    if (!isValid) {
      res.status(400).json({ message: "Inavlid OTP" });
    }

    let user;
    let accesToken;
    let refreshToken;

    try {
      user = await userService.findUser({ phone });

      if (!user) {
        await userService.createUser({ phone });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    tokenService.generateTokens()
  };
}

module.exports = new AuthController();
