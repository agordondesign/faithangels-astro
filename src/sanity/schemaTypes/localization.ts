// ./src/sanity/schemaTypes/category.ts
import { defineField, defineType } from 'sanity';

export const localizationType = defineType({
	name: 'localization',
	type: 'document',
	fields: [
		defineField({
			title: 'Language Translation',
			name: 'translation',
			type: 'string',
			options: {
				list: [
					{ title: 'English', value: 'en' },
					{ title: 'French', value: 'fr' },
				],
				layout: 'radio',
			},
		}),
	],
});
