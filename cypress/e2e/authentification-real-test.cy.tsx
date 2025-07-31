describe("Authentification réelle via Casdoor", () => {

  it("should authenticate the STUDENT and land on profile page", () => {

    cy.visit(Cypress.env("REACT_PREPROD_URL"));
    cy.get('[data-testid="casdoor-login-btn"]').click();
    cy.origin(Cypress.env("REACT_APP_CASDOOR_SDK_SERVER_URL"), () => {
      cy.get(
        "input[placeholder='identifiant, adresse e-mail ou téléphone']"
      ).type(Cypress.env("REACT_APP_TEST_STUDENT1_EMAIL"));
      cy.get("input[placeholder='Mot de passe']").type(
        Cypress.env("REACT_APP_TEST_STUDENT1_PASSWORD")
      );
      cy.get("button[type='submit']").click();
    });

    cy.url().should("include", "/auth/callback");
    cy.get('[data-testid="AccountCircleIcon"]').click();
    cy.get('[data-testid="main-content"]').should("exist");
    cy.get("body").should("contain", "STD21001")
      .and("contain", "Ryan")
      .and("contain", "Andria")
      .and("contain", "test+ryan@hei.school")
      .and("contain", "0322411123");
  });


  it("should authenticate the TEACHER and land on profile page", () => {

    cy.visit(Cypress.env("REACT_PREPROD_URL"));
    cy.get('[data-testid="casdoor-login-btn"]').click();
    cy.origin(Cypress.env("REACT_APP_CASDOOR_SDK_SERVER_URL"), () => {
      cy.get(
        "input[placeholder='identifiant, adresse e-mail ou téléphone']"
      ).type(Cypress.env("REACT_APP_TEST_TEACHER1_EMAIL"));
      cy.get("input[placeholder='Mot de passe']").type(
        Cypress.env("REACT_APP_TEST_TEACHER1_PASSWORD")
      );
      cy.get("button[type='submit']").click();
    });

    cy.url().should("include", "/auth/callback");
    cy.get('[data-testid="AccountCircleIcon"]').click();
    cy.get('[data-testid="main-content"]').should("exist");
    cy.get("body").should("contain", "TCR21001")
      .and("contain", "One")
      .and("contain", "Teacher")
      .and("contain", "test+teacher1@hei.school")
      .and("contain", "0322411125");

  });


  it("should authenticate the MANAGER and land on profile page", () => {

    cy.visit(Cypress.env("REACT_PREPROD_URL"));
    cy.get('[data-testid="casdoor-login-btn"]').click();
    cy.origin(Cypress.env("REACT_APP_CASDOOR_SDK_SERVER_URL"), () => {
      cy.get(
        "input[placeholder='identifiant, adresse e-mail ou téléphone']"
      ).type(Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL"));
      cy.get("input[placeholder='Mot de passe']").type(
        Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")
      );
      cy.get("button[type='submit']").click();
    });

    cy.url().should("include", "/auth/callback");
    cy.get('[data-testid="AccountCircleIcon"]').click();
    cy.get('[data-testid="main-content"]').should("exist");
    cy.get("body").should("contain", "MGR21001")
      .and("contain", "One")
      .and("contain", "Managers")
      .and("contain", "test+manager1@hei.school")
      .and("contain", "0322411124");

  });


  it("should authenticate the ADMIN and land on profile page", () => {

    cy.visit(Cypress.env("REACT_PREPROD_URL"));
    cy.get('[data-testid="casdoor-login-btn"]').click();
    cy.origin(Cypress.env("REACT_APP_CASDOOR_SDK_SERVER_URL"), () => {
      cy.get(
        "input[placeholder='identifiant, adresse e-mail ou téléphone']"
      ).type(Cypress.env("REACT_APP_TEST_ADMIN1_EMAIL"));
      cy.get("input[placeholder='Mot de passe']").type(
        Cypress.env("REACT_APP_TEST_ADMIN1_PASSWORD")
      );
      cy.get("button[type='submit']").click();
    });

    cy.url().should("include", "/auth/callback");
    cy.get('[data-testid="AccountCircleIcon"]').click();
    cy.get('[data-testid="main-content"]').should("exist");
    cy.get("body").should("contain", "ADM21001")
      .and("contain", "Admin")
      .and("contain", "Admin")
      .and("contain", "test+admin@hei.school")
      .and("contain", "0322411128");

  });
});