import { BasePage } from "./basePage"


export class AlertsPage extends BasePage {
  // Alerts Page elements
  header() {return cy.get(".AlertsHeader__AlertTitle")}
  subheader() {return cy.get(".AlertsHeader__AlertSubTitle")}
  colorBar() {return cy.get(".AlertsHeader__AlertsBottomColorBar")}
  manageLink() {return cy.get(".ManageAlertsLink__AlertsLink")}
  // Elements when not logged in
  loggedOutSection() {return cy.getBySel("logged-out-section")}
  alertsIcon() {return cy.getBySel("icon")}
  loggedOutHeader() {return cy.getBySel("title")}
  loggedOutSubheader() {return cy.get('.WatchListAlertsLoggedOut__DescriptionSection')}
  signupButton() {return cy.getBySel("signup-button")}
  loginButton() {return cy.getBySel("login-button")}

  // Methods
  gotoAlertsPage() {
    cy.visit("/alerts")
  }
}
