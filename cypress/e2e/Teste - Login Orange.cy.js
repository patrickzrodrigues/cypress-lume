describe("Orange GRM Test", () => {
  it("Login - sucesso", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get(".orangehrm-login-branding").should("be.visible");
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "contain",
      "Dashboard",
    );
  });
  it.only("Login - Fail", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get(".orangehrm-login-branding").should("be.visible");
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("234");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-alert")
  });
});
