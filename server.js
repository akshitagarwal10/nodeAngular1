const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app =express();


const port = process.env.PORT || 3000;


const wordsFreq = require('./lib/wordsFreq');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/getFreq', wordsFreq);


app.listen(port, function(){
	console.log('server running on 3000...');
});