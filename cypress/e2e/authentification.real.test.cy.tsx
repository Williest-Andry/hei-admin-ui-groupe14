describe("Real authentication test on HEI Admin", () => {

  it("Check access for user STUDENT", () => {
    cy.visit("/login");
    cy.get("[data-testid='casdoor-login-btn']").click();
    cy.origin("https://numer.casdoor.com", {args: {email: Cypress.env("REACT_APP_TEST_STUDENT1_EMAIL"),password: Cypress.env("REACT_APP_TEST_STUDENT1_PASSWORD")}}, ({ email, password }) => {
      cy.get("input[placeholder='identifiant, adresse e-mail ou téléphone']").type(email);
      cy.get("input[placeholder='Mot de passe']").type(password);
      cy.get("button[type='submit']").click();
    });

    cy.get("[data-testid='AccountCircleIcon']").click();
    cy.get("[data-testid='main-content']").should("exist");
    cy.get("body").should("contain", "STD21001")
      .and("contain", "Ryan")
      .and("contain", "Andria")
      .and("contain", "test+ryan@hei.school")
      .and("contain", "0322411123");
    cy.get("[data-testid='LogoutIcon']").click();
  });


  it("Check access for user TEACHER", () => {

    cy.visit("/login");
    cy.get("[data-testid='casdoor-login-btn']").click();
    cy.origin("https://numer.casdoor.com", {args: {email: Cypress.env("REACT_APP_TEST_TEACHER1_EMAIL"),password: Cypress.env("REACT_APP_TEST_TEACHER1_PASSWORD")}}, ({ email, password }) => {
      cy.get("input[placeholder='identifiant, adresse e-mail ou téléphone']").type(email);
      cy.get("input[placeholder='Mot de passe']").type(password);
      cy.get("button[type='submit']").click();
    });

    cy.get("[data-testid='AccountCircleIcon']").click();
    cy.get("[data-testid='main-content']").should("exist");
    cy.get("body").should("contain", "TCR21001")
      .and("contain", "One")
      .and("contain", "Teacher")
      .and("contain", "test+teacher1@hei.school")
      .and("contain", "0322411125");
    cy.get("[data-testid='LogoutIcon']").click();
  });


  it("Check access for user MANAGER", () => {

    cy.visit("/login");
    cy.get("[data-testid='casdoor-login-btn']").click();
    cy.origin("https://numer.casdoor.com", {args: {email: Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL"),password: Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")}}, ({ email, password }) => {
      cy.get("input[placeholder='identifiant, adresse e-mail ou téléphone']").type(email);
      cy.get("input[placeholder='Mot de passe']").type(password);
      cy.get("button[type='submit']").click();
    });

    cy.get("[data-testid='AccountCircleIcon']").click();
    cy.get("[data-testid='main-content']").should("exist");
    cy.get("body").should("contain", "MGR21001")
      .and("contain", "One")
      .and("contain", "Managers")
      .and("contain", "test+manager1@hei.school")
      .and("contain", "0322411124");
    cy.get("[data-testid='LogoutIcon']").click();
  });


  it("Check access for user ADMIN", () => {

    cy.visit("/login");
    cy.get("[data-testid='casdoor-login-btn']").click();
    cy.origin("https://numer.casdoor.com", {args: {email: Cypress.env("REACT_APP_TEST_ADMIN1_EMAIL"),password: Cypress.env("REACT_APP_TEST_ADMIN1_PASSWORD")}}, ({ email, password }) => {
      cy.get("input[placeholder='identifiant, adresse e-mail ou téléphone']").type(email);
      cy.get("input[placeholder='Mot de passe']").type(password);
      cy.get("button[type='submit']").click();
    });

    cy.get("[data-testid='AccountCircleIcon']").click();
    cy.get("[data-testid='main-content']").should("exist");
    cy.get("body").should("contain", "ADM21001")
      .and("contain", "Admin")
      .and("contain", "Admin")
      .and("contain", "test+admin@hei.school")
      .and("contain", "0322411128");
    cy.get("[data-testid='LogoutIcon']").click();
  });
});
