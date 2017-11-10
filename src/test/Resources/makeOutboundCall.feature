@google

Feature: To verify user can make an outbound call

  @Automation
  @P1
  Scenario:
    Given user has login CTI app
    When user navigated to Dial Pad tab
    And user make an outbound call with "18662135555"
    Then callee can receive the call