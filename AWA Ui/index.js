const express    = require('express');
const bodyParser = require('body-parser')
const fs         = require('fs');
const sqlite3    = require('sqlite3');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('', express.static(__dirname + '/htdocs'));



app.post('/api/delete-activity/:id', (req, res) => {
	console.log('got delete request');
	if (req.body.pw !== 'awa') {
		console.log('wrong password!');
		res.end();
		return;
	}

	res.end();
});



app.listen(3000, () => {
	console.log('listening on port 3000');
});
