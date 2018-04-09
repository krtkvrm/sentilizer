const weights = require('../data/weights.json')

// negators will flip the sentiment of input
var negators = {
    'cant': 1,
    'can\'t': 1,
    'dont': 1,
    'don\'t': 1,
    'doesnt': 1,
    'doesn\'t': 1,
    'not': 1,
    'non': 1,
    'wont': 1,
    'won\'t': 1,
    'isnt': 1,
    'isn\'t': 1,
    'wasnt': 1,
    'wasn\'t': 1
}

// return array of words
var tokenize = (text) => {
    return input
    .toLowerCase()
    .replace(/\n/g, ' ')
    .replace(/[.,\/#!$%\^&\*;:{}=_`\"~()]/g, '')
    .split(' ')
}