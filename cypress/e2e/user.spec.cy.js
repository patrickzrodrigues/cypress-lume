import userData from "../fixtures/userData.json";
import LoginPage from "../Pages/loginPage.js";
import DashboardPage from "../Pages/dashboardPage.js";
import MenuPage from "../Pages/menuPage.js";
import MyInfoPage from "../Pages/myInfoPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const myInfoPage = new MyInfoPage();
const menuPage = new MenuPage();

describe("Orange GRM Test", () => {
  it.only("User Info Update - sucesso", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSucess.userSucess,
      userData.userSucess.password,
    );
    dashboardPage.checkDashboardPage();

    //Acesasa a Pagina de my info
    menuPage.accessMyInfo();
    myInfoPage.checkMyInfoPage()
    //Altera os dados do usuario
    cy.wait(5000);
    myInfoPage.fillPersonalDetails("Dino da Silva Sauro", "QA Engeneer", "Test Autmation");
    myInfoPage.fillEmployeeDetails("123456", "654321", "AB123456", "1990-01-01");
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
    // });
    it("Login - Fail", () => {
      cy.visit("/auth/login");
      cy.get(".orangehrm-login-branding").should("be.visible");
      cy.get(selectorList.username).type(userData.userFail.userFail);
      cy.get(selectorList.password).type(userData.userFail.password);
      cy.get(selectorList.loginButton).click();
      cy.get(selectorList.wrongCreadentialAlert).should(
        "contain",
        "Invalid credentials",
      );
    });
  });
});
