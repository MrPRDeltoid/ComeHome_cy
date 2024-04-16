import { BasePage } from "./basePage"


export class HomePage extends BasePage {
  // Main page sections
  topSection() {return cy.get('[class$="__TopSection"]')}
  photoSection() {return cy.get('[class$="__PhotoSection"]')}
  trackOrBuyHomeSection() {return cy.get('[class$="__HomeSubpageTrackOrBuyHome"]')}
  yourTeamAgentSection() {return cy.get('[class$="__HomeSubpageYourTeamAgent"]')}
  // Page headers
  header() {return cy.get('h1')}
  subheader() {return cy.get('[class$="__SubHeader"]')}
  // Property search
  findHomeButton() {return cy.getBySel("find-a-home")}
  trackHomeButton() {return cy.getBySel("track-my-home")}
  searchField() {return cy.get('[name^="comehome-address-search-"]')}
  searchButton() {return cy.get('button[class$="HomeSubpageSearch__SearchButton"]')}
  // Photo section
  photoColumn() {return cy.get('class$="__PhotoColumn"]')}
  photo() {return cy.get('[class$="__PhotoColumnPhoto"]')}
  // Track or buy home section
  buyHomeTitle() {return cy.getBySel("buy-home-modal-header")}
  buyHomeDescription() {return cy.getBySel("buy-home-modal-description")}
  searchHomesButton() {return cy.getBySel("buy-home-modal-button")}
  yourHomeTitle() {return cy.getBySel("your-home-dash-modal-header")}
  yourHomeDescription() {return cy.getBySel("your-home-dash-modal-description")}
  seeMyHomeButton() {return cy.getBySel("your-home-dash-modal-button")}
  // Find agent section
  findAgentTitle() {return cy.get('.HomeSubpageYourTeamAgent__CardHeader')}
  findAgentDescription() {return cy.get('.HomeSubpageYourTeamAgent__CardDescription')}
  findAgentButton() {return cy.getBySel("find-an-agent-cta")}

  // Methods
  visit() {
    cy.visit("/")
  }
  
  searchForProperty(address) {
    this.searchField().type(address).wait(500)
    this.searchButton().click()
  }
}
