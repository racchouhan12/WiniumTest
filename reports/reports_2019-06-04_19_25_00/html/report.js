$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Operations.feature");
formatter.feature({
  "line": 1,
  "name": "Mathematical operation in windows CalC",
  "description": "",
  "id": "mathematical-operation-in-windows-calc",
  "keyword": "Feature"
});
formatter.before({
  "duration": 70753879555,
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
  "duration": 2329562222,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 335550223,
  "error_message": "org.openqa.selenium.WebDriverException: Process has exited, so the requested information is not available. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 61 milliseconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027INAIRLT541061\u0027, ip: \u0027172.21.74.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.winium.WiniumDriver\nCapabilities [{app\u003dC:\\Windows\\System32\\calc.exe, args\u003d, innerPort\u003d9998, debugConnectToRunningApp\u003dfalse, keyboardSimulator\u003d1, launchDelay\u003d0, platform\u003dANY}]\nSession ID: AwesomeSession\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:670)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:516)\r\n\tat com.test.automation.utilities.DriverUtils.quitBrowser(DriverUtils.java:46)\r\n\tat com.test.automation.stepdefinitions.Hooks.tearDown(Hooks.java:54)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\r\n\tat cucumber.api.cli.Main.run(Main.java:36)\r\n\tat com.test.automation.scripts.Main.main(Main.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:282)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
});