import __headPart from '../parts/head';
import __constructorPart from '../parts/constructor'
import __propertiesPart from '../parts/properties'
import __methodsPart from '../parts/methods'
import __groupPart from '../parts/group'

export default function defaultTemplate(data) {
	return [
		__headPart(data),
		__constructorPart(data),
		__groupPart(data.filter((block) => {
			return block.setting === true;
		}), {
			title : 'Settings',
			description : "Here's the list of available settings that you can pass to the constructor"
		}),
		__propertiesPart(data),
		__methodsPart(data)
	].join("\n");
}
