$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Operations.feature");
formatter.feature({
  "line": 1,
  "name": "Mathematical operation in windows CalC",
  "description": "",
  "id": "mathematical-operation-in-windows-calc",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5629333,
  "error_message": "java.util.InputMismatchException: Invalid browser type\r\n\tat com.test.automation.utilities.DriverUtils.getDriver(DriverUtils.java:41)\r\n\tat com.test.automation.stepdefinitions.Hooks.addDriverProperties(Hooks.java:46)\r\n\tat com.test.automation.stepdefinitions.Hooks.setup(Hooks.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\r\n\tat cucumber.api.cli.Main.run(Main.java:36)\r\n\tat com.test.automation.scripts.Main.main(Main.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:282)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 1367111,
  "error_message": "java.lang.NullPointerException\r\n\tat com.test.automation.utilities.DriverUtils.quitBrowser(DriverUtils.java:46)\r\n\tat com.test.automation.stepdefinitions.Hooks.tearDown(Hooks.java:54)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\r\n\tat cucumber.api.cli.Main.run(Main.java:36)\r\n\tat com.test.automation.scripts.Main.main(Main.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:282)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
});