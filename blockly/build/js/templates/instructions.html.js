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
 buf.push('');1; var msg = require('../../locale/current/common'); ; buf.push('\n\n<p class=\'dialog-title\'>', escape((3,  msg.puzzleTitle(locals) )), '</p>\n');4; if (locals.instructions) {; buf.push('  <p>', escape((4,  locals.instructions )), '</p>\n');5; };; buf.push('');5; if (locals.aniGifURL) {; buf.push('  <img class="aniGif example-image" src=\'', escape((5,  locals.aniGifURL )), '\'/>\n');6; };; buf.push(''); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());