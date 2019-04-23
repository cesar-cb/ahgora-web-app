const information = {
  name: 'test user',
  account: '456',
  password: '159',
  id: '1231k24gb',
};

describe('App', () => {
  before(() => {
    cy.visit('/');

    cy.get('input#name').type(information.name).should('have.value', information.name);
    cy.get('input#account').type(information.account).should('have.value', information.account);
    cy.get('input#password').type(information.password).should('have.value', information.password);
    cy.get('input#id').type(information.id).should('have.value', information.id);
  });

  it('should fill the form correctly', () => {
    cy.get('input#name').should('have.value', information.name);
    cy.get('input#account').should('have.value', information.account);
    cy.get('input#password').should('have.value', information.password);
    cy.get('input#id').should('have.value', information.id);
  });

  it('should display correct user name', () => {
    cy.get('#save').click();

    cy.get('#hello').should('have.text', `Olá ${information.name}`);
  });

  it('should returns a response after punch', () => {
    cy.get('#punch').click();
    cy.wait(2000);
    cy.get('#response', { timeout: 10000 }).should('exist');
    cy.get('#lastResponse', { timeout: 10000 }).should('exist');
  });

  it('should reset user information and get back to user information screen', () => {
    cy.get('#reset').click();
    cy.get('#save').should('exist');
  });
});
