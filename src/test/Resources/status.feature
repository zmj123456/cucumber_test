@google

Feature:
  @Automation @P1
  Scenario: Change status
    Given user has login CTI app 18552026668 and Test!123
    When user change status in calling setting
    Then user change status successful