describe('Basic Website Navigation and Assertion', () => {
    it('should successfully load the homepage and verify its title', () => {
        // Arrange: Visit the application's base URL
        cy.visit('https://example.cypress.io');
        // Act: No specific action needed beyond visiting for this test, but you could add interactions here.
        // Assert: Verify the page title
        cy.title().should('eq', 'Cypress.io: Kitchen Sink');
    });
    it('should navigate to the commands page and check a heading', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('Commands').click(); // Find and click the 'Commands' link
        cy.url().should('include', '/commands'); // Assert the URL changed
        cy.get('h1').should('contain', 'Commands'); // Assert a heading on the new page
    });
});

it('example 11', function() {
    cy.visit('https://example.cypress.io')
    
});