Feature: Tag Login User

  @user1 @web
  Scenario: Login with blanck User
    # try
    Given I navigate to page "http://localhost:3001/ghost/"
    Then I enter "" into input field having id "ember8"
    Then I enter "Miso2021!" into input field having id "ember10"
    Then I click on element having id "ember12"

    # Expect to match "Please fill out the form to sign in. "
    Then I should see text "Please fill out the form to sign in. "

  @user2 @web
  Scenario: Login with blanck Password
    # try
    Given I navigate to page "http://localhost:3001/ghost/"
    Then I enter "jose@ghost.com" into input field having id "ember8"
    Then I enter "" into input field having id "ember10"
    Then I click on element having id "ember12"

    # Expect to match "Please fill out the form to sign in. "
    Then I should see text "Please fill out the form to sign in. "

  @user3 @web
  Scenario: Login with Invalid User and Password
    # try
    Given I navigate to page "http://localhost:3001/ghost/"
    Then I enter "jose@ghost.com" into input field having id "ember8"
    Then I enter "Miso2021!" into input field having id "ember10"
    Then I click on element having id "ember12"

    # Expect to match "Please fill out the form to sign in. "
    Then I should see text "Access denied. "
  
@user4 @web
  Scenario: Login Valid
    # Login
    Given I navigate to page "http://localhost:3001/ghost/"
    Then I enter "test@ghost.com" into input field having id "ember8"
    Then I enter "123456abc*" into input field having id "ember10"
    Then I click on element having id "ember12"

    # Expect to match "Please fill out the form to sign in. "
    Then I navigate to page "http://localhost:3001/ghost/#/site"

    # Execute logout
    Then I click on element having css selector ".gh-user-name.mb1"
    Then I click on element having css selector ".dropdown-item.user-menu-signout.ember-view"
