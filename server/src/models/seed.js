/* eslint-disable no-console */
import pool from './connection';
import Authenticate from '../authorization/authenticate';


(async () => {
  try {
    console.log('Seeding table with data....');
    await pool.query(`INSERT INTO users (first_name, last_name, email, password) 
      VALUES ('Weje', 'Emmanuel', 'wejem@yahoo.com', '${Authenticate.hashPassword('password')}),
      ('David', 'Chuku', 'chuku.david@yahoo.com', '${Authenticate.hashPassword('password')}),
      ('Ikechuku', 'Ukpa', 'sir_ik@yahoo.com', '${Authenticate.hashPassword('password')})
      `);
  } catch (error) {
    console.log(error.message);
  }
})();
