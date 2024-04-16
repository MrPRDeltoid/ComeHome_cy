import { MainHeader } from "../pages/basePage"
import { HomePage } from "../pages/homePage"


const main_header = new MainHeader
const home_page = new HomePage
describe('The Main Header', () => {
  // Tests for the main top header
  beforeEach(() => {
    // Load the landing page
    home_page.visit()
  })

  

  it('Has correct main header elements', () => {
    // Check header has correct elements
    home_page.mainHeader().within(() =>{
      main_header.logo().should('exist')
    })
    main_header.buyHomeButton().should('contain.text', "Find a home")
    main_header.myHomeButton().should('contain.text', "My home")
    main_header.savedButton().should('contain.text', "Saved")
    main_header.alertsButton().should('contain.text', "Alerts")
    main_header.findAnAgentButton().should('contain.text', "Find an agent")
    main_header.joinLoginLink().should('have.text', "Join or Log in")
  })
})
