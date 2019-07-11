import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';

config();
const secretkey = process.env.SECRET;

class Authenticate {
/**
   * @description Generates token
   * @param {object} payload User details used
   * @param {string} secret Encryption key
   * @param {string} session Token's validity period
   * @returns {string} Unique access token
   */
  static generateToken(payload, secret = secretkey, session = '10d') {
    return jwt.sign(payload, secret, { expiresIn: session });
  }

  /**
       * @description  Verifies and decodes the access token
       * @param {string} token  Unique access token
       * @param {string} secret key
       * @returns {object} Deciphered token
       */
  static verifyToken(token, secret = secretkey) {
    return jwt.verify(token, secret);
  }

  /**
   * @description  Takes user input for password as plain text and hashes it
   * @param {string} password  string to be hashed
   */
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }
}


export default Authenticate;
