import __groupPart from '../parts/group'

import __exampleTag from '../tags/example'
import __extendsTag from '../tags/extends'
import __authorTag from '../tags/author'
import __nameTag from '../tags/name'
import __bodyTag from '../tags/body'
import __paramsTag from '../tags/params'
import __typesTag from '../tags/types'
import __returnTag from '../tags/return'
import __defaultTag from '../tags/default'
import __seeTag from '../tags/see'
import __staticTag from '../tags/static'


import __defaultTemplate from '../templates/default'
import __scssTemplate from '../templates/scss'
import __jsTemplate from '../templates/js'

export default {
	language : 'js',
	tags : {
		example : __exampleTag,
		extends : __extendsTag,
		author : __authorTag,
		name : __nameTag,
		body : __bodyTag,
		params : __paramsTag,
		type : __typesTag,
		types : __typesTag,
		return : __returnTag,
		default : __defaultTag,
		see : __seeTag,
		static : __staticTag
	},
 	parts : {
		group : __groupPart
	},
	templates : {
		default : __defaultTemplate,
		scss : __scssTemplate,
		js : __jsTemplate
	},
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
