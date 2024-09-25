import { PublicView } from "../../pages/propertyPage"
import { HomeownerPage } from "../../pages/homeownerPage"


const public_view = new PublicView
const homeowner_page = new HomeownerPage
const property = 'property1'

beforeEach(() => {
  // Load the Property Page for the given property data
  public_view.loadPropertyPage(property)
})

describe('The Top Bar Section', () => {
  it('Has correct elements, text, and properties', function() {
    const data = this.property_data[property]
    public_view.breadcrumbsSection().should('have.text', `Home${data['city']}, ${data['state']}${data['zip']}${data['street']}`)
    public_view.publicViewButton().should('have.text', "Currently showingPublic view").and('have.attr', 'data-state', "active")
    public_view.ownerViewButton().should('have.text', "Owner view").and('have.attr', 'data-state', "inactive")
  })

  it('Switches views correctly when toggling buttons', function() {
    const data = this.property_data[property]
    // Click Owner view to show homeowner page
    public_view.ownerViewButton().click()
    cy.url().should('eq', `${homeowner_page.URL}/${this.slug}`)
    const full_address = public_view.constructFullAddress(data)
    cy.title().should('eq', `${full_address} | My Home | ComeHome`)
    public_view.breadcrumbsSection().should('have.text', `Home${data['city']}, ${data['state']}${data['zip']}${data['street']}`)
    public_view.publicViewButton().should('have.text', "Public view").and('have.attr', 'data-state', "inactive")
    public_view.ownerViewButton().should('have.text', "Currently showingOwner view").and('have.attr', 'data-state', "active")
    // Click Public view to show property page
    public_view.publicViewButton().click()
    cy.url().should('eq', `${public_view.URL}/${this.slug}`)
    cy.title().should('eq', `${full_address} | Property Details | ComeHome`)
    public_view.breadcrumbsSection().should('have.text', `Home${data['city']}, ${data['state']}${data['zip']}${data['street']}`)
    public_view.publicViewButton().should('have.text', "Currently showingPublic view").and('have.attr', 'data-state', "active")
    public_view.ownerViewButton().should('have.text', "Owner view").and('have.attr', 'data-state', "inactive")
  })
})
