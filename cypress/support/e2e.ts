import "./global";    
import "./commands";

Cypress.on("uncaught:exception", () => {
  return false;
});
