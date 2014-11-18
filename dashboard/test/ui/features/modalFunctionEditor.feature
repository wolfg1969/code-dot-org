Feature: Using the Modal Function Editor

Background:
  Given I am on "http://learn.code.org/s/course4/stage/12/puzzle/4?noautoplay=true"
  And I rotate to landscape
  Then element ".dialog-title" has text "Puzzle 4 of 11"
  And I press "x-close"
  Then element "#runButton" is visible
  And element "#resetButton" is hidden

Scenario: Create new function
  And I press ":2.label"
  And I press element with class "createFunction"
  Then element "#modalContainer" is visible
  And I delete all text from element "functionNameText"
  And I type "custom function" into element "functionNameText"
  Then evaluate JavaScript expression "Blockly.modalBlockSpace.findFunction('custom function') != null;"
  And I press "modalEditorClose"
  Then element "#modalContainer" is hidden

#Scenario: Open edit existing function
#Scenario: Close function editor (ensure all edits are saved)
#Scenario: Add params
#Scenario: Rename params
#Scenario: Delete params
#Scenario: Check for correct code generation
