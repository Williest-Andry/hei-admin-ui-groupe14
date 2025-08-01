describe("Authentification réelle via Casdoor", () => {

  it("should authenticate the STUDENT and land on profile page", () => {
    const email = Cypress.env("REACT_APP_TEST_STUDENT1_EMAIL");
    const password = Cypress.env("REACT_APP_TEST_STUDENT1_PASSWORD");

    cy.visit("https://preprod.admin.hei.school/");
    cy.get('[data-testid="casdoor-login-btn"]').click();
    cy.origin("https://numer.casdoor.com", { args: { email, password } }, ({ email, password }) => {
      cy.get('input[placeholder="identifiant, adresse e-mail ou téléphone"]').type(email);
      cy.get('input[placeholder="Mot de passe"]').type(password, { log: false });
      cy.get('button[type="submit"]').click();
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
    const email = Cypress.env("REACT_APP_TEST_TEACHER1_EMAIL");
    const password = Cypress.env("REACT_APP_TEST_TEACHER1_PASSWORD");

    cy.visit("https://preprod.admin.hei.school/");
    cy.get('[data-testid="casdoor-login-btn"]').click();
    cy.origin("https://numer.casdoor.com", { args: { email, password } }, ({ email, password }) => {
      cy.get('input[placeholder="identifiant, adresse e-mail ou téléphone"]').type(email);
      cy.get('input[placeholder="Mot de passe"]').type(password, { log: false });
      cy.get('button[type="submit"]').click();
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
    const email = Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL");
    const password = Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD");

    cy.visit("https://preprod.admin.hei.school/");
    cy.get('[data-testid="casdoor-login-btn"]').click();
    cy.origin("https://numer.casdoor.com", { args: { email, password } }, ({ email, password }) => {
      cy.get('input[placeholder="identifiant, adresse e-mail ou téléphone"]').type(email);
      cy.get('input[placeholder="Mot de passe"]').type(password, { log: false });
      cy.get('button[type="submit"]').click();
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
    const email = Cypress.env("REACT_APP_TEST_ADMIN1_EMAIL");
    const password = Cypress.env("REACT_APP_TEST_ADMIN1_PASSWORD");

    cy.visit("https://preprod.admin.hei.school/");
    cy.get('[data-testid="casdoor-login-btn"]').click();
    cy.origin("https://numer.casdoor.com", { args: { email, password } }, ({ email, password }) => {
      cy.get('input[placeholder="identifiant, adresse e-mail ou téléphone"]').type(email);
      cy.get('input[placeholder="Mot de passe"]').type(password, { log: false });
      cy.get('button[type="submit"]').click();
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