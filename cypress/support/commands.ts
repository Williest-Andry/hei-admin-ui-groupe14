/// <reference types="cypress" />

Cypress.Commands.add("getByTestid", <Subject = any>(id: string) => {
  return cy.get<Subject>(`[data-testid='${id}']`);
});

Cypress.Commands.add("realCasdoorLogin", (email: string, password: string) => {
  cy.visit("/login");
  cy.getByTestid("casdoor-login-btn").click();
  cy.origin(
    Cypress.env("REACT_APP_CASDOOR_SDK_SERVER_URL"),
    { args: { email, password } },
    ({ email, password }) => {
      cy.get(
        "input[placeholder='identifiant, adresse e-mail ou téléphone']"
      ).type(email);
      cy.get("input[placeholder='Mot de passe']").type(password);
      cy.get("button[type='submit']").click();
    }
  );
});

Cypress.Commands.add("createTestFee", () => {
  cy.getByTestid("SchoolIcon").click();
  cy.getByTestid("PeopleIcon").click();
  cy.getByTestid("main-search-filter").type("ryan");
  cy.contains("td", "STD21001").click();
  cy.getByTestid("fees-tab").click();
  cy.getByTestid("MoreVertIcon").click();
  cy.getByTestid("create-button").click();
  cy.get("div#predefinedType").click();
  cy.get("li[data-value=92fb0d3f-acb8-4a42-afaa-9d943e42ba62]").click();
  cy.get("input#isPredefinedDate").click();
  cy.get("input#due_datetime").type("2025-07-20");
  cy.wait(500);
  cy.get("button[aria-label=Enregistrer]").click();
  cy.wait(500);
  cy.getByTestid("LogoutIcon").click();
  cy.wait(500);
});

Cypress.Commands.add("deleteTestFee", () => {
  cy.getByTestid("SchoolIcon").click();
  cy.getByTestid("PeopleIcon").click();
  cy.getByTestid("main-search-filter").type("ryan");
  cy.contains("td", "STD21001").click();
  cy.getByTestid("fees-tab").click();
  cy.contains("td", "MP111111.2222.333339")
    .parents("tr")
    .within(() => {
      cy.get("button").eq(0).click();
    });
  cy.get("div[aria-labelledby=alert-dialog-title]").within(() => {
    cy.get("button").eq(1).click();
  });
  cy.getByTestid("LogoutIcon").click();
});
