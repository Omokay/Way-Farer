import pool from './connection';

class Model {
  constructor(table) {
    this.table = table;
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }

  async select(columns, clause) {
    const query_string = `SELECT ${columns} FROM ${this.table} ${clause}`;
    const data = await this.pool.query(query_string);
    return data.rows;
  }

  async insert(columns, values, clause) {
    const query_string = `INSERT INTO ${this.table}(${columns}) VALUES(${values}) ${clause}`;
    const data = await this.pool.query(query_string);
    return data.rows;
  }

  async update(columns, clause) {
    const query_string = `UPDATE ${this.table} SET ${columns} ${clause}`;
    const data = await this.pool.query(query_string);
    return data.rows;
  }

  async delete(clause) {
    const query_string = `DELETE FROM ${this.table} ${clause}`;
    const data = await this.pool.query(query_string);
    return data.rows;
  }
}

export default Model;