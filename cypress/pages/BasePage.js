class BasePage{
    
    getMsgSucess(){
        return cy.get("div[class*='alert-success']");
    }

    getMsgDanger(){
        return cy.get("div[class*='alert-danger']");
    }
}

export const basePage = new BasePage();