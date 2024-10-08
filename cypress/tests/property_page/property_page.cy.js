import { PublicView } from "../../pages/propertyPage"


const public_view = new PublicView
const property = 'property1'

beforeEach(() => {
  // Load the Property Page for the given property data
  public_view.loadPropertyPage(property)
})

describe('The Property Page', () => {
  it('Has correct url, title and main sections', function() {
    cy.url().should('eq', `${public_view.URL}/${this.slug}`)
    const full_address = public_view.constructFullAddress(this.property_data[property])
    cy.title().should('eq', `${full_address} | Property Details | ComeHome`)
    public_view.mainHeader().should('exist')
    public_view.breadcrumbsSection().should('exist')
    public_view.photoSection().should('exist')
    public_view.brokerageSection().should('exist')
    public_view.introSection().should('exist')
    public_view.propertyDetailsSection().should('exist')
    public_view.summaryOptionsPanel().should('exist')
    public_view.upsellSection().should('exist')
    public_view.mapViewSection().should('exist')
    public_view.avmBreakdownSection().should('exist')
    public_view.avmBreakdownSection().should('exist')
    public_view.footerSection().should('exist')
  })
})
