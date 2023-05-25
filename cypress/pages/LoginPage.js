
const txtEmail = "#email";
const txtSenha = "#senha";

class LoginPage{    
    
    typeEmail(useremail){
        cy.get(txtEmail).type(useremail);
    }

    typeSenha(usersenha){
        cy.get(txtSenha).type(usersenha);
    }

    clickEntrar(){
        cy.contains("Entrar").click();
    }   
}

export const loginPage = new LoginPage();