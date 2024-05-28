import { BasePage } from "./basePage"


export class SearchPage extends BasePage {
  // Search Page sections
  searchBar() {return cy.getBySel("toolbar")}
  mapSection() {return cy.getBySel("map-section")}
  cardSection() {return cy.getBySel("property-card-section")}

  // Methods
  gotoSearchPage() {
    cy.visit("/search")
  }
}
