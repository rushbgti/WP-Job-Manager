module.exports = {
	root: true,
	extends: [
		'./eslint/config.js',
	],
	globals: {
		wpApiSettings: true,
	},
	rules: {
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ImportDeclaration[source.value=/^@wordpress\\u002F.+\\u002F/]',
				message: 'Path access on WordPress dependencies is not allowed.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^api-request$/]',
				message: 'Use @wordpress/api-request as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^blob$/]',
				message: 'Use @wordpress/blob as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^blocks$/]',
				message: 'Use @wordpress/blocks as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^components$/]',
				message: 'Use @wordpress/components as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^data$/]',
				message: 'Use @wordpress/data as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^date$/]',
				message: 'Use @wordpress/date as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^deprecated$/]',
				message: 'Use @wordpress/deprecated as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^dom$/]',
				message: 'Use @wordpress/dom as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^editor$/]',
				message: 'Use @wordpress/editor as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^element$/]',
				message: 'Use @wordpress/element as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^utils$/]',
				message: 'Use @wordpress/utils as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^edit-post$/]',
				message: 'Use @wordpress/edit-post as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^viewport$/]',
				message: 'Use @wordpress/viewport as import path instead.',
			},
			{
				selector: 'ImportDeclaration[source.value=/^plugins$/]',
				message: 'Use @wordpress/plugins as import path instead.',
			},
			{
				"selector": "ImportDeclaration[source.value=/^core-data$/]",
				"message": "Use @wordpress/core-data as import path instead."
			},
			{
				"selector": "ImportDeclaration[source.value=/^core-blocks$/]",
				"message": "Use @wordpress/core-blocks as import path instead."
			},
			{
				"selector": "ImportDeclaration[source.value=/^nux$/]",
				"message": "Use @wordpress/nux as import path instead."
			},
			{
				selector: 'CallExpression[callee.name=/^(invokeMap|get|has|hasIn|invoke|result|set|setWith|unset|update|updateWith)$/] > Literal:nth-child(2)',
				message: 'Always pass an array as the path argument',
			},
			{
				selector: 'CallExpression[callee.name=/^(__|_x|_n|_nx)$/] Literal[value=/\\.{3}/]',
				message: 'Use ellipsis character (…) in place of three dots',
			},
			{
				selector: 'ImportDeclaration[source.value="lodash"] Identifier.imported[name="memoize"]',
				message: 'Use memize instead of Lodash\'s memoize',
			},
			{
				selector: 'CallExpression[callee.object.name="page"][callee.property.name="waitFor"]',
				message: 'Prefer page.waitForSelector instead.'
			}
		],
	},
};
