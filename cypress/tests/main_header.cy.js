import { MainHeader } from "../pages/basePage"
import { SearchPage } from "../pages/searchPage"
import { HomePage } from "../pages/homePage"
import { HomeownerPage } from "../pages/homeownerPage"
import { WatchlistPage } from "../pages/watchlistPage"
import { AlertsPage } from "../pages/alertsPage"
import { AgentPage } from "../pages/agentPage"


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

describe('The Main Header', () => {
  // Tests for the main top header

  it('Has correct main header elements', () => {
    // Check header has correct elements
    home_page.mainHeader().within(() =>{
      main_header.logo().should('exist')
    })  // TODO: Update to visual test
    main_header.buyHomeButton().should('contain.text', "Find a home")
    main_header.myHomeButton().should('contain.text', "My home")
    main_header.savedButton().should('contain.text', "Saved")
    main_header.alertsButton().should('contain.text', "Alerts")
    main_header.findAnAgentButton().should('contain.text', "Find an agent")
    main_header.joinLoginLink().should('have.text', "Join or Log in")
  })
})

describe('The Main Header Options', () => {
  // Tests clicking on each main header item

  it('Can click Find a home to show correct page', () => {
    main_header.buyHomeButton().click()
    cy.url().should('eq', `${Cypress.config('baseUrl')}search`)
    cy.title().should('eq', "Real estate and homes for sale | ComeHome")
    search_page.mainHeader().should('exist')  // TODO: Update to visual test
    search_page.searchBar().should('exist')  // TODO: Update to visual test
    search_page.mapSection().should('exist')
    search_page.cardSection().should('exist')
    search_page.footerSection().should('exist')
  })

  
  it('Can click My home to show correct page', () => {
    main_header.myHomeButton().click()
    cy.url().should('eq', `${Cypress.config('baseUrl')}homeowner`)
    cy.title().should('eq', "My Home | ComeHome")
    homeowner_page.mainHeader().should('exist')
    homeowner_page.header().should('have.text', "Access your home value and market insights for free")
    homeowner_page.searchField().find('input').should('exist').and('have.attr', 'placeholder', "Enter your home address")
    homeowner_page.loginRow().should('have.text', "Claimed your home already?\u00a0Log in")
    homeowner_page.bottomText().should('have.text', "Claim your home to access tools to…")
    homeowner_page.infoCard().should('exist')  // TODO: Update to visial test
    homeowner_page.footerSection().should('exist')
  })

  it('Can click Saved to show correct page', () => {
    main_header.savedButton().click()
    cy.url().should('eq', `${Cypress.config('baseUrl')}watchlist`)
    cy.title().should('eq', "Saved Homes | ComeHome")
    watchlist_page.mainHeader().should('exist')
    watchlist_page.savedHomesButton().within(() => {
      watchlist_page.buttonHeader().should('have.text', "Saved homes")
      watchlist_page.buttonDescription().should('have.text', "Homes that you have liked and want to follow.")
      watchlist_page.buttonHighlight().should('have.attr', 'style')
    })
    watchlist_page.savedSearchesButton().within(() => {
      watchlist_page.buttonHeader().should('have.text', "Saved searches")
      watchlist_page.buttonDescription().should('have.text', "Future homes that come onto the market based on your search and filter criteria.")
      watchlist_page.buttonHighlight().should('not.have.attr', 'style')
    })
    watchlist_page.savedIcon().should('exist')  // TODO: Update to visual test
    watchlist_page.loggedOutSection().find('h1').should('have.text', "Saved homes")
    watchlist_page.subheader().should('have.text', "We'll alert you to changes when there's news about a saved property")
    watchlist_page.signupButton().should('have.text', "Sign Up")
    watchlist_page.loginButton().should('have.text', "Login")
    watchlist_page.footerSection().should('exist')
  })

  it('Can click Alerts to show correct page', () => {
    main_header.alertsButton().click()
    cy.url().should('eq', `${Cypress.config('baseUrl')}alerts`)
    cy.title().should('eq', "Alerts | ComeHome")
    alerts_page.mainHeader().should('exist')
    alerts_page.header().should('have.text', "Alerts")
    alerts_page.subheader().should('have.text', "Find out what's new with your saved homes")
    alerts_page.colorBar().should('exist')
    alerts_page.manageLink().should('have.text', "Manage Alerts")
    alerts_page.alertsIcon().should('exist')  // TODO: Update to visual test
    alerts_page.loggedOutSection().find('h1').should('have.text', "Activate Alerts")
    alerts_page.loggedOutSubheader().should('have.text', "We'll alert you to changes when there's news about a saved property")
    alerts_page.signupButton().should('have.text', "Sign Up")
    alerts_page.loginButton().should('have.text', "Login")
    alerts_page.footerSection().should('exist')
  })

  it('Can click Find an agent to show correct page', () => {
    main_header.findAnAgentButton().click()
    cy.url().should('eq', `${Cypress.config('baseUrl')}concierge-team`)
    cy.title().should('eq', "Home | ComeHome")  // TODO: BUG - The title is not updated, shows title from previous loaded page
    agent_page.mainHeader().should('exist')
    agent_page.header().should('have.text', "ComeHome Concierge Team")
    agent_page.subheader().should('have.text', "Connected to thousands of the top real estate agents nationwide.")
    agent_page.connectAgentButton().should('be.enabled').and('have.text', "Connect with an agent")
    agent_page.headshotsImage().should('exist')  // TODO: Update to visual test
    const descriptions_exp = ['Full real estate agent support for buying and selling', 
                              'Guidance throughout the homeownership journey', 
                              'Assistance with contracts & negotiations']
    agent_page.descriptionText().each(($el, index) => {
      expect($el.text()).to.equal(descriptions_exp[index])
    })
    agent_page.secondaryHeader().should('have.text', "Buying, selling or both? Get paired with a top local expert.")
    agent_page.secondarySubheader().should('have.text', "With our experience and your individual needs, we’ll help connect you with the right agent to guide you through your transaction.")
    agent_page.getStartedButton().should('be.enabled').and('have.text', "Get started")
    agent_page.secondaryImage().should('exist')  // TODO: Update to visual test
    agent_page.footerSection().should('exist')
  })
})
