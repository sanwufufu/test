Feature: Is it monday right?
  Scenario: Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"

