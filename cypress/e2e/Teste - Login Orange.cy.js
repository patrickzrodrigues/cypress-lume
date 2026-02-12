describe("Orange GRM Test", () => {

  const selectorList = {
    username: "input[name='username']",
    password: "input[name='password']",
    loginButton: "button[type='submit']",
    CreadentialAlert: ".oxd-alert-content-text",
    SelectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
  };
  it.only("Login - sucesso", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get(".orangehrm-login-branding").should("be.visible");
    cy.get(selectorList.username).type("Admin");
    cy.get(selectorList.password).type("admin123");
    cy.get(selectorList.loginButton).click();
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(selectorList.SelectionTitleTopBar).should(
      "contain",
      "Dashboard",
    );
  });
  it.only("Login - Fail", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get(".orangehrm-login-branding").should("be.visible");
    cy.get(selectorList.username).type("Admin");
    cy.get(selectorList.password).type("234");
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.CreadentialAlert).should("contain", "Invalid credentials");
  });
});
