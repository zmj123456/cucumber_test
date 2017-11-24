@google

Feature: To verify whether user is able to login in RC CTI app

  @Automation
  @P1
  Scenario Outline: Login with DID/DL/company number
    Given user has valid account
    When user login with "<username>" and "<pwd>"
    Then user can login successuflly

    Examples:
      | username    | pwd      |
      | 18662135555 | Test!123 |
      | 18552026668 | Test!123 |


