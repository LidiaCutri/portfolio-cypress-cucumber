Feature: Login Page 

    Feature login page do site utilizado para os testes

Background: 
    Given O usuário acessar a página do Seu barriga
    
Scenario: CT001 - Realizar login com sucesso
    When O usuário informar suas credenciais "lidiacutri@teste.com" e senha "123"
    Then A mensagem de sucesso "Bem vindo, Lidia Cutri!" é exibida

Scenario: CT002 - Realizar login sem sucesso
    When O usuário informar suas credenciais "lidiacutri@teste.com" e senha "000"
    Then A mensagem de insucesso "Problemas com o login do usuário" é exibida