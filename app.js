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
  password: 'pass123',
  port: 5432,
})

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/people', async (req, res)=>{
	let result;
	if(req.query.olderThan && req.query.ancestry) {
		result = await pool.query(`SELECT * FROM people WHERE age>'${req.query.olderThan}' AND ancestry='${req.query.ancestry}'`);
	} else if(req.query.youngerThan && req.query.ancestry) {
		result = await pool.query(`SELECT * FROM people WHERE age<'${req.query.youngerThan}' AND ancestry='${req.query.ancestry}'`);
	} else if(req.query.youngerThan) {
		result = await pool.query(`SELECT * FROM people WHERE age<'${req.query.youngerThan}'`);
	} else if(req.query.olderThan) {
		result = await pool.query(`SELECT * FROM people WHERE age>'${req.query.olderThan}'`);
	} else if(req.query.name) {
		result = await pool.query(`SELECT * FROM people WHERE name='${req.query.name}'`);
	} else if(req.query.ancestry) {
		result = await pool.query(`SELECT * FROM people WHERE ancestry='${req.query.ancestry}'`);
	} else {
		result = await pool.query("SELECT * FROM people");
	}
	res.json(result.rows);
});

app.get('/people', async (req, res)=>{
	const result = await pool.query("SELECT * FROM people");
	res.json(result.rows);
});

app.post('/people', async (req, res)=>{
	try {
		const result = await pool.query('INSERT INTO people (name, age, ancestry) VALUES ($1, $2, $3);', [req.body.name, req.body.age, req.body.ancestry]);
		res.json({success:true});
	} catch (e){
		res.status(400).json({success:false});
	}
});


app.put('/people/:id', async (req, res)=>{
	try {
    const id = req.params;
		const result = await pool.query('update  people set age = $1 where id = $2;', [req.body.age, id]);
		res.json({success:true});
	} catch (e){
		res.status(400).json({success:false});
	}
});
const PORT = process.env.PORT || 3000;
pool.connect(()=>{
	console.log('connected to postgres');
})
server = app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
module.exports = {app, server, pool} // this is so we can stop the server programmatically 

