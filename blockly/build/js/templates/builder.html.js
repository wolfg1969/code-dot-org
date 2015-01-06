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
 buf.push('<div><span>Instructions: </span><textarea type="text" name="instructions"></textarea></div>\n<div><span>Level Name: </span><textarea type="text" name="level_name"></textarea></div>\n<button id="create-level-button" class="launch">\n  Create Level\n</button>\n<div id="builder-error"></div>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());