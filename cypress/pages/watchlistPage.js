import { BasePage } from "./basePage"


export class WatchlistPage extends BasePage {
  URL = `${Cypress.config('baseUrl')}watchlist`
  TITLE = "Saved Homes | ComeHome"

  // Watchlist Page elements
  savedHomesButton() {return cy.getBySel("saved-homes-button")}
  savedSearchesButton() {return cy.getBySel("saved-searches-button")}
  buttonHeader() {return cy.getBySel("title")}
  buttonDescription() {return cy.getBySel("desc")}
  buttonHighlight() {return cy.getBySel("highlight")}
  // Elements when not logged in
  loggedOutSection() {return cy.getBySel("logged-out-section")}
  savedIcon() {return cy.getBySel("icon")}
  header() {return cy.getBySel("title")}
  subheader() {return cy.get('.WatchListAlertsLoggedOut__DescriptionSection')}
  signupButton() {return cy.getBySel("signup-button")}
  loginButton() {return cy.getBySel("login-button")}

  // Methods
  goto() {
    cy.visit(this.URL)
  }
}
