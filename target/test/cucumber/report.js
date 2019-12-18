$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:hellocucumber/feature/test1.feature");
formatter.feature({
  "name": "test1",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "testfriday",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simpleDemo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "today is Sunday",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.today_is_Sunday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:hellocucumber/feature/test333.feature");
formatter.feature({
  "name": "test333",
  "description": "  Everybody wants to know when it\u0027s",
  "keyword": "Feature"
});
formatter.background({
  "name": "connect to databae",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "this is background",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.backGround()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Friday",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simpleDemo"
    }
  ]
});
formatter.step({
  "name": "today is Sunday",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.today_is_Sunday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "connect to databae",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "this is background",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.backGround()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Friday222",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simpleDemo"
    }
  ]
});
formatter.step({
  "name": "today is Sunday",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.today_is_Sunday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "connect to databae",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "this is background",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.backGround()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Friday333",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simpleDemo"
    }
  ]
});
formatter.step({
  "name": "today is Sunday1",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.i_should_be_told(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});