declare global {
  namespace Cypress {
    interface Chainable {
      getByTestid<Subject>(testid: string): Chainable<Subject>;
      realCasdoorLogin(email: string, password: string): void;
      createTestFee():void;
    }
  }
}

export{}