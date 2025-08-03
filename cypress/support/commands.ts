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
