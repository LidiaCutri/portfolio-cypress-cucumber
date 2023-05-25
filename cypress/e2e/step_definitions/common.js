import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {basePage} from '@pages/BasePage'
  
  Then("A mensagem de sucesso {string} é exibida", function (string) {
    basePage.getMsgSucess().should("have.text", string);
  });

  Then("A mensagem de insucesso {string} é exibida", function (string) {
    basePage.getMsgDanger().should("have.text", string);
  });