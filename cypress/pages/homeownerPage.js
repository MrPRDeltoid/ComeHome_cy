import { BasePage } from "./basePage"


export class HomeownerPage extends BasePage {
  URL = `${Cypress.config('baseUrl')}homeowner`
  TITLE = "My Home | ComeHome"

  // Homeowner Page elements
  header() {return cy.get('h1')}
  searchField() {return cy.getBySel("my-home-search")}
  loginRow() {return cy.getBySel("my-home-login")}
  bottomText() {return cy.get('[class$=__CHOHomePageHeroBottomText]')}
  infoCard() {return cy.get('[class$=__CHOHomePageCard]')}
  // When address is specified
  avmSection() {return cy.getBySel("avm-section")}
  avmSectionAddress() {return cy.getBySel("avm-address")}
  avmSectionDetails() {return cy.getBySel("avm-property-details")}

  // Methods
  goto() {
    cy.visit("/homeowner")
  }
}
