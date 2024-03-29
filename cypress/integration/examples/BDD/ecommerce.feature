Feature: End to end Ecommerce validation

    application regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add products to cart
    |Blackberry|
    |Nokia Edge|
    When Validate the total prices
    Then Select the country and submit