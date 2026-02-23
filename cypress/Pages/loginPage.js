class LoginPage {
  selectorList() {
    const selectors = {
      username: "input[name='username']",
      password: "input[name='password']",
      loginButton: "button[type='submit']",
      wrongCreadentialAlert: ".oxd-alert-content-text",
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("/auth/login");
    cy.get(".orangehrm-login-branding").should("be.visible");
  }

  loginWithAnyUser(username, password) {
    cy.get(this.selectorList().username).type(username);
    cy.get(this.selectorList().password).type(password);
    cy.get(this.selectorList().loginButton).click();
  }

  CheckAccessInvalid() {
    cy.get(this.selectorList().wrongCreadentialAlert);
  }
}

export default LoginPage;
