import { BasePage } from "./basePage"


export class FindHomePage extends BasePage {
  // Find Home Page sections
  searchBar() {return cy.getBySel("toolbar")}
  mapSection() {return cy.getBySel("map-section")}
  cardSection() {return cy.getBySel("property-card-section")}

  // Methods
  gotoFindHomePage() {
    cy.visit("/search")
  }
}
