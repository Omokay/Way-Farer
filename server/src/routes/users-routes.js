import { Router } from 'express';
import users from '../controllers/user-controller';
import Validate from '../authorization/authenticate';
import signup from '../controllers/user-controller';

const routes = Router();
const signup = users;
const { validate, checkValidationResult } = Validate;


// route for user can signup feature
routes.post('/signup', validate('signup'), checkValidationResult, signup);
