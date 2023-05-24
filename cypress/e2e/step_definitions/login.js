import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {loginPage} from '@pages/LoginPage'

  Given("O usuário acessar a página do Seu barriga", () => {
    cy.visit("");
  });

  When("O usuário informar suas credenciais {string} e senha {string}", function (string, string2) {
    loginPage.typeEmail(string)
    loginPage.typeSenha(string2)
    loginPage.clickEntrar()
  });

  