const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = 'TTT text to read.txt';



router.get('/:input', function(req, res){
	wordsFreqObject = {};
	arrOfobjects = [];
	finalObject = [];
	fs.readFile(file, 'utf-8', function(err, text){
		if (err) throw err;
		words = text.split(/[\s?.<>:–@/(,)";]+/);
		words.forEach(function(word){
			if(!wordsFreqObject.hasOwnProperty(word)){
				wordsFreqObject[word] = 1;
			}
			else
				wordsFreqObject[word]++;
		})
		// console.log(req.body.input);
		arrOfWords = Object.keys(wordsFreqObject);
		arrOfWords.forEach(function(word){
			arrOfobjects.push({'word': word, 'count': wordsFreqObject[word]});
		})
		arrOfobjects.sort(sortFunc);
		finalObject = arrOfobjects.splice(0, req.params.input);
		res.send(finalObject);
	})
})


function sortFunc(a,b) {
  if (a.count < b.count)
    return 1;
  if (a.count > b.count)
    return -1;
  return 0;
}

module.exports = router;