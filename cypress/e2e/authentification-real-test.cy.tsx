describe("Authentification réelle via Casdoor", () => {

  it("should authenticate the STUDENT and land on profile page", () => {

    cy.visit("/login", { timeout: 10000 });
    cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
    cy.origin("https://numer.casdoor.com", {args: {email: Cypress.env("REACT_APP_TEST_STUDENT1_EMAIL"),password: Cypress.env("REACT_APP_TEST_STUDENT1_PASSWORD")}}, ({ email, password }) => {
      cy.get("input[placeholder='identifiant, adresse e-mail ou téléphone']", { timeout: 10000 }).type(email);
      cy.get("input[placeholder='Mot de passe']", { timeout: 10000 }).type(password);
      cy.get("button[type='submit']", { timeout: 10000 }).click();
    });
    cy.on("fail", (err) => {
      if (err.message.includes("Timed out retrying")) {
        cy.go("back");
        cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
        return false;
      } else if (
        err.message.includes(
          "The command was expected to run against origin"
        ) &&
        err.message.includes("but the application is at origin")
      ) {
        cy.visit(Cypress.env("REACT_PREPROD_URL") + "/login", { timeout: 10000 });
        cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
        return false;
      }
      throw err;
    });


    cy.get('[data-testid]="AccountCircleIcon"', { timeout: 10000 }).click();
    cy.get('[data-testid]="main-content"', { timeout: 10000 }).should("exist");
    cy.get("body", { timeout: 10000 }).should("contain", "STD21001")
      .and("contain", "Ryan")
      .and("contain", "Andria")
      .and("contain", "test+ryan@hei.school")
      .and("contain", "0322411123");
    cy.get('[data-testid]="LogoutIcon"', { timeout: 10000 }).click();
  });


  it("should authenticate the TEACHER and land on profile page", () => {

    cy.visit("/login", { timeout: 10000 });
    cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
    cy.origin("https://numer.casdoor.com", {args: {email: Cypress.env("REACT_APP_TEST_TEACHER1_EMAIL"),password: Cypress.env("REACT_APP_TEST_TEACHER1_PASSWORD")}}, ({ email, password }) => {
      cy.get("input[placeholder='identifiant, adresse e-mail ou téléphone']", { timeout: 10000 }).type(email);
      cy.get("input[placeholder='Mot de passe']", { timeout: 10000 }).type(password);
      cy.get("button[type='submit']", { timeout: 10000 }).click();
    });
    cy.on("fail", (err) => {
      if (err.message.includes("Timed out retrying")) {
        cy.go("back");
        cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
        return false;
      } else if (
        err.message.includes(
          "The command was expected to run against origin"
        ) &&
        err.message.includes("but the application is at origin")
      ) {
        cy.visit(Cypress.env("REACT_PREPROD_URL") + "/login", { timeout: 10000 });
        cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
        return false;
      }
      throw err;
    });

    cy.get('[data-testid]="AccountCircleIcon"', { timeout: 10000 }).click();
    cy.get('[data-testid]="main-content"', { timeout: 10000 }).should("exist");
    cy.get("body", { timeout: 10000 }).should("contain", "TCR21001")
      .and("contain", "One")
      .and("contain", "Teacher")
      .and("contain", "test+teacher1@hei.school")
      .and("contain", "0322411125");
    cy.get('[data-testid]="LogoutIcon"', { timeout: 10000 }).click();
  });


  it("should authenticate the MANAGER and land on profile page", () => {

    cy.visit("/login", { timeout: 10000 });
    cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
    cy.origin("https://numer.casdoor.com", {args: {email: Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL"),password: Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")}}, ({ email, password }) => {
      cy.get("input[placeholder='identifiant, adresse e-mail ou téléphone']", { timeout: 10000 }).type(email);
      cy.get("input[placeholder='Mot de passe']", { timeout: 10000 }).type(password);
      cy.get("button[type='submit']", { timeout: 10000 }).click();
    });
    cy.on("fail", (err) => {
      if (err.message.includes("Timed out retrying")) {
        cy.go("back");
        cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
        return false;
      } else if (
        err.message.includes(
          "The command was expected to run against origin"
        ) &&
        err.message.includes("but the application is at origin")
      ) {
        cy.visit(Cypress.env("REACT_PREPROD_URL") + "/login", { timeout: 10000 });
        cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
        return false;
      }
      throw err;
    });

    cy.get('[data-testid]="AccountCircleIcon"', { timeout: 10000 }).click();
    cy.get('[data-testid]="main-content"', { timeout: 10000 }).should("exist");
    cy.get("body", { timeout: 10000 }).should("contain", "MGR21001")
      .and("contain", "One")
      .and("contain", "Managers")
      .and("contain", "test+manager1@hei.school")
      .and("contain", "0322411124");
    cy.get('[data-testid]="LogoutIcon"', { timeout: 10000 }).click();
  });


  it("should authenticate the ADMIN and land on profile page", () => {

    cy.visit("/login", { timeout: 10000 });
    cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
    cy.origin("https://numer.casdoor.com", {args: {email: Cypress.env("REACT_APP_TEST_ADMIN1_EMAIL"),password: Cypress.env("REACT_APP_TEST_ADMIN1_PASSWORD")}}, ({ email, password }) => {
      cy.get("input[placeholder='identifiant, adresse e-mail ou téléphone']", { timeout: 10000 }).type(email);
      cy.get("input[placeholder='Mot de passe']", { timeout: 10000 }).type(password);
      cy.get("button[type='submit']", { timeout: 10000 }).click();
    });
    cy.on("fail", (err) => {
      if (err.message.includes("Timed out retrying")) {
        cy.go("back");
        cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
        return false;
      } else if (
        err.message.includes(
          "The command was expected to run against origin"
        ) &&
        err.message.includes("but the application is at origin")
      ) {
        cy.visit(Cypress.env("REACT_PREPROD_URL") + "/login", { timeout: 10000 });
        cy.get('[data-testid]="casdoor-login-btn"', { timeout: 10000 }).click();
        return false;
      }
      throw err;
    });

    cy.get('[data-testid]="AccountCircleIcon"', { timeout: 10000 }).click();
    cy.get('[data-testid]="main-content"', { timeout: 10000 }).should("exist");
    cy.get("body", { timeout: 10000 }).should("contain", "ADM21001")
      .and("contain", "Admin")
      .and("contain", "Admin")
      .and("contain", "test+admin@hei.school")
      .and("contain", "0322411128");
    cy.get('[data-testid]="LogoutIcon"', { timeout: 10000 }).click();
  });
});