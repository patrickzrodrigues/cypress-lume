
import userData from "../fixtures/userData.json";
describe("Orange GRM Test", () => {
  const selectorList = {
    username: "input[name='username']",
    password: "input[name='password']",
    loginButton: "button[type='submit']",
    CreadentialAlert: ".oxd-alert-content-text",
    SelectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
  };
  const userData = {
    userSucess: { userSucess: "Admin", password: "admin123" },
    userFail: { userFail: "Admin", password: "2345" },
  };

  it.only("Login - sucesso", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get(".orangehrm-login-branding").should("be.visible");
    cy.get(selectorList.username).type(userData.userSucess.userSucess);
    cy.get(selectorList.password).type(userData.userSucess.password);
    cy.get(selectorList.loginButton).click();
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(selectorList.SelectionTitleTopBar).should("contain", "Dashboard");
  });
  it.only("Login - Fail", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
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
