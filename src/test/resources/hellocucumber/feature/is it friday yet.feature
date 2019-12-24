
Feature: Is it friday yet?
  Everybody wants to know when it's
  Background: connect to databae
  Given this is background

  @simpleDemo
  Scenario: sunday isn't friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  @simpleDemo
  Scenario: monday isn't friday
    Given today is Monday
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  @simpleDemo
  Scenario: friday is friday
    Given today is Friday
    When I ask whether it's Friday yet
    Then I should be told "yes"


