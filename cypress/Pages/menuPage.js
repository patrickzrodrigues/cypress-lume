class MenuPage {

  selectorList() {
    const selectors = {
          MyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    };
    return selectors;
  }

    accessMyInfo() {
      cy.get(this.selectorList().MyInfo).click();
    }
    
}

export default MenuPage;
