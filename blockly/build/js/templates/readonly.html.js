module.exports= (function() {
  var t = function anonymous(locals, filters, escape, rethrow) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<!DOCTYPE html>\n<html dir="', escape((2,  options.localeDirection )), '">\n<head>\n  <meta charset="utf-8">\n  <title>Blockly</title>\n  <script type="text/javascript" src="', escape((6,  assetUrl('js/' + options.locale + '/vendor.js') )), '"></script>\n  <script type="text/javascript" src="', escape((7,  assetUrl('js/' + options.locale + '/' + app + '.js') )), '"></script>\n  <script type="text/javascript">\n    ');9; // delay to onload to fix IE9. 
; buf.push('\n    window.onload = function() {\n      ', escape((11,  app )), 'Main(', (11, filters. json ( options )), ');\n    };\n  </script>\n</head>\n<body>\n  <div id="blockly" class="readonly"></div>\n  <style>\n    html, body {\n      background-color: transparent;\n      margin: 0;\n      padding:0;\n      overflow: hidden;\n      height: 100%;\n      font-family: \'Gotham A\', \'Gotham B\', sans-serif;\n    }\n    .blocklyText, .blocklyMenuText, .blocklyTreeLabel, .blocklyHtmlInput,\n        .blocklyIconMark, .blocklyTooltipText, .goog-menuitem-content {\n      font-family: \'Gotham A\', \'Gotham B\', sans-serif;\n    }\n    #blockly>svg {\n      background-color: transparent;\n      border: none;\n    }\n    #blockly {\n      position: absolute;\n      top: 0;\n      left: 0;\n      overflow: hidden;\n      height: 100%;\n      width: 100%;\n    }\n  </style>\n</body>\n</html>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());