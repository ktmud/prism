/**
 * Golang text/template
 */
Prism.languages.gotmpl = Prism.languages.extend('markup', {
  'sentence': {
    pattern: /\{\{[\w\W]*?\}\}/g,
    inside: {
      'delimiter': /\{\{|\}\}/g,
      "string": /\".*?\"/,
      'comment': /\/\*[\w\W]*?\*\//g,
      'keyword': /\b(if|template|range|with|end|and|call|html|index|js|len|not)\b/g,
      'operator': /\b(eq|ne|lt|le|gt|ge)\b/g,
      'punctuation' : /[$.\(\)]/g
    }
  }
});
