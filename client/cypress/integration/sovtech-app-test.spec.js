describe('renders the homepage', () => {
    it('should render correctly', () => {
        cy.visit('/')
    })
    it('should click on the navigation item and return to homepage', () => {
        cy.visit('/')
        cy.get('#nav-item-about').click()
        cy.clock()
        cy.tick(5000)
        cy.url().should('include', '/about')
    })
    it('should click on the navigation item and navigate back to the homepage', () => {
        cy.get('#nav-item-home').click()
        cy.clock()
        cy.tick(5000)
        cy.url().should('include', '/')
    })
    it('should type in the search bar and search for a warrior', () => {
        cy.get('#search-bar-warrior').type('Leia Organa')
        cy.clock()
        cy.tick(15000)
        cy.get('.sc-kDThTU > .sc-bdvvaa')
    })
    it('should view a warrior detail page', () => {
        cy.get('.sc-fFehDp > :nth-child(1)')
        .get('.sc-fFehDp > :nth-child(1) > .sc-gsDJrp > .sc-eCImvq').click()
        cy.clock()
        cy.tick(5000)
        .url().should('include', '/people')
    })
    it('should go back to the main page', () => {
        cy.get('#button').click()
        cy.clock()
        cy.tick(5000)
        .url().should('include', '/')
    })

})