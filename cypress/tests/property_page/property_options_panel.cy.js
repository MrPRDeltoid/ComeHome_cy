import { PublicView } from "../../pages/propertyPage"


const public_view = new PublicView
const property = 'property1'

beforeEach(() => {
  // Load the Property Page for the given property data
  public_view.loadPropertyPage(property)
})

describe('The Options Panel', () => {
  it('Has correct listing and mortgage information', function() {
    const data = this.property_data[property]
    public_view.listingStatusHeader().should('contain.text', "Off Market $")
    public_view.listingStatusMonthlyPayment().should('contain.text', "Estimated monthly payment $")
    public_view.listingStatusMortgageInfoButton().should('have.attr', 'aria-expanded', 'false')
    public_view.mortgageInfo().should('not.exist')
    // Click the mortgage info button to expand
    public_view.listingStatusMortgageInfoButton().click()
    public_view.mortgageInfo().should('exist')
    // TODO: Research a better way to do this
    const label_exp = ['Year fixed', 'Rate', 'Mortgage Payment', 'Property taxes', 'Insurance', 'HOA fees']
    public_view.mortgageInfoLabel().each(($label, index) => {
        cy.wrap($label).should('have.text', label_exp[index])
    })
    const value_exp = ['30', '%', '$', '$', '--', '--']
    public_view.mortgageInfoValue().each(($value, index) => {
        cy.wrap($value).should('contain.text', value_exp[index])  // Using contain, as values will change
    })
    // Click to hide mortgage info
    public_view.listingStatusMortgageInfoButton().click()
    public_view.mortgageInfo().should('not.exist')
    public_view.contactAgentButton().should('have.text', "Contact Agent").and('be.enabled')
    public_view.requestTourButtonButton().should('be.enabled').and('have.attr', 'aria-label', "Request tour")
    public_view.requestTourButtonLabel().should('have.text', "Request tour")
    public_view.shareButtonButton().should('be.enabled').and('have.attr', 'aria-label', "share")
    public_view.shareButtonLabel().should('have.text', "Share")
    public_view.saveButtonButton().should('be.enabled').and('have.attr', 'aria-label', "Save this property to your Watchlist")
    public_view.saveButtonLabel().should('have.text', "Save")
    public_view.mlsAttribution().should('have.text', "Courtesy of RE/MAX Gold Coast REALTORS")
  })
})
