import { MainHeader } from "../../pages/basePage"
import { SearchPage } from "../../pages/searchPage"
import { HomePage } from "../../pages/homePage"
import { HomeownerPage } from "../../pages/homeownerPage"
import { WatchlistPage } from "../../pages/watchlistPage"
import { AlertsPage } from "../../pages/alertsPage"
import { AgentPage } from "../../pages/agentPage"


const main_header = new MainHeader
const home_page = new HomePage
const search_page = new SearchPage
const homeowner_page = new HomeownerPage
const watchlist_page = new WatchlistPage
const alerts_page = new AlertsPage
const agent_page = new AgentPage

beforeEach(() => {
  // Load the landing page
  home_page.visit()
})

describe('The Main Menu', () => {
  // Tests for the main top header
  it('Has correct elements', () => {
    // Check header has correct elements
    home_page.mainHeader().within(() =>{
      main_header.logo().should('exist')
    })
    main_header.buyHomeButton().should('contain.text', "Find a home")
    main_header.myHomeButton().should('contain.text', "My home")
    main_header.savedButton().should('contain.text', "Saved")
    main_header.alertsButton().should('contain.text', "Alerts")
    main_header.findAnAgentButton().should('contain.text', "Find an agent")
    main_header.joinLoginLink().should('have.text', "Join or Log in")
  })
})

describe('The Main Menu Options', () => {
  // Verify clicking on each main menu item loads correct page
  it('Clicking Find a Home loads correct page', () => {
    main_header.buyHomeButton().click()
    cy.url().should('eq', search_page.URL)
    cy.title().should('eq', search_page.TITLE)
  })

  it('Clicking My home loads correct page', () => {
    main_header.myHomeButton().click()
    cy.url().should('eq', homeowner_page.URL)
    cy.title().should('eq', homeowner_page.TITLE)
  })

  it('Clicking Saved loads correct page', () => {
    main_header.savedButton().click()
    cy.url().should('eq', watchlist_page.URL)
    cy.title().should('eq', watchlist_page.TITLE)
  })

  it('Clicking Alerts loads correct page', () => {
    main_header.alertsButton().click()
    cy.url().should('eq', alerts_page.URL)
    cy.title().should('eq', alerts_page.TITLE)
  })

  it('Clicking Find an agent loads correct page', () => {
    main_header.findAnAgentButton().click()
    cy.url().should('eq', agent_page.URL)
    // cy.title().should('eq', agent_page.TITLE)  // TODO: BUG - The title is not updated, shows title from previous loaded page
  })
})
