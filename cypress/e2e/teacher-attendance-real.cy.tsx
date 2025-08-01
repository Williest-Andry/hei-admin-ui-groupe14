describe("teacher attendance real test", () => {
    before("teacher can list & change status event participant real test", () => {
      cy.visit("/login");
      cy.getByTestid("casdoor-login-btn").click();
      cy.origin(Cypress.env("REACT_APP_CASDOOR_SDK_SERVER_URL"), () => {
        cy.get(
          "input[placeholder='identifiant, adresse e-mail ou téléphone']"
        ).type(Cypress.env("REACT_APP_TEST_TEACHER1_EMAIL"));
        cy.get("input[placeholder='Mot de passe']").type(
          Cypress.env("REACT_APP_TEST_TEACHER1_PASSWORD")
        );
        cy.get("button[type='submit']").click();
      });
      cy.on("fail", (err) => {
        if (err.message.includes("Timed out retrying")) {
          cy.go("back");
          cy.getByTestid("casdoor-login-btn").click();
          return false;
        }
        throw err;
      });
    })
    cy.url().should("include", "/");
    cy.get('[data-testid="event-menu"]').click();
    cy.contains("Listes").click();
    cy.get("#event-show").click({force: true});
    cy.get('[data-testid^="eventparticipant-"][data-testid$="-status"]')
      .first()
      .as("participantStatus")
      .within(() => {
        cy.get('[data-testid="PRESENT"]').then(($presentChip) => {
          if ($presentChip.hasClass("MuiChip-filled")) {
            cy.get('[data-testid="MISSING"]').click({force: true});
            cy.get('[data-testid="MISSING"]').should(
              "have.class",
              "MuiChip-filled"
            );
            cy.get('[data-testid="PRESENT"]').should(
              "have.class",
              "MuiChip-outlined"
            );
          } else {
            cy.get('[data-testid="PRESENT"]').click({force: true});
            cy.get('[data-testid="PRESENT"]').should(
              "have.class",
              "MuiChip-filled"
            );
            cy.get('[data-testid="MISSING"]').should(
              "have.class",
              "MuiChip-outlined"
            );
          }
        });
      });
    cy.contains("Sauvegarder").click();
    cy.contains("Enregistrer avec succès.");
});