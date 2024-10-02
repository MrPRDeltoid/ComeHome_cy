import { BasePage } from "./basePage"


export class PropertyPage extends BasePage {
  // Elements common to both public and owner views
  breadcrumbsSection() {return cy.getBySel("breadcrumbs")}
  publicViewButton() {return cy.getBySel("public-view-button")}
  ownerViewButton() {return cy.getBySel("owner-view-button")}
  
  // Methods

}

export class PublicView extends PropertyPage {
  URL = `${Cypress.config('baseUrl')}property-details`

  // Elements and methods specific to public view
  photoSection() {return cy.getBySel("carousel-section")}
  introSection() {return cy.getBySel("property-intro-section")}
  introSectionAddress() {return cy.get('.PropertyIntro__Address')}
  introSectionDetails() {return cy.getBySel("property-info")}
  propertyDetailsSection() {return cy.get('[class$=__AdditionalHomeDetails]')}
  propertyDetailsTable() {return this.propertyDetailsSection().find('table')}
  propertyDetailsCaption() {return this.propertyDetailsSection().find('caption')}
  propertyDetailsRow() {return this.propertyDetailsTable().find('tr')}
  propertyDetailsAttribution() {return this.propertyDetailsSection().find('.AdditionalHomeDetails__Legal')}
  summaryOptionsPanel() {return cy.getBySel("summary-options-panel")}
  upsellSection() {return cy.getBySel("upsell-section")}
  upsellSectionClaimHomeButton() {return cy.get('[data-event-name=click_property_details_owner_promo]')}
  mapViewSection() {return cy.get('section[class^=MapPropertyPage__MapPropertyPage]')}
  avmBreakdownSection() {return cy.getBySel("avm-breakdown")}
  avmBreakoutSection() {return cy.getBySel("avm-breakout-section")}
  
  //Methods
  goto(slug) {
    cy.visit(`${this.URL}/${slug}`)
  }

  loadPropertyPage(property) {
    const property_data = require('../data/properties.json')[property]
    const slug = this.constructSlug(property_data)
    this.goto(slug)
    cy.wrap(slug).as('slug')
    cy.fixture('../data/properties.json').as('property_data')
  }
}

export class OwnerView extends PropertyPage{
  // Elements and methods specific to owner view
  avmSection() {return cy.getBySel("avm-section")}
  avmSectionAddress() {return cy.getBySel("avm-address")}
  avmSectionDetails() {return cy.getBySel("avm-property-details")}
  brokerageSection() {return cy.get('class$=__BrokerageAttribution]')}
  yourHomeSection() {return cy.getBySel("ho-dashboard-section-your_home")}
  yourNeighborhoodSection() {return cy.getBySel("ho-dashboard-section-your_neighborhood")}
  toolsAndInsightsSection() {return cy.getBySel("ho-dashboard-section-tools_and_insights")}

  //Methods
  
}
