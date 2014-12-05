
/**
 * @fileoverview Demonstration of Blockly: Minecraft
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

var msg = require('../../locale/current/minecraft');
var commonMsg = require('../../locale/current/common');
var blockUtils = require('../block_utils');
var utils = require('../utils');

var generateSetterCode = function (ctx, name) {
  var value = ctx.getTitleValue('VALUE');
  return 'Minecraft.' + name + '(\'block_id_' + ctx.id + '\', ' +
    value + ');\n';
};

// Install extensions to Blockly's language and JavaScript generator.
exports.install = function(blockly, blockInstallOptions) {
  var skin = blockInstallOptions.skin;
  var generator = blockly.Generator.get('JavaScript');
  blockly.JavaScript = generator;


  blockUtils.generateSimpleBlock(blockly, generator, {
    name: 'minecraft_log',
    helpUrl: 'http://google.com',
    title: "hello world", // TODO Localize
    tooltip: 'TODO Localize me', // TODO localize
    functionName: 'Minecraft.log'
  });


  function onSoundSelected(soundValue) {
    if (soundValue === 'random') {
      return;
    }
    BlocklyApps.playAudio(utils.stripQuotes(soundValue), {volume: 1.0});
  }

  blockly.Blocks.minecraft_playSound = {
    // Block for playing sound.
    helpUrl: '',
    init: function() {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
        .appendTitle('play sound')
        .appendTitle(new blockly.FieldDropdown(this.K1_SOUNDS, onSoundSelected), 'VALUE');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('play sound');
    }
  };

  blockly.Blocks.minecraft_playSound.K1_SOUNDS =
    [
      ['win', 'win'],
      ['start', 'start'],
      ['failure', 'failure']
    ];

  generator.minecraft_playSound = function() {
    return generateSetterCode(this, 'playSound');
  };

  var EARTH_GRAVITY = -0.0000035999998999614036;
  var GRAVITY_VAL =
    [
      ['Asteroid', (EARTH_GRAVITY / 20).toString()],
      ['Moon', (EARTH_GRAVITY / 2).toString()],
      ['Earth', (EARTH_GRAVITY).toString()],
      ['Venus', (EARTH_GRAVITY * 2).toString()],
      ['Jupiter', (EARTH_GRAVITY * 4).toString()]
    ];

  blockly.Blocks.minecraft_setGravity = {
    // Block for playing sound.
    helpUrl: '',
    init: function() {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
        .appendTitle('set gravity')
        .appendTitle(new blockly.FieldDropdown(GRAVITY_VAL), 'VALUE');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('set gravity');
    }
  };

  generator.minecraft_setGravity = function() {
    return generateSetterCode(this, 'setGravity');
  };

  var WALK_SPEED = 0.0056;
  var WALK_SPEEDS =
    [
      ['Crawl', (WALK_SPEED / 2).toString()],
      ['Walk', (WALK_SPEED).toString()],
      ['Run', (WALK_SPEED * 2).toString()],
      ['Sprint', (WALK_SPEED * 4).toString()],
      ['Super Sprint', (WALK_SPEED * 8).toString()]
    ];

  blockly.Blocks.minecraft_setSpeed = {
    helpUrl: '',
    init: function() {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
        .appendTitle('set speed')
        .appendTitle(new blockly.FieldDropdown(WALK_SPEEDS), 'VALUE');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('set speed');
    }
  };

  generator.minecraft_setSpeed = function() {
    return generateSetterCode(this, 'setSpeed');
  };

  generator.minecraft_setBlock = function() {
    var value = Blockly.JavaScript.valueToCode(this, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var x = Blockly.JavaScript.valueToCode(this, 'VALUE_X', Blockly.JavaScript.ORDER_NONE);
    var y = Blockly.JavaScript.valueToCode(this, 'VALUE_Y', Blockly.JavaScript.ORDER_NONE);
    var z = Blockly.JavaScript.valueToCode(this, 'VALUE_Z', Blockly.JavaScript.ORDER_NONE);
    return 'Minecraft.setBlock(' + value + ', ' + x + ', ' + y + ', ' + z + ', \'block_id_' + this.id + '\');\n';
  };

  var MINECRAFT_BLOCKS =
    [
      ['Empty', '0'],
      ['1', '1'],
      ['2', '2'],
      ['3', '3'],
      ['4', '4'],
      ['5', '5'],
      ['6', '6'],
      ['7', '7'],
      ['8', '8'],
      ['9', '9'],
      ['10', '10'],
      ['11', '11'],
      ['12', '12'],
      ['13', '13'],
      ['14', '14'],
      ['15', '15'],
      ['16', '16'],
      ['17', '17'],
      ['18', '18'],
      ['19', '19'],
      ['20', '20'],
      ['21', '21'],
      ['22', '22'],
      ['23', '23'],
      ['24', '24'],
      ['25', '25'],
      ['26', '26'],
      ['27', '27'],
      ['28', '28'],
      ['29', '29'],
      ['30', '30'],
      ['31', '31'],
      ['32', '32'],
      ['33', '33'],
      ['34', '34'],
      ['35', '35'],
      ['36', '36'],
      ['37', '37']
    ];

  blockly.Blocks.minecraft_setBlock = {
    helpUrl: '',
    init: function() {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
        .appendTitle('set block at');
      this.appendValueInput('VALUE_X');
      this.appendDummyInput()
        .appendTitle(',');
      this.appendValueInput('VALUE_Y');
      this.appendDummyInput()
        .appendTitle(',');
      this.appendValueInput('VALUE_Z');
      this.appendDummyInput()
        .appendTitle('to');
      this.appendValueInput('VALUE');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('set block');
      //this.setInputsInline(true);
    }
  };

  blockly.Blocks.minecraft_whenRightClick = {
    // Block to handle event where mouse is clicked
    helpUrl: '',
    init: function () {
      this.setHSV(140, 1.00, 0.74);
      this.appendDummyInput().appendTitle('when rightclick');
      this.setPreviousStatement(false);
      this.setNextStatement(true);
      this.setTooltip('when rightclick');
    }
  };

  blockly.Blocks.minecraft_whenLeftClick = {
    // Block to handle event where mouse is clicked
    helpUrl: '',
    init: function () {
      this.setHSV(140, 1.00, 0.74);
      this.appendDummyInput().appendTitle('when leftclick');
      this.setPreviousStatement(false);
      this.setNextStatement(true);
      this.setTooltip('when leftclick');
    }
  };

  generator.minecraft_whenRightClick = function () {
    // Generate JavaScript for handling click event.
    return '\n';
  };
  generator.minecraft_whenLeftClick = function () {
    // Generate JavaScript for handling click event.
    return '\n';
  };

  blockly.Blocks.minecraft_adjacent_target_x = {
    // adjacent target x.
    init: function () {
      this.setHSV(258, 0.35, 0.62);
      this.setOutput(true, 'Number');
      this.appendDummyInput()
        .appendTitle('adjacent x');
      this.setTooltip('adjacent x');
    }
  };

  generator.minecraft_adjacent_target_x = function () {
    // Generate JavaScript for handling click event.

    return ['Minecraft.getAdjacentTargetX()\n', Blockly.JavaScript.ORDER_ATOMIC];
  };

  blockly.Blocks.minecraft_adjacent_target_y = {
    // adjacent target y.
    init: function () {
      this.setHSV(258, 0.35, 0.62);
      this.setOutput(true, 'Number');
      this.appendDummyInput()
        .appendTitle('adjacent y');
      this.setTooltip('adjacent y');
    }
  };

  generator.minecraft_adjacent_target_y = function () {
    // Generate JavaScript for handling click event.
    return ['Minecraft.getAdjacentTargetY()\n', Blockly.JavaScript.ORDER_ATOMIC];
  };

  blockly.Blocks.minecraft_adjacent_target_z = {
    // adjacent target z.
    init: function () {
      this.setHSV(258, 0.35, 0.62);
      this.setOutput(true, 'Number');
      this.appendDummyInput()
        .appendTitle('adjacent z');
      this.setTooltip('adjacent z');
    }
  };

  generator.minecraft_adjacent_target_z = function () {
    // Generate JavaScript for handling click event.
    return ['Minecraft.getAdjacentTargetZ()\n', Blockly.JavaScript.ORDER_ATOMIC];
  };


  blockly.Blocks.minecraft_selected_target_x = {
    // selected target x.
    init: function () {
      this.setHSV(258, 0.35, 0.62);
      this.setOutput(true, 'Number');
      this.appendDummyInput()
        .appendTitle('selected x');
      this.setTooltip('selected x');
    }
  };

  generator.minecraft_selected_target_x = function () {
    // Generate JavaScript for handling click event.

    return ['Minecraft.getSelectedTargetX()\n', Blockly.JavaScript.ORDER_ATOMIC];
  };

  blockly.Blocks.minecraft_selected_target_y = {
    // selected target y.
    init: function () {
      this.setHSV(258, 0.35, 0.62);
      this.setOutput(true, 'Number');
      this.appendDummyInput()
        .appendTitle('selected y');
      this.setTooltip('selected y');
    }
  };

  generator.minecraft_selected_target_y = function () {
    // Generate JavaScript for handling click event.
    return ['Minecraft.getSelectedTargetY()\n', Blockly.JavaScript.ORDER_ATOMIC];
  };

  blockly.Blocks.minecraft_selected_target_z = {
    // selected target z.
    init: function () {
      this.setHSV(258, 0.35, 0.62);
      this.setOutput(true, 'Number');
      this.appendDummyInput()
        .appendTitle('selected z');
      this.setTooltip('selected z');
    }
  };

  generator.minecraft_selected_target_z = function () {
    // Generate JavaScript for handling click event.
    return ['Minecraft.getSelectedTargetZ()\n', Blockly.JavaScript.ORDER_ATOMIC];
  };

};
