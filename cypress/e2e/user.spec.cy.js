import userData from "../fixtures/userData.json";
import LoginPage from "../Pages/loginPage.js";
import DashboardPage from "../Pages/dashboardPage.js";
import MenuPage from "../Pages/menuPage.js";
import MyInfoPage from "../Pages/myInfoPage.js";

const Chance = require("chance");
const chance = new Chance(); // Corrigido: Chance deve ser instanciado corretamente

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const myInfoPage = new MyInfoPage();
const menuPage = new MenuPage();

describe("Orange GRM Test", () => {
  it("User Info Update - sucesso", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSucess.userSucess,
      userData.userSucess.password,
    );
    dashboardPage.checkDashboardPage();

    //Acessa a Pagina de my info
    menuPage.accessMyInfo();
    myInfoPage.checkMyInfoPage();
    //Altera os dados do usuario
    cy.wait(5000);
    myInfoPage.fillPersonalDetails(
      chance.first(),
      chance.last(),
      chance.string({ length: 10 }),
    );

    myInfoPage.fillEmployeeDetails(
      chance.natural({ min: 1, max: 10 }),
      chance.prime({ min: 1, max: 10 }),
      chance.string({ length: 10 }),
      chance.date({ year: 2020, month: 1, day: 1 }).toISOString().split("T")[0],
    );
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });
});
