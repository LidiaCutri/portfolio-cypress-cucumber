class BasePage{
    
    getMsgSucess(){
        return cy.get("div[class*='alert-success']")
    }
}

export const basePage = new BasePage();