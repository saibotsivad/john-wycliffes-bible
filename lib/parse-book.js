const chapterHeading = /^CAP (\d+)$/
const verseLine = /^(\d+) (.*)/

module.exports = text => {
	let currentChapter = 0
	return text
		.split(/[\r\n]+/)
		.map(line => {
			const chapter = chapterHeading.exec(line)
			const verse = verseLine.exec(line)

			if (chapter) {
				currentChapter = parseInt(chapter[1], 10)
			} else if (verse) {
				return {
					chapter: currentChapter,
					verse: parseInt(verse[1], 10),
					text: verse[2]
				}
			}
		})
		.filter(Boolean)
}
