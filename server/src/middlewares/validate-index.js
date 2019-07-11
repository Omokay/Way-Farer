import validationResult from 'express-validator';
import validate_signup from './signup-validate';
import badRequestResponse from '../utils/error-response';

class Validation {
  static validate(info) {
    switch (info) {
      case 'signup':
        return validate_signup;

      default:
        return [];
    }
  }

  static checkValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return badRequestResponse(res, errors.array()[0].msg);
  }
}


export default Validation;
