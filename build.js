const fs = require('fs')
const path = require('path')

const parseBook = require('./lib/parse-book')
const parseBookNames = require('./lib/parse-book-names')

const fileMap = fs
	.readdirSync('./raw-text')
	.map(name => path.parse(name.toLowerCase()).name)
	.reduce((map, name) => {
		map[name] = fs.readFileSync(`./raw-text/${name}.txt`, { encoding: 'utf8' })
		return map
	}, {})

const bookNames = parseBookNames(fileMap.booknanes)
delete fileMap.booknanes

const cleanedAndParsed = Object
	.keys(fileMap)
	.reduce((map, filename) => {
		map[filename] = parseBook(fileMap[filename])
		return map
	}, {})

cleanedAndParsed.index = bookNames

Object
	.keys(cleanedAndParsed)
	.forEach(key => {
		fs.writeFileSync(
			`./dist/${key}.json`,
			JSON.stringify(cleanedAndParsed[key], undefined, 2),
			{ encoding: 'utf8' })
	})
