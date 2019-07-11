import check from 'express-validator';


const signup_validate = [
  check('first_name')
    .not()
    .isEmpty()
    .withMessage('First name is required')
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage('First name should be between 2 to 20 characters')
    .isAlpha()
    .withMessage('First name should contain alphabets only'),

  check('last_name')
    .not()
    .isEmpty()
    .withMessage('Last name is required')
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage('Last name should be between 2 to 20 characters')
    .isAlpha()
    .withMessage('Last name should contain alphabets only'),

  check('email')
    .not()
    .isEmpty()
    .withMessage('Your email is required')
    .trim()
    .isEmail()
    .withMessage('Email is not valid')
    .customSanitizer(email => email.toLowerCase()),

  check('password')
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .not()
    .isIn(['password', 'PASSWORD', 12345678, 87654321, 'qwerty'])
    .withMessage('Password is too simple')
    .trim()
    .isLength({ min: 6, max: 16 })
    .withMessage('Password must be atleast 8 to 100 characters')
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    .withMessage('Password must contain letters, a number and a character'),
];

module.exports = signup_validate;
