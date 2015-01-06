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
 buf.push('');1;

var msg = require('../../locale/current/turtle');
// An early hack introduced some levelbuilder levels as page 5, level 7. Long
// term we can probably do something much cleaner, but for now I'm calling
// out that this level is special (on page 5).
var LEVELBUILDER_LEVEL = 7;

/*
TOOLBOX.

PAGE 1
======
Within this page, blocks are only added, never taken away.

Level 1 [el]: Adds draw_move_by_constant and draw_turn_by_constant.
Level 2 [coloured square]: Adds draw_colour with colour_picker.
level 3 [square in three blocks]: Adds controls_repeat.
level 4 [triangle] Adds draw_colour with colour_random.
Level 5 [overlapping square and triangle (sideways envelope)]
Level 6 [envelope]
Level 7 [glasses]
Level 8 [spikes]
Level 9 [circle]
Level 10 [free play]: draw_width_inline

PAGE 2
======
Categories are introduced, with contents of:
- Actions
  - draw_move with math_number
  - draw_turn with math_number
- Color
  - draw_colour (set colour) with colour_picker
  - draw_colour (set colour) with colour_random
- Functions (added at level 2)
  - [call] draw a square
  - [call] draw a snowball (added at level 9)
- Loops
  - controls_repeat
  - controls_for (added at level 6)
- Math
  - math_number
- Variables (added at level 6)
  - get counter (added at level 9)
  - get height (added at level 7)
  - get length (levels 6 and 10)
Level 1 [square]
Level 2 [square by function call]: add "draw a square"
Level 3 [3 squares]
Level 4 [36 squares]
Level 5 [nested squares without controls_for]
Level 6 [nested squares with controls_for]
Level 7 [mini-spiral]
Level 8 [3 snowmen]: add "draw a snowman"
Level 9 [snowman family]
Level 10 [free play]

PAGE 3
======
Categories are used, with contents of:
- Actions
  - draw_move with math_number
  - draw_turn with math_number
- Color
  - draw_colour (set colour) with colour_picker
  - draw_colour (set colour) with colour_random
- Functions (Replaced with custom category at level 2)
  - [call] draw a circle
  - [call] draw a square
- Loops
  - controls_for
  - controls_repeat
- Math
  - math_number
- Variables (added at level 6)
  - get counter
Variables and functions are manually added until Levels 7 and 8,
when the custom categories are used
Level 1 [call "draw a square"]
Level 2 [create and call "draw a triangle"]
Level 3 [use "draw a square" and "draw a triangle" to fence animals]
Level 4 [draw a house]
Level 5 [create and call "draw a house"]
Level 6 [add parameter to "draw a triangle"]
Level 7 [add parameter to "draw a house"]
Level 8 [modify end location of "create a house"]
Level 9 [call "draw a house" with for loop]
Level 10 [free play]

*/; buf.push('<xml id="toolbox" style="display: none;">\n  ');92; if (page == 1) {; buf.push('    <block type="draw_move_by_constant"></block>\n    <block type="draw_turn_by_constant');93; if (level <= 8) { ; buf.push('_restricted');93; } ; buf.push('">\n      <title name="VALUE">90</title>\n    </block>\n    ');96; if (level >= 2) {; buf.push('      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_picker"></block>\n        </value>\n      </block>\n    ');101; }; buf.push('    ');101; if (level >= 4) { /* Out of numeric order to make colour blocks adjacent. */; buf.push('      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_random"></block>\n        </value>\n      </block>\n    ');106; }; buf.push('    ');106; if (level >= 3) {; buf.push('      <block type="controls_repeat">\n        <title name="TIMES">4</title>\n      </block>\n    ');109; }; buf.push('    ');109; if (level == 10) {; buf.push('      <block id="draw-width" type="draw_width_inline" x="158" y="67">\n        <title name="WIDTH">1</title>\n      </block>\n    ');112; }; buf.push('  ');112; } else if (page == 2 || page == 3) {; buf.push('    ');112; // Actions: draw_move, draw_turn.
; buf.push('    <category id="actions" name="', escape((112,  msg.catTurtle() )), '">\n      <block type="draw_move">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n      </block>\n      ');120; if (page == 2 && level >= 8) {; buf.push('        <block type="jump">\n          <value name="VALUE">\n            <block type="math_number">\n              <title name="NUM">50</title>\n            </block>\n          </value>\n        </block>\n      ');127; }; buf.push('      <block type="draw_turn">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">90</title>\n          </block>\n        </value>\n      </block>\n      ');134; if (level == 10) {; buf.push('        <block id="draw-width" type="draw_width_inline">\n          <title name="WIDTH">1</title>\n        </block>\n      ');137; }; buf.push('    </category>\n    ');138; // Colour: draw_colour with colour_picker and colour_random.
; buf.push('    <category name="', escape((138,  msg.catColour() )), '">\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_picker"></block>\n        </value>\n      </block>\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_random"></block>\n        </value>\n      </block>\n    </category>\n    ');150; // Functions differ depending on page and level.
; buf.push('    ');150; if (page == 2 && level >= 2) {; buf.push('      <category name="', escape((150,  msg.catProcedures() )), '">\n        <block type="draw_a_square" inline="true">\n          <value name="VALUE">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n          </value>\n        </block>\n        ');158; if (level >= 8) {; buf.push('          <block type="draw_a_snowman" inline="true">\n            <value name="VALUE">\n              <block type="math_number">\n                <title name="NUM">100</title>\n              </block>\n            </value>\n          </block>\n        ');165; }; buf.push('      </category>\n    ');166; } else if (page == 3) {; buf.push('      ');166; if (level == 1) {; buf.push('        ');166; // Don't use custom category yet, since it allows function definition.
; buf.push('        <category name="', escape((166,  msg.catProcedures() )), '">\n          <block type="procedures_callnoreturn">\n            <mutation name="', escape((168,  msg.drawACircle() )), '"></mutation>\n          </block>\n          <block type="procedures_callnoreturn">\n            <mutation name="', escape((171,  msg.drawASquare() )), '"></mutation>\n          </block>\n        </category>\n      ');174; } else { ; buf.push('\n        <category name="', escape((175,  msg.catProcedures() )), '" custom="PROCEDURE"></category>\n      ');176; }; buf.push('    ');176; }; buf.push('    ');176; // Control: controls_for_counter (from page 2, level 6) and repeat.
; buf.push('    <category name="', escape((176,  msg.catControl() )), '">\n      ');177; if ((page == 2 && level >= 6) || (page == 3 && level >= 9)) {; buf.push('        <block type="controls_for_counter">\n          <value name="FROM">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <value name="TO">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n          </value>\n          <value name="BY">\n            <block type="math_number">\n              <title name="NUM">10</title>\n            </block>\n          </value>\n        </block>\n      ');194; }; buf.push('      <block type="controls_repeat">\n        <title name="TIMES">4</title>\n      </block>\n    </category>\n    ');198; // Math: Just number blocks until final level.
; buf.push('    <category name="', escape((198,  msg.catMath() )), '">\n      <block type="math_number"></block>\n      ');200; if (level == 10) {; buf.push('        <block type="math_arithmetic" inline="true"></block>\n        <block type="math_random_int">\n          <value name="FROM">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <value name="TO">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n        </value>\n      </block>\n      <block type="math_random_float"></block>\n    ');214; }; buf.push('    </category>\n    ');215; // Variables depends on page and level, although we never use the custom category
; buf.push('    ');215; // because we want to offer simplified getters and no setters.
; buf.push('    ');215; if (page == 2 && level >= 6) {; buf.push('      <category name="', escape((215,  msg.catVariables() )), '">\n        <block type="variables_get_counter"></block>\n      </category>\n    ');218; } else if (page == 3 && level >= 6 && level < 10) {; buf.push('      <category name="', escape((218,  msg.catVariables() )), '">\n        ');219; if (level >= 9) {; buf.push('          <block type="variables_get_counter"></block>\n        ');220; }; buf.push('        ');220; if (level >= 6) {; buf.push('          <block type="variables_get_length"></block>\n        ');221; }; buf.push('      </category>\n    ');222; } else if (page == 3 && level == 10) {; buf.push('      <category name="', escape((222,  msg.catVariables() )), '" custom="VARIABLE">\n      </category>\n    ');224; }; buf.push('  ');224; } else if (page == 4) {; buf.push('    ');224; // Actions: draw_move, draw_turn.
; buf.push('    <block type="draw_move_by_constant"></block>\n    <block type="draw_turn_by_constant">\n      <title name="VALUE">90</title>\n    </block>\n    ');228; if (level == 11) {; buf.push('    <block id="draw-width" type="draw_width_inline">\n      <title name="WIDTH">1</title>\n    </block>\n    ');231; }; buf.push('    ');231; // Colour: draw_colour with colour_picker and colour_random.
; buf.push('    <block id="draw-color" type="draw_colour">\n      <value name="COLOUR">\n        <block type="colour_picker"></block>\n      </value>\n    </block>\n    <block id="draw-color" type="draw_colour">\n      <value name="COLOUR">\n        <block type="colour_random"></block>\n      </value>\n    </block>\n    <block type="controls_repeat">\n      <title name="TIMES">4</title>\n    </block>\n  ');244; } else if (page == 5) {; buf.push('  ');244; // K1 simplified blocks for editor: keep in sync with Dashboard artist.rb
; buf.push('    ');244; if (level === LEVELBUILDER_LEVEL) {; buf.push('      <category name="K1 Simplified">\n        <block type="controls_repeat_simplified">\n          <title name="TIMES">5</title>\n        </block>\n        <block type="draw_colour_simple"></block>\n        <block type="simple_move_up"></block>\n        <block type="simple_move_down"></block>\n        <block type="simple_move_left"></block>\n        <block type="simple_move_right"></block>\n        <block type="simple_move_up_length"></block>\n        <block type="simple_move_down_length"></block>\n        <block type="simple_move_left_length"></block>\n        <block type="simple_move_right_length"></block>\n        <block type="simple_jump_up"></block>\n        <block type="simple_jump_down"></block>\n        <block type="simple_jump_left"></block>\n        <block type="simple_jump_right"></block>\n      </category>\n    ');262; }; buf.push('    ');262; // Actions: draw_move, draw_turn.
; buf.push('    <category id="actions" name="', escape((262,  msg.catTurtle() )), '">\n      <block type="draw_move">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n      </block>\n      <block type="jump">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">50</title>\n          </block>\n        </value>\n      </block>\n      <block type="draw_turn">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">90</title>\n          </block>\n        </value>\n      </block>\n      <block type="draw_pen"></block>\n      <block id="draw-width" type="draw_width_inline">\n        <title name="WIDTH">1</title>\n      </block>\n    </category>\n    ');289; // Colour: draw_colour with colour_picker and colour_random.
; buf.push('    <category name="', escape((289,  msg.catColour() )), '">\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_picker"></block>\n        </value>\n      </block>\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_random"></block>\n        </value>\n      </block>\n    </category>\n    ');301; // Functions
; buf.push('    <category name="', escape((301,  msg.catProcedures() )), '" custom="PROCEDURE"></category>\n    ');302; if (level === LEVELBUILDER_LEVEL) {; buf.push('    <category name="Prebuilt">\n      <block type="draw_a_triangle"></block>\n      <block type="draw_a_square_custom"></block>\n      <block type="draw_a_house"></block>\n      <block type="draw_a_flower"></block>\n      <block type="draw_a_snowflake"></block>\n      <block type="draw_a_snowman"></block>\n      <block type="draw_a_hexagon"></block>\n      <block type="draw_a_star"></block>\n      <block type="draw_a_robot"></block>\n      <block type="draw_a_rocket"></block>\n      <block type="draw_a_planet"></block>\n      <block type="draw_a_rhombus"></block>\n      <block type="draw_upper_wave"></block>\n      <block type="draw_lower_wave"></block>\n    </category>\n    ');318; }; buf.push('    ');318; // Control: controls_for_counter and repeat.
; buf.push('    <category name="', escape((318,  msg.catControl() )), '">\n      <block type="controls_for_counter">\n        <value name="FROM">\n          <block type="math_number">\n            <title name="NUM">1</title>\n          </block>\n        </value>\n        <value name="TO">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n        <value name="BY">\n          <block type="math_number">\n            <title name="NUM">10</title>\n          </block>\n        </value>\n      </block>\n      ');336; if (level < 6) {; buf.push('        <block type="controls_repeat">\n          <title name="TIMES">4</title>\n        </block>\n      ');339; } else {; buf.push('        <block type="controls_repeat_ext">\n          <value name="TIMES">\n            <block type="math_number">\n              <title name="NUM">10</title>\n            </block>\n          </value>\n        </block>\n      ');346; }; buf.push('    </category>\n  ');347; // Logic
; buf.push('    <category name="', escape((347,  msg.catLogic() )), '">\n      <block type="controls_if"></block>\n      <block type="logic_compare"></block>\n      <block type="logic_operation"></block>\n      <block type="logic_negate"></block>\n      <block type="logic_boolean"></block>\n      <block type="logic_null"></block>\n      <block type="logic_ternary"></block>\n    </category>\n    ');356; // Math: Just number blocks until final level.
; buf.push('    <category name="', escape((356,  msg.catMath() )), '">\n      <block type="math_number"></block>\n      <block type="math_arithmetic" inline="true"></block>\n      <block type="math_random_int">\n        <value name="FROM">\n          <block type="math_number">\n            <title name="NUM">1</title>\n          </block>\n        </value>\n        <value name="TO">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n      </block>\n      <block type="math_random_float"></block>\n     </category>\n    ');373; // Variables
; buf.push('    <category name="', escape((373,  msg.catVariables() )), '" custom="VARIABLE">\n    </category>\n  ');375; }; buf.push('</xml>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());