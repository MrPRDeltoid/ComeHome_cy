import { AlertsPage } from "../pages/alertsPage"


const alerts_page = new AlertsPage

beforeEach(() => {
  // Load the Alerts Page
  alerts_page.goto()
})

describe('The Alerts Page', () => {
  it('Has correct url, title and main sections', () => {
    cy.url().should('eq', alerts_page.URL)
    cy.title().should('eq', alerts_page.TITLE)
    alerts_page.mainHeader().should('exist')
    alerts_page.header().should('have.text', "Alerts")
    alerts_page.subheader().should('have.text', "Find out what's new with your saved homes")
    alerts_page.colorBar().should('have.attr', 'style')
    alerts_page.manageLink().should('have.text', "Manage Alerts")
    alerts_page.alertsIcon().should('exist')
    alerts_page.loggedOutSection().find('h1').should('have.text', "Activate Alerts")
    alerts_page.loggedOutSubheader().should('have.text', "We'll alert you to changes when there's news about a saved property")
    alerts_page.signupButton().should('have.text', "Sign Up")
    alerts_page.loginButton().should('have.text', "Login")
    alerts_page.footerSection().should('exist')
  })
})
