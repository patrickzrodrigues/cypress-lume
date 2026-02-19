class DashboardPage {

  selectorList() {
    const selectors = {
      DashboardGrid: ".oxd-topbar-header-breadcrumb > .oxd-text",
    };
    return selectors;
  }

  checkDashboardPage() {
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(this.selectorList().DashboardGrid).should("be.visible").and("contain", "Dashboard");
  }
}

export default DashboardPage;
