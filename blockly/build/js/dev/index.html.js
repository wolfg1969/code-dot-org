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
 buf.push('<h2>Apps:</h2>\n<ul>\n  <li><a href="/maze?locale=en_us&dir=ltr&level=2_1&skin=pvz">Maze</a></li>\n  <li><a href="/maze?locale=en_us&dir=ltr&level=k1_demo&skin=pvz">Maze K1</a></li>\n  <li><a href="/turtle?locale=en_us&dir=ltr&level=1_1&skin=artist">Turtle</a></li>\n  <li><a href="/turtle?locale=en_us&dir=ltr&level=k1_demo&skin=artist">Turtle K1</a></li>\n  <li><a href="/bounce?locale=en_us&dir=ltr&level=12&skin=bounce">Bounce</a></li>\n  <li><a href="/flappy?locale=en_us&dir=ltr&level=11&skin=flappy">Flappy</a></li>\n  <li><a href="/flappy?locale=en_us&dir=ltr&level=k1&skin=flappy">Flappy K1</a></li>\n  <li><a href="/studio?locale=en_us&dir=ltr&level=full_sandbox&skin=studio">Studio</a></li>\n  <li><a href="/jigsaw?locale=en_us&dir=ltr&level=1&skin=jigsaw">Jigsaw</a></li>\n  <li><a href="/calc?locale=en_us&dir=ltr&level=example1&skin=calc">Calc</a></li>\n  <li><a href="/webapp?locale=en_us&dir=ltr&level=simple&skin=webapp">Webapp</a></li>\n</ul>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());