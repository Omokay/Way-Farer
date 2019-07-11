/* eslint-disable no-console */
import '@babel/polyfill';
import pool from './connection';
import Authenticate from '../authorization/authenticate';


(async () => {
  try {
    console.log('Dropping user table...');
    await pool.query(`
    DROP TABLE IF EXISTS users CASCADE
    `);

    console.log('Creating user table...');
    await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      is_admin BOOLEAN DEFAULT false,
      created_on TIMESTAMP NOT NULL DEFAULT NOW()
    );
    `);

    console.log('Adding admin user...');
    await pool.query(`INSERT INTO users
    (first_name, last_name, email, password, isadmin)
    VALUES
    ($1, $2, $3, $4, $5)`,
    // eslint-disable-next-line no-sequences
    [`'Omoke', 'Chuku', 'omoke@admin.com', ${Authenticate.hashPassword('password'), true}`]);
  } catch (error) {
    console.log(error.message);
  }
})();
