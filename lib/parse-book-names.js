module.exports = text => text
	.split(/[\r\n]+/)
	.filter(Boolean)
	.map(line => line.split(/\s-\s/))
	.map(([ name, filename ]) => ({
		name,
		normalized: filename.replace('.txt', '')
	}))
