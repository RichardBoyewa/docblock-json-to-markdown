# Coffeekraken Docblock JSON to Markdown <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<a href="https://travis-ci.org/Coffeekraken/docblock-json-to-markdown">
		<img src="https://img.shields.io/travis/Coffeekraken/docblock-json-to-markdown.svg?style=flat-square" />
	</a>
	<a href="https://www.npmjs.com/package/coffeekraken-docblock-json-to-markdown">
		<img src="https://img.shields.io/npm/v/coffeekraken-docblock-json-to-markdown.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/docblock-json-to-markdown/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-docblock-json-to-markdown.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/docblock-json-to-markdown">
		<img src="https://img.shields.io/npm/dt/coffeekraken-docblock-json-to-markdown.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/docblock-json-to-markdown">
		<img src="https://img.shields.io/github/forks/coffeekraken/docblock-json-to-markdown.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/docblock-json-to-markdown">
		<img src="https://img.shields.io/github/stars/coffeekraken/docblock-json-to-markdown.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

This package gives you the ability transform with ease a coffeekraken-docblock-parser resulting JSON into a beautiful markdown file.

## Table of content

1. [Install](#readme-install)
2. [Get Started](#readme-get-started)
3. [Documentation](#readme-documentation)
3. [Contribute](#readme-contribute)
4. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
5. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
npm install git+ssh://git@github.com:Coffeekraken/docblock-json-to-markdown.git#release/0.0.1 --save-dev
```

<a name="readme-get-started"></a>
## Get Started

First, require the package in your javascript node file like so:

```js
const docblockJSONToMarkdown = require('coffeekraken-docblock-json-to-markdown');
// use the package like so:
const markdown = docblockJSONToMarkdown(config).jsonToMarkdown(myCoolJSON);
```

<a id="readme-documentation"></a>
## Documentation

### Config

Here's the configuration object that you can hook as needed:

```js
{
	language : 'js', // Specify the language that is being processed like "js, scss, etc..."
	tags : {
		// all the tags render functions
		author : (author) => {
			return `- Author : ${author}`
		},
		// etc...
	},
	templates : {
		// all the templates render functions
		default : __defaultTemplate,
		// etc...
	},
	types : {
		// all the types URL for each languages like so:
		js : {
			HTMLElement : 'https://developer.mozilla.org/fr/docs/Web/API/HTMLElement',
			// etc...
  		},
		scss : {
			// ...
		}
	}
}
```

### Supported tags

Here's the list of supported docblock tags out of the box. You can register new tags as well.

- ```author``` : Specify the author
- ```body``` : Specify the body content of the docblock. It's usually taken automatically from the first non tagged content
- ```default``` : Specify the default value for a property.
- ```example```	: Specify an example.
	- Usage :
```
@example 	{language}
your code here...
```
- ```extends``` : Specify the parent class
- ```name``` : Specify the name of the item.
- ```params``` : Specify the parameters for the function
	- Usage :
```
@param 		{String} 	myCoolParam 		A cool param
@param 		{Integer} 	[otherParam=2] 		Another optional param
```
- ```return``` : Specify the returned value
	- Usage :
```
@return 	{String} 		The cool returned value
```
- ```see``` : Specify a url for more info
	- Usage :
```
@see 	http://google.com	{optionalLabel}
```
- ```static``` : Specify if the documented property/function is a static one.
- ```type``` : Specify the type of the documented property.
	- Usage :
```
@type 		{String|Boolean}
```
- ```values``` : Specify the possible values for the documented element
	- Usage :
```
@values 	Hello|World
```
- ```event``` : Specify if the docblock document an event or not
	- Usage :
```
@name 	my-cool-event
@event
etc...
```

### Types

In the config object, you will find the "types" property. This property represent an object by language that simply map a type with a URL where you can find more info on this type.

Here's the available out of the box types:

```js
{
	types : {
		js : {
			HTMLElement : 'https://developer.mozilla.org/fr/docs/Web/API/HTMLElement',
			HTMLLinkElement : 'https://developer.mozilla.org/fr/docs/Web/API/HTMLLinkElement',
			String : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String',
			Array : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array',
			Object : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object',
			Function : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function',
			Boolean : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean',
			Date : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date',
			Error : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error',
			JSON : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON',
			Map : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map',
			Math : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math',
			NaN : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/NaN',
			Number : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number',
			Promise : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise',
			Proxy : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy',
			RegExp : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp'
		},
		scss : {
			List : 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists',
			String : 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings',
			Map : 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps',
			Color : 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors',
			Function : 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#functions',
			Mixin : 'http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins'
		}
	}
}
```

### Add/Override a tag display

You can through the config add or override how a specific tag will be printed out in your final markdown file. Here's how:

```js
const docblockJSONToMarkdown = require('coffeekraken-docblock-json-to-markdown');
// make a custom config
const config = {
	tags : {
		example : (exampleData) => {
			// make your own display
			return `
				### Example
				\`\`\`${exampleData.language}
				${exampleData.body}
				\`\`\`
			`;
		},
		myCoolTag : (tagData) => {
			// return something for you new cool tag
		}
	}
};
// use the package like so:
const markdown = docblockJSONToMarkdown(config).jsonToMarkdown(myCoolJSON);
```

### Custom templates

Templates are the backbone of the outputed markdown file. It describe which tags will be displayed in which order, etc...
Here's the default template:

```js
export default function defaultTemplate(data) {
	return [
		this._config.parts.group(data.filter((block, index) => {
			return index === 0 && block.name && ! block.private && ! block.protected;
		}), {
			title : '@[0].name',
			titleLevelAdd : 1,
			doNotRender : ['name']
		}),
		this._config.parts.group(data.filter((block) => {
			return block.constructor === true;
		}), {
			doNotRender : ['name'],
			title : 'Constructor'
		}),
		this._config.parts.group(data.filter((block) => {
			return ! block.event && block.styleguide !== undefined;
		}), {
			title : 'Examples',
			description : "Here's some usage examples."
		}),
		this._config.parts.group(data.filter((block) => {
			return ! block.event && block.prop !== undefined;
		}), {
			title : 'Attributes',
			description : "Here's the list of available attribute to set on the element."
		}),
		this._config.parts.group(data.filter((block) => {
			return ! block.event && block.setting !== undefined;
		}), {
			title : 'Settings',
			description : "Here's the list of available settings."
		}),
		this._config.parts.group(data.filter((block) => {
			return ! block.event && ! block.return && block.types !== undefined && ! block.private && ! block.protected;
		}), {
			title : 'Properties'
		}),
		this._config.parts.group(data.filter((block) => {
			return ! block.event && ! block.types && ! block.private && ! block.protected;
		}), {
			title : 'Methods'
		}),
		this._config.parts.group(data.filter((block) => {
			return block.event && ! block.private && ! block.protected;
		}), {
			title : 'Events'
		})
	].join("\n");
}
```

#### Register/override a new template

You can register or override any template like so:

```js
const docblockJSONToMarkdown = require('coffeekraken-docblock-json-to-markdown');
// make a custom config
const config = {
	templates : {
		jsx : (data) => {
			return [
				this.renderBlocks(data.filter((block) => {
					return block.constructor === true;
				}), {
					doNotRender : ['name'],
					title : 'Constructor'
				})
			].join("\n");
		}
	}
};
// use the package like so:
const markdown = docblockJSONToMarkdown(config).jsonToMarkdown(myCoolJSON);
```

> The template index has to be the language extension of the file processed.

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
