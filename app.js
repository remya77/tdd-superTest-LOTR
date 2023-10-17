const express = require('express');
const app = express();
// const pg = require('pg');
// const client = new pg.Client({
// 	database:'supertest_lab'
// });

// imports the Pool object from the pg npm module, specifically
const Pool = require('pg').Pool 

// This creates a new connection to our database. Postgres listens on port 5432 by default
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'supertest_lab',
  password: 'postgres',
  port: 5432,
})

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/people', async (req, res)=>{
	const result = await pool.query("SELECT * FROM people");
	res.json(result.rows);
});

const PORT = process.env.PORT || 3000;
pool.connect(()=>{
	console.log('connected to postgres');
})
server = app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
module.exports = {app, server, pool} // this is so we can stop the server programmatically 

