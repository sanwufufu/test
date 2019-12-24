$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:hellocucumber/feature/is%20it%20friday%20yet.feature");
formatter.feature({
  "name": "Is it friday yet?",
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
  "location": "steps.backGround()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "sunday isn\u0027t friday",
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
  "location": "steps.today_is_Sunday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "steps.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.i_should_be_told(String)"
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
  "location": "steps.backGround()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "monday isn\u0027t friday",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simpleDemo"
    }
  ]
});
formatter.step({
  "name": "today is Monday",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.today_is_Monday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "steps.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:hellocucumber/feature/test.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@simpleDemo"
    }
  ]
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
  "location": "steps.today_is_Sunday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "steps.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});