Feature: Login Page 

    Feature login page do site utilizado para os testes

Background: 
    Given O usuário acessar a página do Seu barriga
Scenario: Realizar login com sucesso
    When O usuário informar suas credenciais "lidiacutri@teste.com" e senha "123"
    Then A mensagem "Bem vindo, Lidia Cutri!" é exibida