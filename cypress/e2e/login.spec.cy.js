import userData from "../fixtures/userData.json";
import LoginPage from "../Pages/loginPage.js";
7;
import DashboardPage from "../Pages/dashboardPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Login Orange GRM Test", () => {
  it("Login - Fail", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userFail.userFail,
      userData.userFail.password,
    );
    loginPage.CheckAccessInvalid();
  });
  it.only("Login - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSucess.userSucess,
      userData.userSucess.password,
      dashboardPage.checkDashboardPage,
    );
  });
});
