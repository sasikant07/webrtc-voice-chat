const jwt = require("jsonwebtoken");
const RefreshModel = require("../models/refresh-model");

const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;

class TokenService {
  generateTokens = async (payload) => {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: "1m",
    });
    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: "1y",
    });
    return { accessToken, refreshToken };
  };

  storeRefreshToken = async (token, userId) => {
    try {
      await RefreshModel.create({
        token,
        userId,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  verifyAccessToken = async (token) => {
    return jwt.verify(token, accessTokenSecret);
  };

  verifyRefreshToken = async (refreshToken) => {
    return jwt.verify(refreshToken, refreshTokenSecret);
  };

  findRefreshToken = async (userId, refreshToken) => {
    return await RefreshModel.findOne({ userId: userId, token: refreshToken });
  };

  updateRefreshToken = async (userId, refreshToken) => {
    return await RefreshModel.updateOne(
      { userId: userId },
      { token: refreshToken }
    );
  };
}

module.exports = new TokenService();
