Feature: AEG File Parse Testing

  #Background:
    #Given User navigates to the application
    #And User click on the login link
  @Aeg 
  Scenario: AEG Fuel sheet is provided
    Given Upload AEG Fuel Sheet
    When  Parse the AEG Fuel sheet
    Then  Check fuel sheet for AEG price
   
  @Everest
  Scenario: Everest Fuel Sheet is provided
    Given Upload Everest Fuel Sheet
    When  Parse the Everest Fuel Sheet
    Then  Check fuel sheet for Everest price 

@Evo
  Scenario: Evo Fuel Sheet is provided
    Given Upload Evo Fuel Sheet
    When  Parse the Evo Fuel Sheet
    Then  Check fuel sheet for Evo price 
