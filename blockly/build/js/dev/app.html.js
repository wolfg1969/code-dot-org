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
 buf.push('<!DOCTYPE html>\n<html dir="', escape((2,  options.localeDirection )), '">\n  <head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />\n  <title>Blockly App - ', escape((6,  app )), ': ', escape((6,  options.levelId )), '</title>\n</head>\n<body>\n  <link rel="stylesheet" type="text/css" href="../css/common.css">\n  <link rel="stylesheet" type="text/css" href="../css/', escape((10,  app )), '.css">\n\n');12; if ((app === "maze" && options.levelId.indexOf('3_') === 0) ||
       (app === "webapp" && options.levelId.indexOf('ec_') === 0) ||
       (app === "studio" && options.levelId.indexOf('ec_') === 0) ||
       (app === "turtle" && options.levelId.indexOf('ec_') === 0)) {; buf.push('  ');15; if (options.debugInterpreter) {; buf.push('    <script type="text/javascript" src="../js/jsinterpreter/acorn.js"></script>\n    <script type="text/javascript" src="../js/jsinterpreter/interpreter.js"></script>\n  ');17; } else {; buf.push('    <script type="text/javascript" src="../js/jsinterpreter/acorn_interpreter.js"></script>\n  ');18; }; buf.push('  <script type="text/javascript" src="../js/requirejs/require.js"></script>\n  <script type="text/javascript" src="../js/ace/ace.js"></script>\n  <script type="text/javascript" src="../js/ace/ext-language_tools.js"></script>\n  <script type="text/javascript" src="../js/droplet/droplet-full.min.js"></script>\n  <link rel="stylesheet" type="text/css" href="../css/droplet/droplet.min.css">\n');23; } else {; buf.push('  <script type="text/javascript" src="../js/', escape((23,  options.locale )), '/vendor.js"></script>\n');24; }; buf.push('\n  <script type="text/javascript" src="../js/', escape((25,  options.locale )), '/', escape((25,  app )), '.js"></script>\n  <script type="text/javascript">\n    ', escape((27,  app )), 'Main(', (27, filters. json ( options )), ');\n  </script>\n  <div id="blocklyApp"></div>\n  <script type="text/javascript" src="chrome34Workaround.js"></script>\n</body>\n</html>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());