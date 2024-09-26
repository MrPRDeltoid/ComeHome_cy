import { PublicView } from "../../pages/propertyPage"


const public_view = new PublicView
const property = 'property1'

beforeEach(() => {
  // Load the Property Page for the given property data
  public_view.loadPropertyPage(property)
})

describe('The Intro Section', () => {
  it('Has correct property information', function() {
    const data = this.property_data[property]
    public_view.introSectionAddress().should('have.text', `${data['street']}., ${data['city']}, ${data['state']} ${data['zip']}`)
    public_view.introSectionDetails().should('have.text', `${data['type']}${data['beds']} Beds${data['baths']} Baths${data['gla']} Sq Ft`)
  })
})
