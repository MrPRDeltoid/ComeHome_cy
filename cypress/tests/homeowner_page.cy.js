import { HomeownerPage } from "../pages/homeownerPage"


const homeowner_page = new HomeownerPage

beforeEach(() => {
  // Load the Homeowner Page
  homeowner_page.goto()
})

describe('The Homeowner Page', () => {
  it('Has correct url, title and main sections', () => {
    cy.url().should('eq', homeowner_page.URL)
    cy.title().should('eq', homeowner_page.TITLE)
    homeowner_page.mainHeader().should('exist')
    homeowner_page.header().should('have.text', "Access your home value and market insights for free")
    homeowner_page.searchField().find('input').should('have.attr', 'placeholder', "Enter your home address")
    homeowner_page.loginRow().should('have.text', "Claimed your home already?\u00a0Log in")
    homeowner_page.bottomText().should('have.text', "Claim your home to access tools to…")
    homeowner_page.infoCard().should('exist') 
    homeowner_page.footerSection().should('exist')
  })
})
