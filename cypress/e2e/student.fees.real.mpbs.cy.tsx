describe("Mobile payment by student", () => {
  before("Create the test fee", () => {
    cy.on("fail", (err) => {
      if (err.message.includes("Timed out retrying")) {
        cy.go("back");
        cy.realCasdoorLogin(
          Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL"),
          Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")
        );
        return false;
      } else if (
        err.message.includes(
          "The command was expected to run against origin"
        ) &&
        err.message.includes("but the application is at origin")
      ) {
        cy.visit(Cypress.env("REACT_PREPROD_URL"));
        cy.realCasdoorLogin(
          Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL"),
          Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")
        );
        return false;
      }
      throw err;
    });
    cy.on("uncaught:exception", (err) => {
      if (err.message.includes("Unknown user role")) {
        return false;
      }
    });

    cy.realCasdoorLogin(
      Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL"),
      Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")
    );

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

  beforeEach("Connect with student role", () => {
    cy.on("fail", (err) => {
      if (err.message.includes("Timed out retrying")) {
        cy.go("back");
        cy.realCasdoorLogin(
          Cypress.env("REACT_APP_TEST_STUDENT1_EMAIL"),
          Cypress.env("REACT_APP_TEST_STUDENT1_PASSWORD")
        );
        return false;
      } else if (
        err.message.includes(
          "The command was expected to run against origin"
        ) &&
        err.message.includes("but the application is at origin")
      ) {
        cy.visit(Cypress.env("REACT_PREPROD_URL"));
        cy.realCasdoorLogin(
          Cypress.env("REACT_APP_TEST_STUDENT1_EMAIL"),
          Cypress.env("REACT_APP_TEST_STUDENT1_PASSWORD")
        );
        return false;
      }
      throw err;
    });

    cy.realCasdoorLogin(
      Cypress.env("REACT_APP_TEST_STUDENT1_EMAIL"),
      Cypress.env("REACT_APP_TEST_STUDENT1_PASSWORD")
    );

    cy.get(`a[href="/students/student1_id/fees"]`).click();
  });

  it("Checks the icon button based on the existence of the mpbs in the fee", () => {
    cy.contains("td", "fee-payement-health-test").should("exist");

    cy.contains("td", "fee-payement-health-test-grp14")
      .parents("tr")
      .within(() => {
        cy.get("button").eq(0).should("exist");
        cy.get("button").eq(1).should("exist");
      });

    cy.getByTestid("LogoutIcon").click();
  });

  it("Can do mpbs", () => {
    cy.contains("td", "fee-payement-health-test-grp14")
      .parents("tr")
      .within(() => {
        cy.get("button").eq(0).click();
      });

    cy.get("input#psp_id").type("MP111111.2222.333339");
    cy.get("button[aria-label=Enregistrer]").click();

    cy.contains("Frais créés avec succès");
    cy.get("[data-testid=PendingIcon]").should("exist");

    cy.getByTestid("LogoutIcon").click();
  });

  after("Delete fee after the test", function (this: Mocha.Context) {
    cy.on("fail", (err) => {
      if (err.message.includes("Timed out retrying")) {
        cy.go("back");
        cy.realCasdoorLogin(
          Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL"),
          Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")
        );
        return false;
      } else if (
        err.message.includes(
          "The command was expected to run against origin"
        ) &&
        err.message.includes("but the application is at origin")
      ) {
        cy.visit(Cypress.env("REACT_PREPROD_URL") + "/login");
        cy.realCasdoorLogin(
          Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL"),
          Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")
        );
        return false;
      }
      throw err;
    });

    cy.realCasdoorLogin(
      Cypress.env("REACT_APP_TEST_MANAGER1_EMAIL"),
      Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")
    );

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
});
