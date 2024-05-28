import { BasePage } from "./basePage"


export class PropertyPage extends BasePage {
  // Elements common to both public and owner views
  breadcrumbsSection() {return cy.getBySel("breadcrumbs")}
  publicViewButton() {return cy.getBySel("public-view-button")}
  ownerViewButton() {return cy.getBySel("owner-view-button")}
  
  // Methods

}

export class PublicView extends PropertyPage {
  // Elements and methods specific to public view
  photoSection() {return cy.getBySel("carousel-section")}
  introSection() {return cy.getBySel("property-intro-section")}
  introSectionAddress() {return cy.get('.PropertyIntro__Address')}
  introSectionDetails() {return cy.getBySel("property-info")}
  propertyDetailsSection() {return cy.get('[class$="__AdditionalHomeDetails"]')}
  summaryOptionsPanel() {return cy.getBySel("summary-options-panel")}
  upsellSection() {return cy.getBySel("upsell-section")}
  mapViewSection() {return cy.get('section[class^="MapPropertyPage__MapPropertyPage"]')}
  
  //Methods

}

export class OwnerView extends PropertyPage{
  // Elements and methods specific to owner view
  avmSection() {return cy.getBySel("avm-section")}
  avmSectionAddress() {return cy.get('[data-hc-name="avm-address"] > h1')}
  avmSectionDetails() {return cy.getBySel("avm-property-details")}
  brokerageSection() {return cy.get('class$="__BrokerageAttribution"]')}
  yourHomeSection() {return cy.getBySel("ho-dashboard-section-your_home")}
  yourNeighborhoodSection() {return cy.getBySel("ho-dashboard-section-your_neighborhood")}
  toolsAndInsightsSection() {return cy.getBySel("ho-dashboard-section-tools_and_insights")}

  //Methods
  
}
