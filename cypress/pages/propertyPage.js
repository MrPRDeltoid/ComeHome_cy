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
  // Photo Section
  photoSection() {return cy.getBySel("carousel-section")}
  // Intro Section
  introSection() {return cy.getBySel("property-intro-section")}
  introSectionAddress() {return this.introSection().find('.PropertyIntro__Address')}
  introSectionDetails() {return cy.getBySel("property-info")}
  // Property Details Section
  propertyDetailsSection() {return cy.get('[class$=__AdditionalHomeDetails]')}
  propertyDetailsTable() {return this.propertyDetailsSection().find('table')}
  propertyDetailsCaption() {return this.propertyDetailsSection().find('caption')}
  propertyDetailsRow() {return this.propertyDetailsTable().find('tr')}
  propertyDetailsAttribution() {return this.propertyDetailsSection().find('.AdditionalHomeDetails__Legal')}
  // Summary Options Section
  summaryOptionsPanel() {return cy.getBySel("summary-options-panel")}
  listingStatus() {return cy.getBySel("listing-status")}
  listingStatusHeader() {return this.listingStatus().find('.PDPRightRailCard__ListingStatus')}
  listingStatusMonthlyPayment() {return cy.getBySel("monthly-payment")}
  listingStatusMortgageInfoButton() {return this.listingStatusMonthlyPayment().find('button')}
  mortgageInfo() {return this.summaryOptionsPanel().find('.PDPRightRailCard__MortgageInfo')}
  mortgageInfoLabel() {return this.mortgageInfo().find('[class$=__Label]')}
  mortgageInfoValue() {return this.mortgageInfo().find('[class$=__Value]')}
  getPreApprovedButton() {return this.summaryOptionsPanel().find('[data-event-name=click_lender_cta]')}
  contactAgentButton() {return cy.getBySel("contact-agent-button")}
  // TODO: Cannot chain mulitple find methods? So following Share/Save button needs top selector defined to get both button and label elements using find
  shareButton() {return cy.getBySel("share-button")}
  shareButtonButton() {return this.shareButton().find('button')}
  shareButtonLabel() {return this.shareButton().find('label')}
  saveButton() {return cy.getBySel("save-button")}
  saveButtonButton() {return this.saveButton().find('button')}
  saveButtonLabel() {return this.saveButton().find('.PDPRightRailCard__ButtonLabel')}
  mlsAttribution() {return this.summaryOptionsPanel().find('.PDPRightRailCard__MLSAttribution')}
  // Upsell Section
  upsellSection() {return cy.getBySel("upsell-section")}
  upsellSectionClaimHomeButton() {return cy.get('[data-event-name=click_property_details_owner_promo]')}
  // Map Section
  mapViewSection() {return cy.get('section[class^=MapPropertyPage__MapPropertyPage]')}
  // AVM Breakdown Section
  avmBreakdownSection() {return cy.getBySel("avm-breakdown")}
  // AVM Breakout Section
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
