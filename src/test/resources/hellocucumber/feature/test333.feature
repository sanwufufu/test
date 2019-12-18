Feature: test333
  Everybody wants to know when it's
  Background: connect to databae
  Given this is background

  @simpleDemo
  Scenario: Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  @simpleDemo
  Scenario: Friday222
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  @simpleDemo
  Scenario: Friday333
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "yes"


