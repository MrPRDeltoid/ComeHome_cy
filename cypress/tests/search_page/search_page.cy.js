import { SearchPage } from "../../pages/searchPage"


const search_page = new SearchPage

beforeEach(() => {
  // Load the Search Page
  search_page.goto()
})

describe('The Search Page', () => {
  it('Has correct url, title and main sections', () => {
    cy.url().should('eq', search_page.URL)
    cy.title().should('eq', search_page.TITLE)
    search_page.mainHeader().should('exist')
    search_page.searchBar().should('exist')
    search_page.mapSection().should('exist')
    search_page.propertySection().should('exist')
    search_page.footerSection().should('exist')
  })
})
