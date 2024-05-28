import { HomePage } from "../pages/homePage"
import { OwnerView, PublicView } from "../pages/propertyPage"


const home_page = new HomePage
const public_view = new PublicView
const owner_view = new OwnerView

beforeEach(() => {
  // Load the landing page
  home_page.visit()
})

describe('The Home Page', () => {
  // Basic tests for logged out user on the Home Page

  it('Has correct sections', () => {  // TODO: Update with visual tests
    home_page.mainHeader().should('exist')
    home_page.topSection().should('exist')
    home_page.photoSection().should('exist')
    home_page.trackOrBuyHomeSection().should('exist')
    home_page.yourTeamAgentSection().should('exist')
    home_page.footerSection().should('exist')
  })

  it('Has correct title and url', () => {
    cy.url().should('equal', Cypress.config('baseUrl'))
    cy.title().should('eq', "Home | ComeHome")
  })
})

describe('The Find Home search view', () => {

  it('Has correct elements and text', () => {
    home_page.header().should('have.text', "Find your dream home")
    home_page.subheader().should('have.text', "Search homes in your neighborhood and find a house that's right for you.")
    home_page.findHomeButton().should('have.text', "Find a home")
    home_page.searchField().should('exist').and('have.attr', 'placeholder', "Search for a city, ZIP code or address")
    home_page.searchButton().should('exist')
  })

  it('Can search for a property and select to show correct property page', () => {
    // Enter a valid address in the search field and load the related public view property page
    const property_data = require('../data/properties.json')['property1']
    home_page.searchForProperty(property_data['street'])
    cy.url().should('contain', 'property-details')
    cy.title().should('contain', property_data['street'])
    // Verify breadcrumb section
    const breadcrumb_exp = ["Home", `${property_data['city']}, ${property_data['state']}`, property_data['zip'], property_data['street']]
    public_view.breadcrumbsSection().find('li').each(($el, index) => {
      expect($el.text()).to.equal(breadcrumb_exp[index])
    })
    // Verify state of view buttons
    public_view.publicViewButton().should('have.attr', 'data-state', 'active')
    public_view.ownerViewButton().should('have.attr', 'data-state', 'inactive')
    // Verify property details header
    public_view.introSectionAddress()
      .should('have.text', `${property_data['street']}., ${property_data['city']}, ${property_data['state']} ${property_data['zip']}`)
    public_view.introSectionDetails()
      .should('have.text', `${property_data['type']}${property_data['beds']} Beds${property_data['baths']} Baths${property_data['gla']} Sq Ft`)
  })
})

describe('The My Home search view', () => {
  
  beforeEach(() => {
    // Switch to My Home value search
    home_page.trackHomeButton().click()
  })

  it('Has correct elements and text', () => {
    home_page.header().should('have.text', "See your home's full potential")
    home_page.subheader().should('have.text', "Claim your home and unlock features to see your home's value, equity, and more.")
    home_page.trackHomeButton().should('have.text', "My home value")
    home_page.searchField().should('exist').and('have.attr', 'placeholder', "Enter your home address")
    home_page.searchButton().should('exist')
  })

  it('Can search for a property and select to show correct property page', () => {
    // Enter a valid address in the search field and load the related homeowner view property page
    const property_data = require('../data/properties.json')['property1']
    home_page.searchForProperty(property_data['street'])
    cy.url().should('contain', 'homeowner')
    cy.title().should('contain', property_data['street'])
    // Verify AVM section address and details
    owner_view.avmSectionAddress().find('h1').should('have.text', property_data['street'])
    owner_view.avmSectionDetails().should('have.text', `${property_data['beds']} Bed|${property_data['baths']} Bath|${property_data['gla'].replace(',', '')} Sq Ft.`)
    })
})

describe('The Track or Buy Home section', () => {

  it('Shows correct content', () => {
    home_page.buyHomeTitle().should('have.text', "Buying a home")
    home_page.buyHomeDescription()
      .should('have.text', "Search homes for sale and filter by price, neighborhood, school ratings, and more. Find the perfect home that fits your needs.")
    home_page.searchHomesButton()
      .should('have.text', "Search homes")
      .and('not.be.disabled')
      .and('have.attr', 'href', '/search')
    home_page.yourHomeTitle().should('have.text', "Your homeowner dashboard")
    home_page.yourHomeDescription()
      .should('have.text', "See your home's value, equity, and what a home renovation would do to your value. Claim your home and access these features and more.")
    home_page.seeMyHomeButton()
      .should('have.text', "See my home")
      .and('not.be.disabled')
      .and('have.attr', 'href', '/homeowner')
  })
})

describe('The Find an Agent section', () => {

  it('Shows correct content', () => {
    home_page.findAgentTitle().should('have.text', "Need help finding an agent? We'll connect you.")
    home_page.findAgentDescription()
      .should('have.text', "We can help pair you with the right agent for your real estate needs. Let our team help make locating the best agent easy and smooth.")
    home_page.findAgentButton()
      .should('have.text', "Learn More")
      .and('not.be.disabled')
      .and('have.attr', 'href', '/concierge-team')
  })
})
