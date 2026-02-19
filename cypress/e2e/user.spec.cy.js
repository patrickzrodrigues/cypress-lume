import userData from "../fixtures/userData.json";
describe("Orange GRM Test", () => {
  const selectorList = {
    username: "input[name='username']",
    password: "input[name='password']",
    loginButton: "button[type='submit']",
    CreadentialAlert: ".oxd-alert-content-text",
    SelectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    MyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "input[name='firstName']",
    lastNameField: "input[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  };
  const userData = {
    userSucess: { userSucess: "Admin", password: "admin123" },
    userFail: { userFail: "Admin", password: "2345" },
  };

  it.only("User Info Update - sucesso", () => {
    cy.visit("/auth/login");
    cy.get(".orangehrm-login-branding").should("be.visible");
    cy.get(selectorList.username).type(userData.userSucess.userSucess);
    cy.get(selectorList.password).type(userData.userSucess.password);
    cy.get(selectorList.loginButton).click();
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(selectorList.SelectionTitleTopBar).should("contain", "Dashboard");

    //Acesasa a Pagina de my info
    cy.get(selectorList.MyInfo).contains("My Info").click();
    cy.get(selectorList.SelectionTitleTopBar)
      .should("contain", "PIM")
      //Altera os dados do usuario
      .wait(3000);
    cy.get("input[name='firstName']").clear().type("Dino da Silvas Sauro");
    cy.get(selectorList.genericField).eq(1).clear().type("QA engineer");
    cy.get(selectorList.genericField).eq(2).clear().type("Automation Tester");
    cy.get(selectorList.genericField).eq(3).clear().type("753951");
    cy.get(selectorList.genericField).eq(4).clear().type("ID-006");
    cy.get(selectorList.genericField).eq(5).clear().type("DLS - 2026 - ABC");
    cy.get(selectorList.dateField)
      .eq(0)
      .clear()
      .type("2026-02-19");
    cy.get(selectorList.dateCloseButton).click();
    cy.get(selectorList.submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
  });
  it("Login - Fail", () => {
    cy.visit("/auth/login");
    cy.get(".orangehrm-login-branding").should("be.visible");
    cy.get(selectorList.username).type(userData.userFail.userFail);
    cy.get(selectorList.password).type(userData.userFail.password);
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.CreadentialAlert).should(
      "contain",
      "Invalid credentials",
    );
  });
});
