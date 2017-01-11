import __headPart from '../parts/head';
import __constructorPart from '../parts/constructor'
import __groupPart from '../parts/group'
import __methodsPart from '../parts/methods'
import __propertiesPart from '../parts/properties'

import __classTag from '../tags/class'
import __exampleTag from '../tags/example'
import __authorTag from '../tags/author'
import __nameTag from '../tags/name'
import __bodyTag from '../tags/body'
import __paramsTag from '../tags/params'
import __typeTag from '../tags/type'
import __returnTag from '../tags/return'
import __defaultTag from '../tags/default'
import __seeTag from '../tags/see'

import __defaultTemplate from '../templates/default'
import __scssTemplate from '../templates/scss'

export default {
	language : 'js',
	tags : {
		class : __classTag,
		example : __exampleTag,
		author : __authorTag,
		name : __nameTag,
		body : __bodyTag,
		params : __paramsTag,
		type : __typeTag,
		return : __returnTag,
		default : __defaultTag,
		see : __seeTag
	},
 	parts : {
		head : __headPart,
		constructor : __constructorPart,
		group : __groupPart,
		properties : __propertiesPart,
		methods : __methodsPart
	},
	templates : {
		default : __defaultTemplate,
		scss : __scssTemplate
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
			Data : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date',
			Error : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error',
			JSON : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON',
			Map : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map',
			Math : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math',
			NaN : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/NaN',
			Number : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number',
			Promise : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise',
			Proxy : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy',
			RegExp : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp'
		}
	}
}
