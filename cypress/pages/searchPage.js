import { BasePage } from "./basePage"


export class SearchPage extends BasePage {
  URL = `${Cypress.config('baseUrl')}search`
  TITLE = "Real estate and homes for sale | ComeHome"
  // Search Page sections
  searchBar() {return cy.getBySel("toolbar")}
  mapSection() {return cy.getBySel("map-section")}
  propertySection() {return cy.getBySel("property-card-section")}

  // Methods
  goto() {
    cy.visit(this.URL)
  }
}
