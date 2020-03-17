import { Pool } from './node_modules/pg';
import dotenv from './node_modules/dotenv';

dotenv.config();

let pool = {};
pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
pool.on('connect', () => {
  console.log('connected to the development db');
});
if (process.env.NODE_ENV === 'testing') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  pool.on('connect', () => {
    console.log('connected to the tests db');
  });
}
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  pool.on('connect', () => {
    console.log('connected to the production db');
  });
}
export default pool;
