$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Operations.feature");
formatter.feature({
  "line": 1,
  "name": "Mathematical operation in windows CalC",
  "description": "",
  "id": "mathematical-operation-in-windows-calc",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2719162667,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Addition of two number",
  "description": "",
  "id": "mathematical-operation-in-windows-calc;addition-of-two-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@foo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I add two numbers \"Eight\" and \"Nine\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Eight",
      "offset": 19
    },
    {
      "val": "Nine",
      "offset": 31
    }
  ],
  "location": "AppHomeSteps.java:11"
});
formatter.result({
  "duration": 2206322667,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2223816889,
  "status": "passed"
});
});