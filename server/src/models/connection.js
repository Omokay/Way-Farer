import { Pool, types } from 'pg';
import { config } from 'dotenv';

config();

types.setTypeParser(1700, value => parseFloat(value));


const pool = new Pool({
  connectionString: process.env.WayFarerDB_URL,
});

pool.on('connect', () => {
  // eslint-disable-next-line no-console
  console.log(`Connected to......${process.env.WayFarerDB_URL}`);
});


export default pool;
