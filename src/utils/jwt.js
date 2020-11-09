const jwt = require('jsonwebtoken');

const { JWT } = require('../config');

const { algorithm, secret, accessTokenExpiryTime, refreshTokenExpiryTime } = JWT;

module.exports = {
  /**
   * Generates and returns a new JWT token.
   *
   * @param {string | Object | Buffer} accessTokenPayload
   * @param {string | Object | Buffer} refreshTokenPayload
   * @returns {{ access_token: string, expires_in: number, refresh_token: string }}
   */
  generateToken(accessTokenPayload, refreshTokenPayload) {
    // Generate access token
    const accessToken = jwt.sign(accessTokenPayload, secret, {
      algorithm,
      expiresIn: accessTokenExpiryTime,
    });

    // Generate refresh token
    const refreshToken = jwt.sign(refreshTokenPayload, secret, {
      algorithm,
      expiresIn: refreshTokenExpiryTime,
    });

    return {
      access_token: accessToken,
      expires_in: accessTokenExpiryTime,
      refresh_token: refreshToken,
    };
  },

  /**
   * Returns the decoded payload of a token.
   *
   * @param {string} token
   * @returns {any}
   */
  getDecodedToken(token) {
    return jwt.decode(token);
  },
};
