import Model from '../models/query';
import Authenticate from '../authorization/authenticate';
import { successResponse, conflictResponse, internalErrREesponse } from '../utils/error-response';

class Users {
  static Model() {
    return new Model('users');
  }
  /**
   * @description User can Sign Up
   */

  static async signUp(req, res) {
    const {
      first_name, last_name, email, password,
    } = req.body;
    const hashedPassword = Authenticate.hashPassword(password);
    const columns = 'first_name, last_name, email, password';
    const values = `'${first_name}', '${last_name}', '${email}', '${hashedPassword}'`;
    const clause = 'RETURNING id, first_name, last_name, email, is_admin';

    try {
      const data = await Users.Model().insert(columns, values, clause);
      const { id, isAdmin } = data[0];
      const token = Authenticate.generateToken({ id, email, isAdmin });
      return successResponse(res, 201, { token, ...data[0] });
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return conflictResponse(res, 'User already exists');
      }
      return internalErrREesponse(res);
    }
  }
}

export default Users;
