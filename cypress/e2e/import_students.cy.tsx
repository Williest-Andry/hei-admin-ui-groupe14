describe("Importation d'étudiants", () => {
    it("Redirige vers Casdoor, se connecte avec un compte manager et arrive sur le dashboard", () => {
        cy.visit("/login");

        cy.get('[data-testid="casdoor-login-btn"]').click();

        cy.origin(Cypress.env("REACT_APP_CASDOOR_SDK_SERVER_URL"), () => {
            cy.get(
                'input[placeholder="identifiant, adresse e-mail ou téléphone"]'
            ).type(Cypress.env("REACT_APP_MANAGER_EMAIL"));
            cy.get('input[placeholder="Mot de passe"]').type(
                Cypress.env("REACT_APP_TEST_MANAGER1_PASSWORD")
            );
            cy.get('button[type="submit"]').click();
        });
        cy.on("fail", (err) => {
          if (err.message.includes("Timed out retrying")) {
            cy.go("back");
            cy.getByTestid("casdoor-login-btn").click();
            return false;
          }
          throw err;
        });
        cy.get('svg[data-testid="SchoolIcon"]').click();
        cy.get('svg[data-testid="PeopleIcon"]').click();
        cy.get('svg[data-testid="AddIcon"]').click();
        cy.get('input[id="ref"]').type("ETD001_groupe14");
        cy.get('input[id="first_name"]').type("kareem_groupe14");
        cy.get('input[id="last_name"]').type("Nomenjanahary_groupe14");
        cy.get('input[id="sex_M"]').click();
        cy.get('input[id="phone"]').type("0345368844");
        cy.get('input[id="coordinates.latitude"]').type("1");
        cy.get('input[id="coordinates.longitude"]').type("1");
        cy.get('input[id="nic"]').type("123456789123");
        cy.get('input[id="birth_place"]').type("Soavinandriana");
        cy.get('input[id="birth_date"]').type("2003-06-03");
        cy.get('textarea[id="address"]').type("Caspat soanierana");
        cy.get('input[id="email"]').type("hei.nomena.2@gmail.com");
        cy.get('input[id="entrance_datetime"]').type("2022-06-05");
        cy.get('input[id="high_school_origin"]').type("lycee moderne ampefilou");
        cy.get('button[type="submit"]').click();
        cy.get('svg[data-testid="PeopleIcon"]').click();
    });
});
