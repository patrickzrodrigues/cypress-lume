class MyInfoPage {
  selectorList() {
    const selectors = {
      MyinfoGrid: ".oxd-topbar-header-breadcrumb-module",
      firstNameField: "input[name='firstName']",
      lastNameField: "input[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      genericCombobox: ".oxd-select-text.oxd-select-text--active",
      sixItemsCombobox: ".oxd-select-dropdown > :nth-child(6)",
      threeItemsCombobox: ".oxd-select-dropdown > :nth-child(3)",
      twentySevenItemsCombobox: ".oxd-select-dropdown > :nth-child(27)",
    };
    return selectors;
  }

  checkMyInfoPage() {
    cy.location("pathname").should(
      "include",
      "/web/index.php/pim/viewPersonalDetails",
    );
    cy.get(this.selectorList().MyinfoGrid)
      .should("be.visible")
      .and("contain", "PIM");
  }

  fillPersonalDetails(firstName, middleName, lastName) {
    cy.get(this.selectorList().firstNameField).clear().type(firstName);
    cy.get(this.selectorList().genericField).eq(1).clear().type(middleName);
    cy.get(this.selectorList().genericField).eq(2).clear().type(lastName);
  }

  fillEmployeeDetails(employeeId, otherId, driverLicense, driverLicenseDate) {
    cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorList().genericField).eq(4).clear().type(otherId);
    cy.get(this.selectorList().genericField).eq(5).clear().type(driverLicense);
    cy.get(this.selectorList().dateField).eq(0).clear().type(driverLicenseDate);
    cy.get(this.selectorList().dateCloseButton).click();
  }

  fillStatus(){
    cy.get(".oxd-radio-input").eq(0).click();
    cy.get(this.selectorList().genericCombobox).eq(0).click();
    cy.get(this.selectorList().twentySevenItemsCombobox)
      .contains("Brazilian")
      .click();
    cy.get(this.selectorList().genericCombobox).eq(1).click();
    cy.get(this.selectorList().threeItemsCombobox).contains("Married").click();
    cy.get(this.selectorList().genericCombobox).eq(2).click();
    cy.get(this.selectorList().sixItemsCombobox).contains("O+").click();
  }

  saveForm() {
    cy.get(this.selectorList().submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
  }
}

export default MyInfoPage;
