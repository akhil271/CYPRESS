
describe('template spec', () => {
  
  it('sauceDemo', function() {
  cy.visit('https://www.saucedemo.com/')
 // cy.reload();

 cy.get('[data-test="username"]').type('standard_user');
  //cy.get('[data-test="login-credentials-container"] .login_credentials_wrap-inner').click();
 // cy.get('[data-test="password"]').click();
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('sec');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');

  //1. Asserting Properties and States
 // -->Multiple Assertions:
  cy.get('.app_logo', { timeout: 10000 }).should('exist');
  cy.get('.app_logoo').should('not.exist');
  cy.get('.app_logo').should('be.visible');
  cy.get('app_logoo').should('not.be.visible');

  // -->Text Content
  cy.get('.title').should('have.text', 'Products'); 
  cy.get('.title').should('contain', 'Produ'); 
  cy.get('.title').invoke('text').should('eq', 'Products'); // inovking before matching
  cy.get('.title').should('not.have.text', 'Book'); 
  cy.get('.app_logo').should('have.text', 'Swag Labs');

  // first item should have price as $29.99
  cy.get('.inventory_item_price').first().should('have.text',"$29.99");

  // -->Attributes Values
  cy.get('#add-to-cart-sauce-labs-backpack').should('have.attr', 'name', 'add-to-cart-sauce-labs-backpack');
  cy.get('#add-to-cart-sauce-labs-backpack').should('not.be.disabled'); 
 // cy.get('#add-to-cart-sauce-labs-backpack').should('not.have.attr','readonly');
  //cy.get('.inventory_details_price').should('not.have.class','inactive');

  // -->Input Values
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('#checkout').click();
  cy.get('[data-test="firstName"]').should('exist');        // input is present
  cy.get('[data-test="firstName"]').should('have.value', ''); // empty by default
  cy.go('back');
  cy.go('back');

  //-->Length
  cy.get('#item_4_img_link',{ timeout: 10000 }).should('have.length', 1); // Checks the number of elements
  cy.get('#item_4_img_link').should('have.length.greaterThan', 0);

  // 2. Chaining Multiple Assertions:
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').and('have.text', 'Add to cart').and('not.have.class', 'disabled');

 // 3. Asserting against a Function:
 cy.get('.inventory_list').should(($list) =>
{
    expect($list).to.have.length(1);
    expect($list.first()).to.contain('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
});

 // 4. Asserting on the URL:
 cy.url().should('include', '/inventory.html');
 cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

 //5. Asserting on Window Properties:
cy.window().should('have.property', 'localStorage');






});
});

