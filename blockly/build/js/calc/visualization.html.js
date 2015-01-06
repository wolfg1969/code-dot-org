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
 buf.push('');1; var msg = require('../../locale/current/calc'); ; buf.push('\n\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgCalc">\n  <rect x="0" y="0" width="400" height="300" fill="#33ccff"/>\n  <rect x="0" y="300" width="400" height="100" fill="#996633"/>\n  <text x="0" y="30" class="calcHeader">', escape((6,  msg.yourExpression() )), '</text>\n  <g id="userExpression" class="expr" transform="translate(0, 250)">\n  </g>\n  <text x="0" y="330" class="calcHeader" id="goalHeader">', escape((9,  msg.goal() )), '</text>\n  <g id="answerExpression" class="expr" transform="translate(0, 350)">\n  </g>\n</svg>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());