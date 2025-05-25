import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
	js.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	{
		files: ["**/*.js", "**/*.vue"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
			},
		},
		rules: {
			indent: ["error", "tab"],
			"vue/html-self-closing": [
				"error",
				{
					html: {
						void: "always",
						normal: "never",
						component: "always",
					},
					svg: "always",
					math: "always",
				},
			],
			"vue/max-attributes-per-line": [
				"error",
				{
					singleline: {
						max: 1,
					},
					multiline: {
						max: 1,
					},
				},
			],
			semi: ["error", "always"],
			"spaced-comment": "off",
			"no-console": ["error", { allow: ["warn", "error"] }],
			"consistent-return": "off",
			"func-names": "off",
			"object-shorthand": "off",
			"no-process-exit": "off",
			"no-param-reassign": "off",
			"no-return-await": "off",
			"no-underscore-dangle": "off",
			"class-methods-use-this": "off",
			"prefer-destructuring": ["error", { object: true, array: false }],
			"no-unused-vars": [
				"error",
				{ argsIgnorePattern: "req|res|next|val|err" },
			],
			"vue/no-setup-props-destructure": "off",
			"vue/prop-name-casing": "off",
			"vue/require-default-prop": "off",
			"vue/require-prop-types": "off",
			"vue/no-template-shadow": "off",
		},
	},
	prettier,
	{ ignores: ["**/public/", "**/dist/", "**/node_modules/", "*.json"] },
];
