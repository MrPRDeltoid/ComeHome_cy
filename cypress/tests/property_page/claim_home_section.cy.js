import { PublicView } from "../../pages/propertyPage"
import { HomeownerPage } from "../../pages/homeownerPage"


const public_view = new PublicView
const homeowner_page = new HomeownerPage
const property = 'property1'

beforeEach(() => {
  // Load the Property Page for the given property data
  public_view.loadPropertyPage(property)
})

describe('The Claim Home Section', () => {
  it('Clicking Claim Home button loads homeownder page', function() {
    const data = this.property_data[property]
    public_view.upsellSectionClaimHomeButton().click()
    cy.url().should('eq', `${homeowner_page.URL}/${this.slug}`)
    const full_address = public_view.constructFullAddress(data)
    cy.title().should('eq', `${full_address} | My Home | ComeHome`)
    homeowner_page.avmSectionAddress().find('h1').should('have.text', `${data['street']}`)
    homeowner_page.avmSectionDetails().should('have.text', `${data['beds']} Bed|${data['beds']} Bath|${data['gla'].replace(',', '')} Sq Ft.`)
  })
})
