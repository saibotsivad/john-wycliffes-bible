# John Wycliffes Bible

The Wycliffe Bible translation, in a programmatically usable JSON format.

The [raw text](./raw-text) was originally sourced from
[here](http://wesley.nnu.edu/fileadmin/imported_site/biblical_studies/wycliffe/).

## JSON Files

All JSON files are constructed programmatically from the raw text, and placed
inside the [dist](./dist) folder.

### Book List

There is an [index of books](./dist/index.json) that you can use
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

### Book File

You can use the `normalized` property of the index to get the book file,
e.g. [dist/paralipomenon1.json](./dist/paralipomenon1.json) to
get 1 Chronicles.

Each book file is an array of objects containing the following properties:

* `chapter` *(number)* The chapter number.
* `verse` *(number)* The verse number.
* `text` *(string)* The text of the verse.

An example object looks like this:

```json
{
	"chapter": 1,
	"verse": 3,
	"text": "Enoch, Matussale, Lameth;"
}
```

## License

As best as I can tell, the Wycliffe translation is in the public domain.

Any original work in this repository is released
under the [Very Open License](http://veryopenlicense.com):

	Very Open License (VOL)

	The contributor(s) to this creative work voluntarily grant permission
	to any individual(s) or entities of any kind
	- to use the creative work in any manner,
	- to modify the creative work without restriction,
	- to sell the creative work or derivatives thereof for profit, and
	- to release modifications of the creative work in part or whole under any license
	with no requirement for compensation or recognition of any kind.
