Prism.languages.yaml = {
	'doctype': /^([\-]{3}|[\.]{3})/,
	'comment': {
		pattern: /(^|[^\\])#.*?(\r?\n|$)/g,
		lookbehind: true
	},
	'keyword': {
    pattern: /(?:\n)[ \t]*[\$\w\-\.]+?\s*:(\s+)/ig,
    inside: {
      'punctuation': /:/g
    }
  },
	'string' : /("|')(\\?.)*?\1/g,
	'number' : /\b-?(0x)?\d*\.?[\da-f]+\b/g,
	'boolean' : /\b(false|true|no|yes)\b/ig,
	'ignore' : /&(lt|gt|amp);/gi,
	'operator' : /\b[\>\|]\b/g,
	'entity': /&amp;#?[\da-z]{1,8}/gi,
	'punctuation' : /[{}[\];(),.:\-]/g,
};


