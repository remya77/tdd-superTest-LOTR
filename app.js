const express = require('express');
const app = express();
const pg = require('pg');
const client = new pg.Client({
	database:'supertest_lab'
});
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/people', async (req, res)=>{
	const result = await client.query("SELECT * FROM people");
	res.json(result.rows);
});

const PORT = process.env.PORT || 3000;
client.connect(()=>{
	console.log('connected to postgres');
})
server = app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
module.exports = {app, server, client} // this is so we can stop the server programmatically 

