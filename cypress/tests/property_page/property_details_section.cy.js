import { PublicView } from "../../pages/propertyPage"


const public_view = new PublicView
const property = 'property1'

beforeEach(() => {
  // Load the Property Page for the given property data
  public_view.loadPropertyPage(property)
})

describe('The Details Section', () => {
  it('Has correct property information', function() {
    const data = this.property_data[property]
    public_view.propertyDetailsTable().should('exist')
    public_view.propertyDetailsCaption().should('have.text', "Additional home details")
    // Verify correct table data  
    // TODO: Research a better way to do this
    const label_exp = ['Living Area', 'Lot Size', 'Total Rooms', 'Bedrooms', 'Bathrooms', 'Stories', 'Year Built', 'Property Type', 'Zoning',
        'HOA Name', 'HOA Fee', 'HOA Includes', 'Tax Year', 'Tax Amount', 'Property in Flood Zone']
    public_view.propertyDetailsTable().find('th').each(($label, index) => {
        cy.wrap($label).should('have.text', label_exp[index])
    })
    const value_exp = [`${data['gla']} Sq.Ft.`, `${data['lot_size']} Sq.Ft.`, '--', String(data['beds']), String(data['baths']), '1', data['year_built'], data['type'],
        'PSR6', '--', '--', '--', '2024', '$8,856', '--']
    public_view.propertyDetailsTable().find('td').each(($value, index) => {
        cy.wrap($value).should('have.text', value_exp[index])
    })
    public_view.propertyDetailsAttribution().should('have.text', "Data provided by CRMLS.")
  })
})
