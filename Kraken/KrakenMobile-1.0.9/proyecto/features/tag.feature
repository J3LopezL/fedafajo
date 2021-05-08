Feature: Tag creation

  @user1 @web
  Scenario: As a user I want to create a new (valid) Tag
    # Login
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "test@ghost.com" into input field having id "ember8"
    Then I enter "123456abc*" into input field having id "ember10"
    Then I click on element having id "ember12"

    # Execute createTag
    Then I click on element having id "ember31"
    Then I click on element having css selector ".ember-view.gh-btn.gh-btn-green"
    Then I enter "Tag completo" into input field having id "tag-name"
    Then I enter "tag-completo" into input field having id "tag-slug"
    Then I enter "Descripción de un tag completo" into input field having id "tag-description"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"

    # Expect to match "Saved"
    Then I should see text "Saved"

    # Execute listTags
    Then I click on element having css selector "[href^='#/tags/']"

    # Expect to match "tag-completo"
    Then I should see text "tag-completo"

    # Execute logout
    Then I click on element having css selector ".gh-user-name.mb1"
    Then I click on element having css selector ".dropdown-item.user-menu-signout.ember-view"

  @user2 @web
  Scenario: As a user I want to create a new (invalid - name with spaces) Tag
    # Login
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "test@ghost.com" into input field having id "ember8"
    Then I enter "123456abc*" into input field having id "ember10"
    Then I click on element having id "ember12"

    # Execute createTag
    Then I click on element having id "ember31"
    Then I click on element having css selector ".ember-view.gh-btn.gh-btn-green"
    Then I enter "     " into input field having id "tag-name"
    Then I enter "tag-con-espacios" into input field having id "tag-slug"
    Then I enter "Descripción de un tag con espacios en el nombre" into input field having id "tag-description"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"

    # Expect to match "You must specify a name for the tag."
    Then I should see text "You must specify a name for the tag."

    # Execute discardChanges
    Then I re-navigate to page "http://localhost:2368/ghost/#/tags/new"

    # Execute listTags
    Then I click on element having css selector "[href^='#/tags/']"

    # Expect not to match "tag-con-espacios"
    Then I should not see text "tag-con-espacios"

    # Execute logout
    Then I click on element having css selector ".gh-user-name.mb1"
    Then I click on element having css selector ".dropdown-item.user-menu-signout.ember-view"

  @user3 @web
  Scenario: As a user I want to create a new (invalid - empty name) Tag
    # Login
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "test@ghost.com" into input field having id "ember8"
    Then I enter "123456abc*" into input field having id "ember10"
    Then I click on element having id "ember12"

    # Execute createTag
    Then I click on element having id "ember31"
    Then I click on element having css selector ".ember-view.gh-btn.gh-btn-green"
    Then I enter "" into input field having id "tag-name"
    Then I enter "tag-vacio" into input field having id "tag-slug"
    Then I enter "" into input field having id "tag-description"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"

    # Expect to match "You must specify a name for the tag."
    Then I should see text "You must specify a name for the tag."

    # Execute discardChanges
    Then I re-navigate to page "http://localhost:2368/ghost/#/tags/new"

    # Execute listTags
    Then I click on element having css selector "[href^='#/tags/']"

    # Expect not to match "tag-vacio"
    Then I should not see text "tag-vacio"

    # Execute logout
    Then I click on element having css selector ".gh-user-name.mb1"
    Then I click on element having css selector ".dropdown-item.user-menu-signout.ember-view"

  @user4 @web
  Scenario: As a user I want to create a new (invalid - long description) Tag
    # Login
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "test@ghost.com" into input field having id "ember8"
    Then I enter "123456abc*" into input field having id "ember10"
    Then I click on element having id "ember12"

    # Execute createTag
    Then I click on element having id "ember31"
    Then I click on element having css selector ".ember-view.gh-btn.gh-btn-green"
    Then I enter "Tag con descripción inválida" into input field having id "tag-name"
    Then I enter "tag-descripcion-invalida" into input field having id "tag-slug"
    Then I enter "Fusce tortor velit, posuere sed efficitur vel, ultrices ut risus. Cras risus metus, mattis ut elit et, maximus sollicitudin purus. Pellentesque ultricies nec dolor a facilisis. Fusce ut auctor dolor. Pellentesque non luctus erat, a lobortis risus. Integer non tristique dui, sit amet volutpat leo. Aenean a tortor ut velit fringilla facilisis id et lorem. Donec ac ex diam. Aenean hendrerit dapibus urna sed cursus. Aenean leo tortor, volutpat vel purus at, bibendum fermentum diam. Etiam nunc dui, hendrerit sed scelerisque nec, imperdiet quis nisi. Sed tempus, eros vitae malesuada placerat, dolor libero feugiat nisi, non vulputate libero lorem non." into input field having id "tag-description"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"

    # Expect to match "You must specify a name for the tag."
    Then I should see text "You must specify a name for the tag."

    # Execute discardChanges
    Then I re-navigate to page "http://localhost:2368/ghost/#/tags/new"

    # Execute listTags
    Then I click on element having css selector "[href^='#/tags/']"

    # Expect not to match "tag-descripcion-invalida"
    Then I should not see text "tag-descripcion-invalida"

    # Execute logout
    Then I click on element having css selector ".gh-user-name.mb1"
    Then I click on element having css selector ".dropdown-item.user-menu-signout.ember-view"