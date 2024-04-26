import { HomePage } from "../pages/homePage"
import { PublicView } from "../pages/propertyPage"


const home_page = new HomePage
const public_view = new PublicView
describe('The Home Page', () => {
  // Basic tests for logged out user on the Home Page
  beforeEach(() => {
    // Load the landing page
    home_page.visit()
  })

  it('Has correct sections', () => {
    // Check major page sections are present
    home_page.mainHeader().should('exist')
    home_page.topSection().should('exist')
    home_page.photoSection().should('exist')
    home_page.trackOrBuyHomeSection().should('exist')
    home_page.yourTeamAgentSection().should('exist')
    home_page.footerSection().should('exist')
  })

  it('Has correct header and subheader text', () => {
    // Check correct header and subjeader text
    home_page.header().should('have.text', "Find your dream home")
    home_page.subheader().should('have.text', "Search homes in your neighborhood and find a house that's right for you.")
  })

  it('Can search for a property and select to show correct property page', () => {
    // Enter a valid address in the search field and load the related property page
    const property_data = require('../data/properties.json')['property1']
    home_page.searchForProperty(property_data['street_address'])
    // Verify breadcrumb section
    const breadcrumb_exp = ["Home", `${property_data['city']}, ${property_data['state']}`, property_data['zip'], property_data['street_address']]
    public_view.breadcrumbsSection().find('li').each(($el, index) => {
      expect($el.text()).to.equal(breadcrumb_exp[index])
    })
    // Verify state of view buttons
    public_view.publicViewButton().should('have.attr', 'data-state', 'active')
    public_view.ownerViewButton().should('have.attr', 'data-state', 'inactive')
    // Verify property details header
    public_view.introSectionAddress()
      .should('have.text', `${property_data['street_address']}., ${property_data['city']}, ${property_data['state']} ${property_data['zip']}`)
    public_view.introSectionDetails()
      .should('have.text', `${property_data['property_type']}${property_data['beds']} Beds${property_data['baths']} Baths${property_data['gla']} Sq Ft`)
  })

  it('Shows correct content in track or buy home section', () => {
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

  it('Shows correct content in the find an agent section', () => {
    home_page.findAgentTitle().should('have.text', "Need help finding an agent? We'll connect you.")
    home_page.findAgentDescription()
      .should('have.text', "We can help pair you with the right agent for your real estate needs. Let our team help make locating the best agent easy and smooth.")
    home_page.findAgentButton()
      .should('have.text', "Learn More")
      .and('not.be.disabled')
      .and('have.attr', 'href', '/concierge-team')
  })
})
