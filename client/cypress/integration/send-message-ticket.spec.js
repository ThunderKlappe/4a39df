/// <reference types="cypress" />

const alice = {
  username: "Alice",
  email: "alice@example.com",
  password: "Z6#6%xfLTarZ9U",
};
const bob = {
  username: "Bob",
  email: "bob@example.com",
  password: "L%e$xZHC4QKP@F",
};

describe("Add feature: send pictures through chat", () => {
  it.skip("setup", () => {
    cy.signup(alice.username, alice.email, alice.password);
    cy.logout();
    cy.signup(bob.username, bob.email, bob.password);
    cy.logout();
  });

  it("uploaded photo displays in messages", () => {
    cy.login(alice.username, alice.password);

    cy.get("input[name=search]").type("Bob");
    cy.contains("Bob").click();

    cy.get("input[type=file]")
      .invoke("show")
      .selectFile("src/assets/bg-img.png");
    cy.get("input[name=text]").type("{enter}");
    cy.get(".photoMessage");
  });
});
