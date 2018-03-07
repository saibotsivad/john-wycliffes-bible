# john-wycliffes-bible

The Wycliffe Bible translation, in a programmatically usable JSON format.

The [raw text](./raw-text) was originally sourced from
[here](http://wesley.nnu.edu/fileadmin/imported_site/biblical_studies/wycliffe/).

## json files

All JSON files are constructed programmatically from the raw text, and placed
inside the [build][./build] folder.

### book list

There is an [index of books](./build/index.json) that you can use
to list books or whatnot. That file is an array of objects like this:

```json
{
	"name": "1 Paralipomenon",
	"normalized": "paralipomenon1"
}
```

#### `name` *(string, required)*

The name of the book, as translated in the Wycliffe version.

#### `normalized` *(string, required)*

The normalized name of the book, which serves as the reference to
the JSON file.

### book file

You can use the `normalized` property of the index to get the book file,
e.g. [build/paralipomenon1.json](./build/paralipomenon1.json) to
get 1 Chronicles.

Each book file is an abstract syntax tree, an array containing objects
describing sections of the book.

An example object looks like this:

```json
{
	"type": "paragraph text",
	"position": {
		"chapter": 1,
		"section": 1,
		"verse": 8
	},
	"value": "The sones of Cham weren Chus, and Mesraym, Phuth, and Chanaan."
}
```

Each AST object may contain the following properties:

#### `type` *(string, required)*

Denotes the block type. Will be one of the following:

* `paragraph start`
* `paragraph text`
* `paragraph end`

#### `position` *(object)*

Denotes the position of the block within the book.

The position object may contain the following properties:

* `chapter` *(integer)*
* `section` *(integer)*
* `verse` *(integer)*

#### `value` *(string)*

The actual text of this section, if present.

## license

As best as I can tell, the Wycliffe translation is in the public domain.

The code and final built output of this repository are released
under the [Very Open License](http://veryopenlicense.com):

	Very Open License (VOL)

	The contributor(s) to this creative work voluntarily grant permission
	to any individual(s) or entities of any kind
	- to use the creative work in any manner,
	- to modify the creative work without restriction,
	- to sell the creative work or derivatives thereof for profit, and
	- to release modifications of the creative work in part or whole under any license
	with no requirement for compensation or recognition of any kind.
