import { WatchlistPage } from "../pages/watchlistPage"


const watchlist_page = new WatchlistPage

beforeEach(() => {
  // Load the Watchlist Page
  watchlist_page.goto()
})

describe('The Watchlist Page', () => {
  it('Has correct url, title and main sections', () => {
    cy.url().should('eq', watchlist_page.URL)
    cy.title().should('eq', watchlist_page.TITLE)
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
    watchlist_page.savedIcon().should('exist')
    watchlist_page.loggedOutSection().find('h1').should('have.text', "Saved homes")
    watchlist_page.subheader().should('have.text', "We'll alert you to changes when there's news about a saved property")
    watchlist_page.signupButton().should('have.text', "Sign Up")
    watchlist_page.loginButton().should('have.text', "Login")
    watchlist_page.footerSection().should('exist')
  })
})
