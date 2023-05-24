import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {basePage} from '@pages/BasePage'
  
  Then("A mensagem {string} é exibida", function (string) {
    basePage.getMsgSucess().should("have.text", string)
  });